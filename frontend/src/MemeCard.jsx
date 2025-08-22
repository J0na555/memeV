export default function MemeCard({ meme, onVote }) {
    return (
      <div className="p-4 border rounded-xl shadow bg-white">
        <h2 className="text-lg font-semibold">{meme.title}</h2>
        <img
          src={meme.image_url}
          alt={meme.title}
          className="w-full rounded mt-2"
        />
        <div className="flex items-center justify-between mt-3">
          <div className="flex gap-4">
            <button
              onClick={() => onVote(meme.id, "upvote")}
              className="px-3 py-1 bg-green-500 text-white rounded-lg"
            >
              👍 {meme.upvotes}
            </button>
            <button
              onClick={() => onVote(meme.id, "downvote")}
              className="px-3 py-1 bg-red-500 text-white rounded-lg"
            >
              👎 {meme.downvotes}
            </button>
          </div>
          <span className="font-bold">
            Score: {meme.upvotes - meme.downvotes}
          </span>
        </div>
      </div>
    );
  }
  