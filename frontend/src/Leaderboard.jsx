import { useEffect, useState } from "react";

export default function Leaderboard() {
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

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="spinner mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading leaderboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md mx-auto">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <h3 className="text-red-800 font-semibold mb-2">Error Loading Leaderboard</h3>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  const sorted = [...memes].sort(
    (a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto p-6">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-5xl font-bold mb-4 text-gradient">
            🏆 Meme Leaderboard
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See which memes are dominating the competition and climbing the ranks!
          </p>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
          {sorted.length === 0 ? (
            <div className="text-center p-12">
              <div className="text-gray-400 text-6xl mb-4">😢</div>
              <h3 className="text-gray-800 font-semibold mb-2">No Memes Found</h3>
              <p className="text-gray-600">Add some memes to see the leaderboard!</p>
            </div>
          ) : (
            <div className="p-8">
              {/* Top 3 Podium */}
              {sorted.slice(0, 3).length > 0 && (
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">🏅 Top Performers</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {sorted.slice(0, 3).map((meme, index) => (
                      <div 
                        key={meme.id}
                        className={`card-hover bg-gradient-to-br p-6 rounded-2xl text-center text-white fade-in`}
                        style={{ 
                          animationDelay: `${index * 0.2}s`,
                          background: index === 0 
                            ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)' 
                            : index === 1 
                            ? 'linear-gradient(135deg, #C0C0C0 0%, #A9A9A9 100%)'
                            : 'linear-gradient(135deg, #CD7F32 0%, #B8860B 100%)'
                        }}
                      >
                        <div className="text-4xl mb-4">
                          {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                        </div>
                        <h4 className="text-lg font-bold mb-2">{meme.title}</h4>
                        <div className="text-2xl font-bold mb-2">{meme.upvotes - meme.downvotes}</div>
                        <div className="text-sm opacity-90">points</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Full Leaderboard */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">📊 Complete Rankings</h3>
                <div className="space-y-4">
                  {sorted.map((meme, index) => (
                    <div 
                      key={meme.id} 
                      className="card-hover bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 fade-in"
                      style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-6">
                        <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl text-white ${
                          index === 0 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                          index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                          index === 2 ? 'bg-gradient-to-r from-yellow-600 to-orange-700' :
                          'bg-gradient-to-r from-blue-500 to-purple-600'
                        }`}>
                          {index + 1}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-800 mb-2">{meme.title}</h4>
                          <div className="flex items-center space-x-6 text-sm text-gray-600">
                            <span className="flex items-center">
                              <span className="mr-1">👍</span>
                              <span className="font-semibold text-green-600">{meme.upvotes}</span>
                            </span>
                            <span className="flex items-center">
                              <span className="mr-1">👎</span>
                              <span className="font-semibold text-red-600">{meme.downvotes}</span>
                            </span>
                            <span className="font-semibold text-blue-600">
                              Total Score: {meme.upvotes - meme.downvotes}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex-shrink-0">
                          <img 
                            src={meme.url} 
                            alt={meme.title} 
                            className="w-20 h-20 object-cover rounded-xl shadow-md"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
  