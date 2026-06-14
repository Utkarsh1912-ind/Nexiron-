export default function Blog() {
  const posts = [
    {
      tag: "Hot Take",
      title: "Is BGMI Still the King of Mobile Battle Royale?",
      desc: "With Free Fire MAX and Warzone Mobile rising, we ask the real question — can BGMI hold its throne in 2026?",
      author: "Nexiron Team",
      date: "June 10, 2026",
      color: "text-neon",
    },
    {
      tag: "Deep Dive",
      title: "Valorant vs CS2 — Which One Actually Takes More Skill?",
      desc: "The debate that never dies. We break down mechanics, aim, strategy and community to settle this once and for all.",
      author: "Nexiron Team",
      date: "June 7, 2026",
      color: "text-cyan-400",
    },
    {
      tag: "Community",
      title: "Top 5 Most Controversial Game Reviews on Nexiron This Month",
      desc: "Our community never holds back. Here are the hottest, most debated opinions submitted this month.",
      author: "Nexiron Team",
      date: "June 3, 2026",
      color: "text-pink-400",
    },
    {
      tag: "Industry",
      title: "Why Game Companies Are Scared of Real Player Reviews",
      desc: "Paid influencers, fake scores, hidden bugs — the gaming industry doesn't want you to know the truth. We do.",
      author: "Nexiron Team",
      date: "May 28, 2026",
      color: "text-yellow-400",
    },
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="text-neon text-sm font-semibold tracking-widest uppercase border border-neon px-4 py-1 rounded-full">
          Nexiron Blog
        </span>
        <h1 className="text-5xl font-bold mt-6 mb-4">
          Gaming <span className="text-neon">Conversations</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Hot takes, deep dives, and community spotlights — straight from the gaming world.
        </p>
      </div>

      {/* Posts */}
      <div className="flex flex-col gap-6">
        {posts.map((p) => (
          <div
            key={p.title}
            className="border border-gray-800 rounded-2xl p-6 hover:border-neon transition cursor-pointer group"
          >
            <span className={`text-xs font-bold uppercase tracking-widest ${p.color} mb-3 block`}>
              {p.tag}
            </span>
            <h2 className="text-xl font-bold mb-2 group-hover:text-neon transition">
              {p.title}
            </h2>
            <p className="text-gray-400 text-sm mb-4">{p.desc}</p>
            <div className="flex justify-between items-center text-xs text-gray-500">
              <span>{p.author}</span>
              <span>{p.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 text-center border border-neon rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-2">
          Got a <span className="text-neon">Hot Take?</span>
        </h3>
        <p className="text-gray-400 mb-6">Share your gaming opinion and get featured on Nexiron.</p>
        <a href="/submit">
          <button className="bg-neon text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition">
            Share Your Take →
          </button>
        </a>
      </div>
    </main>
  );
}