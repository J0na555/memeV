import MemeList from "./MemeList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Meme Voting App
        </h1>
        <MemeList />
      </div>
    </div>
  );
}
