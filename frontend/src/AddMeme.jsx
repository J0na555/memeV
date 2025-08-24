import { useState } from "react";

function AddMeme() {
  const [formData, setFormData] = useState({
    title: "",
    url: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:8000/api/memes/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Meme added successfully!");
        setFormData({ title: "", url: "" });
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.title?.[0] || errorData.url?.[0] || 'Failed to add meme'}`);
      }
    } catch (error) {
      setMessage("Error: Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-5xl font-bold mb-4 text-gradient">
            ➕ Add New Meme
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share your favorite memes with the community and watch them compete for the top spot!
          </p>
        </div>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 slide-in">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-3">
                🎯 Meme Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 text-lg transition-all duration-300 bg-white/50 backdrop-blur-sm"
                placeholder="Enter a catchy title for your meme..."
              />
            </div>
            
            <div>
              <label htmlFor="url" className="block text-lg font-semibold text-gray-700 mb-3">
                🖼️ Image URL
              </label>
              <input
                type="url"
                id="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 text-lg transition-all duration-300 bg-white/50 backdrop-blur-sm"
                placeholder="https://example.com/your-meme.jpg"
              />
            </div>
            
            {message && (
              <div className={`p-6 rounded-2xl border-2 ${
                message.includes("Error") 
                  ? "bg-red-50 border-red-200 text-red-700" 
                  : "bg-green-50 border-green-200 text-green-700"
              }`}>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">
                    {message.includes("Error") ? "⚠️" : "✅"}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      {message.includes("Error") ? "Error" : "Success"}
                    </h4>
                    <p>{message}</p>
                  </div>
                </div>
              </div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 px-8 rounded-2xl font-bold text-xl hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 btn-animate"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="spinner mr-3"></div>
                  Adding Meme...
                </div>
              ) : (
                "🚀 Add Meme"
              )}
            </button>
          </form>
          
          <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
              💡 Tips for adding memes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Creative Titles</h4>
                  <p className="text-gray-600 text-sm">Use descriptive and catchy titles that capture the meme's essence</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Public URLs</h4>
                  <p className="text-gray-600 text-sm">Make sure the image URL is publicly accessible and permanent</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Supported Formats</h4>
                  <p className="text-gray-600 text-sm">Use JPG, PNG, or GIF formats for best compatibility</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Community Guidelines</h4>
                  <p className="text-gray-600 text-sm">Keep memes appropriate and respectful for all users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMeme;
