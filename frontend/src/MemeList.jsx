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
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="spinner mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading memes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md mx-auto">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <h3 className="text-red-800 font-semibold mb-2">Error Loading Memes</h3>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  if (memes.length === 0) {
    return (
      <div className="text-center p-8">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 max-w-md mx-auto">
          <div className="text-gray-400 text-6xl mb-4">😢</div>
          <h3 className="text-gray-800 font-semibold mb-2">No Memes Found</h3>
          <p className="text-gray-600">Add some memes to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {memes.map((meme, index) => (
        <div 
          key={meme.id} 
          className="card-hover bg-white/90 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl overflow-hidden fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="relative">
            <img 
              src={meme.url} 
              alt={meme.title} 
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
              #{index + 1}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-lg font-bold mb-3 text-gray-800 line-clamp-2">{meme.title}</h3>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <span className="mr-1">👍</span>
                  <span className="font-semibold text-green-600">{meme.upvotes}</span>
                </span>
                <span className="flex items-center">
                  <span className="mr-1">👎</span>
                  <span className="font-semibold text-red-600">{meme.downvotes}</span>
                </span>
              </div>
              <div className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                Score: {meme.upvotes - meme.downvotes}
              </div>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => vote(meme.id, "upvote")}
                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-4 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 btn-animate"
              >
                👍 Upvote
              </button>
              <button 
                onClick={() => vote(meme.id, "downvote")}
                className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 text-white py-2 px-4 rounded-xl font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 btn-animate"
              >
                👎 Downvote
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MemeList;
