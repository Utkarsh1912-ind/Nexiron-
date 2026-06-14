import { useState } from "react";

export default function Submit() {
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    game: "",
    rating: "",
    opinion: "",
    name: "",
    email: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    if (!formData.game || !formData.rating || !formData.opinion || !formData.name || !formData.email) {
      alert("Please fill all fields!");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/xnjyldlk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ game: "", rating: "", opinion: "", name: "", email: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        <p className="text-6xl mb-4">🎮</p>
        <h2 className="text-3xl font-bold text-neon mb-3">Opinion Submitted!</h2>
        <p className="text-gray-400 mb-8">Your take is live. The community thanks you.</p>
        <button
          onClick={() => setStatus("idle")}
          className="bg-neon text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <div className="text-center mb-10">
        <span className="text-neon text-sm font-semibold tracking-widest uppercase border border-neon px-4 py-1 rounded-full">
          Share Your Take
        </span>
        <h1 className="text-4xl font-bold mt-6 mb-2">Your Opinion Matters</h1>
        <p className="text-gray-400">Tell the world what you really think about a game.</p>
      </div>

      <div className="border border-gray-800 rounded-2xl p-8 flex flex-col gap-5">
        <div>
          <label className="block mb-2 text-sm text-gray-400">Game Name</label>
          <input
            name="game"
            type="text"
            value={formData.game}
            onChange={handleChange}
            placeholder="e.g. BGMI, Valorant, Free Fire"
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
            value={formData.rating}
            onChange={handleChange}
            placeholder="8"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400">Your Opinion</label>
          <textarea
            name="opinion"
            rows="5"
            value={formData.opinion}
            onChange={handleChange}
            placeholder="What's your honest take?"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon"
          ></textarea>
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400">Your Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="GamerTag or real name"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm text-gray-400">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-neon"
          />
        </div>

        {status === "error" && (
          <p className="text-red-400 text-sm text-center">Something went wrong. Try again!</p>
        )}

        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="bg-neon text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition text-lg mt-2 disabled:opacity-50"
        >
          {status === "loading" ? "Submitting..." : "Submit Opinion →"}
        </button>
      </div>
    </div>
  );
}