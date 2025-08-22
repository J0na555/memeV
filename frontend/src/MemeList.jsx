import { useEffect, useState } from "react";

function MemeList() {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/memes/")
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch memes');
        }
        return res.json();
      })
      .then(data => {
        setMemes(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const vote = async (memeId, action) => {
    try {
      const response = await fetch(`http://localhost:8000/api/memes/${memeId}/${action}/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        // Refresh the memes list to get updated vote counts
        const updatedMemes = await fetch("http://localhost:8000/api/memes/").then(res => res.json());
        setMemes(updatedMemes);
      }
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-64">Loading memes...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">Error: {error}</div>;
  }

  if (memes.length === 0) {
    return <div className="text-center p-4">No memes found. Add some memes to get started!</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {memes.map(meme => (
        <div key={meme.id} className="border p-4 rounded-lg shadow-md bg-white">
          <h3 className="text-lg font-semibold mb-2">{meme.title}</h3>
          <img src={meme.url} alt={meme.title} className="w-full h-48 object-cover rounded mb-3" />
          <div className="flex gap-2 justify-center">
            <button 
              onClick={() => vote(meme.id, "upvote")}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              👍 {meme.upvotes}
            </button>
            <button 
              onClick={() => vote(meme.id, "downvote")}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              👎 {meme.downvotes}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MemeList;
