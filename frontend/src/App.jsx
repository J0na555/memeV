import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import MemeList from "./MemeList";
import VoteMeme from "./VoteMeme";
import Leaderboard from "./Leaderboard";
import AddMeme from "./AddMeme";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <Navbar />
        <div className="pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memes" element={
              <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                <div className="max-w-7xl mx-auto p-6">
                  <div className="text-center mb-12 fade-in">
                    <h1 className="text-5xl font-bold mb-4 text-gradient">
                      📱 All Memes
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      Browse through our collection of amazing memes and vote for your favorites!
                    </p>
                  </div>
                  <MemeList />
                </div>
              </div>
            } />
            <Route path="/vote" element={<VoteMeme />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/add-meme" element={<AddMeme />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
