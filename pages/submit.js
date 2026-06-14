import { useState } from "react";

export default function Submit() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const data = new FormData(e.target);
    const res = await fetch("https://formspree.io/f/xnjyldlk", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <span className="text-neon text-sm font-semibold tracking-widest uppercase border border-neon px-4 py-1 rounded-full">
          Share Your Take
        </span>
        <h1 className="text-4xl font-bold mt-6 mb-2">Your Opinion Matters</h1>
        <p className="text-gray-400">
          Tell the world what you really think about a game.
        </p>
      </div>

      {status === "success" ? (
        <div className="border border-neon rounded-2xl p-10 text-center">
          <p className="text-5xl mb-4">🎮</p>
          <h2 className="text-2xl font-bold text-neon mb-2">Opinion Submitted!</h2>
          <p className="text-gray-400">Your take is live. The community thanks you.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 bg-neon text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Submit Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="border border-gray-800 rounded-2xl p-8 flex flex-col gap-5">
          <div>
            <label className="block mb-2 text-sm text-gray-400">Game Name</label>
            <input
              name="game"
              type="text"
              placeholder="e.g. BGMI, Valorant, Free Fire"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">Your Rating (1-10)</label>
            <input
              name="rating"
              type="number"
              min="1"
              max="10"
              placeholder="8"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">Your Opinion</label>
            <textarea
              name="opinion"
              rows="5"
              placeholder="What's your honest take?"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon"
            ></textarea>
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">Your Name</label>
            <input
              name="name"
              type="text"
              placeholder="GamerTag or real name"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-400">Email (to save your opinion)</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon"
            />
          </div>

          {status === "error" && (
            <p className="text-red-400 text-sm text-center">Something went wrong. Try again!</p>
          )}

          
            <button
    type="submit"
    disabled={status === "loading"}
            className="bg-neon text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition text-lg mt-2"
          >
            {status === "loading" ? "Submitting..." : "Submit Opinion →"}
          </button>
        </div>
      )}
    </div>
  );
}