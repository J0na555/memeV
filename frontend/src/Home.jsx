import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Hero Section */}
        <div className="text-center mb-16 fade-in">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-6 text-gradient">
              Welcome to MemeV
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate platform for sharing and voting on the best memes! 
              Join our community and discover the funniest content on the internet.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full float"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full float" style={{animationDelay: '0.2s'}}></div>
              <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-red-400 rounded-full float" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="card-hover bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 slide-in">
            <div className="text-5xl mb-6 text-center">📱</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Browse Memes</h3>
            <p className="text-gray-600 mb-6 text-center leading-relaxed">
              Discover the latest and greatest memes from our vibrant community
            </p>
            <div className="text-center">
              <Link 
                to="/memes" 
                className="btn-animate inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View All
              </Link>
            </div>
          </div>

          <div className="card-hover bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 slide-in" style={{animationDelay: '0.1s'}}>
            <div className="text-5xl mb-6 text-center">🗳️</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Vote</h3>
            <p className="text-gray-600 mb-6 text-center leading-relaxed">
              Cast your vote on memes and help determine the community favorites
            </p>
            <div className="text-center">
              <Link 
                to="/vote" 
                className="btn-animate inline-block bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Start Voting
              </Link>
            </div>
          </div>

          <div className="card-hover bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 slide-in" style={{animationDelay: '0.2s'}}>
            <div className="text-5xl mb-6 text-center">🏆</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Leaderboard</h3>
            <p className="text-gray-600 mb-6 text-center leading-relaxed">
              See which memes are trending and leading the pack in popularity
            </p>
            <div className="text-center">
              <Link 
                to="/leaderboard" 
                className="btn-animate inline-block bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                View Rankings
              </Link>
            </div>
          </div>

          <div className="card-hover bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 slide-in" style={{animationDelay: '0.3s'}}>
            <div className="text-5xl mb-6 text-center">➕</div>
            <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Add Meme</h3>
            <p className="text-gray-600 mb-6 text-center leading-relaxed">
              Share your favorite memes with the community and get them trending
            </p>
            <div className="text-center">
              <Link 
                to="/add-meme" 
                className="btn-animate inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Share Meme
              </Link>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/20 fade-in">
          <h2 className="text-4xl font-bold mb-8 text-center text-gradient">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Browse & Vote</h3>
              <p className="text-gray-600 leading-relaxed">
                Explore our collection of memes and vote for your favorites with just one click
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Track Rankings</h3>
              <p className="text-gray-600 leading-relaxed">
                See which memes are trending and climbing the leaderboard in real-time
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Share & Contribute</h3>
              <p className="text-gray-600 leading-relaxed">
                Add your own memes to the collection and watch them compete for the top spot
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl text-white text-center card-hover">
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-blue-100">Memes Shared</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-2xl text-white text-center card-hover">
            <div className="text-3xl font-bold mb-2">50K+</div>
            <div className="text-green-100">Votes Cast</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-2xl text-white text-center card-hover">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-purple-100">Active Users</div>
          </div>
        </div>
      </div>
    </div>
  );
}
