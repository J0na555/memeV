import { useEffect, useState } from "react";

function VoteMeme() {
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
          <p className="text-gray-600 text-lg">Loading memes for voting...</p>
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
          <h3 className="text-gray-800 font-semibold mb-2">No Memes to Vote On</h3>
          <p className="text-gray-600">Add some memes to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-5xl font-bold mb-4 text-gradient">
            Vote on Memes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cast your vote and help determine which memes deserve to be at the top!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {memes.map((meme, index) => (
            <div 
              key={meme.id} 
              className="card-hover bg-white/90 backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl overflow-hidden fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={meme.url} 
                  alt={meme.title} 
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  #{index + 1}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{meme.title}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">{meme.upvotes}</div>
                    <div className="text-green-700 font-medium">Upvotes</div>
                  </div>
                  <div className="bg-gradient-to-r from-red-100 to-pink-100 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-red-600 mb-1">{meme.downvotes}</div>
                    <div className="text-red-700 font-medium">Downvotes</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-xl mb-6 text-center">
                  <div className="text-lg font-semibold text-gray-700 mb-1">Current Score</div>
                  <div className="text-3xl font-bold text-gradient">{meme.upvotes - meme.downvotes}</div>
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => vote(meme.id, "upvote")}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 btn-animate"
                  >
                    👍 Upvote
                  </button>
                  <button 
                    onClick={() => vote(meme.id, "downvote")}
                    className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 btn-animate"
                  >
                    👎 Downvote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VoteMeme;
