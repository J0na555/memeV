import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'bg-white/20 backdrop-blur-sm' : '';
  };

  return (
    <nav className="gradient-bg shadow-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold hover:text-gray-200 transition-colors duration-300 flex items-center">
              <span className="mr-2 text-3xl">🎭</span>
              MemeV
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              <Link
                to="/memes"
                className={`text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive('/memes')} hover:scale-105`}
              >
                📱 Meme List
              </Link>
              <Link
                to="/vote"
                className={`text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive('/vote')} hover:scale-105`}
              >
                🗳️ Vote Memes
              </Link>
              <Link
                to="/leaderboard"
                className={`text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive('/leaderboard')} hover:scale-105`}
              >
                🏆 Leaderboard
              </Link>
              <Link
                to="/add-meme"
                className={`text-white hover:bg-white/10 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActive('/add-meme')} hover:scale-105`}
              >
                ➕ Add Meme
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition-colors duration-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
