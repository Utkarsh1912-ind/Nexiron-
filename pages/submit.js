export default function Submit() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">Share Your Take</h1>
      <p className="text-gray-400 mb-8">
        Tell the world what you really think about a game.
      </p>

      <form className="flex flex-col gap-5">
        <div>
          <label className="block mb-2 text-sm">Game Name</label>
          <input
            type="text"
            placeholder="e.g. Valorant"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">Your Rating (1-10)</label>
          <input
            type="number"
            min="1"
            max="10"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">Your Opinion</label>
          <textarea
            rows="5"
            placeholder="What's your honest take?"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon"
          ></textarea>
        </div>

        <div>
          <label className="block mb-2 text-sm">Email (to save your opinion)</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon"
          />
        </div>

        <button
          type="submit"
          className="bg-neon text-black font-semibold px-8 py-3 rounded-full hover:scale-105 transition mt-2"
        >
          Submit Opinion
        </button>
      </form>
    </div>
  );
}