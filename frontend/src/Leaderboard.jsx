export default function Leaderboard({ memes }) {
    const sorted = [...memes].sort(
      (a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes)
    );
  
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-3">Leaderboard</h2>
        <ol className="list-decimal ml-5">
          {sorted.map((m, i) => (
            <li key={m.id} className="mb-1">
              {m.title} — Score: {m.upvotes - m.downvotes}
            </li>
          ))}
        </ol>
      </div>
    );
  }
  