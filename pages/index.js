import Link from "next/link";

export default function Home() {
  const stats = [
    { number: "10K+", label: "Opinions Shared" },
    { number: "500+", label: "Games Covered" },
    { number: "50K+", label: "Monthly Readers" },
  ];

  const steps = [
    { step: "01", title: "Pick a Game", desc: "Search any game you've played recently." },
    { step: "02", title: "Drop Your Take", desc: "Rate it and write your honest opinion." },
    { step: "03", title: "Get Noticed", desc: "Your review goes live for the whole community." },
  ];

  const opinions = [
    { user: "Aryan_GG", game: "BGMI", rating: 9, text: "Best battle royale on mobile. The graphics update in season 3 was insane." },
    { user: "ZeroRecoil", game: "Valorant", rating: 8, text: "Tactical shooter at its peak. Agent variety keeps it fresh every match." },
    { user: "NightOwl99", game: "Free Fire", rating: 7, text: "Great for casual gaming. Fast matches, fun with friends." },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 pointer-events-none" />
        <span className="text-neon text-sm font-semibold tracking-widest uppercase mb-4 border border-neon px-4 py-1 rounded-full">
          Gaming Opinions Platform
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Your Opinion.<br />
          <span className="text-neon">Your Game.</span><br />
          Your Stage.
        </h1>
        <p className="text-lg text-gray-300 mb-10 max-w-xl">
          Join thousands of gamers shaping the conversation. Share your take, discover real reviews, and be part of the community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/submit">
            <button className="bg-neon text-black font-bold px-8 py-4 rounded-full hover:scale-105 transition text-lg">
              Share Your Take →
            </button>
          </Link>
          <Link href="/reviews">
            <button className="border border-white text-white font-semibold px-8 py-4 rounded-full hover:border-neon hover:text-neon transition text-lg">
              Explore Reviews
            </button>
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-bold text-neon">{s.number}</p>
              <p className="text-gray-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          How It <span className="text-neon">Works</span>
        </h2>
        <div className="flex flex-col gap-8">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-6 items-start border border-gray-800 rounded-2xl p-6 hover:border-neon transition">
              <span className="text-4xl font-bold text-neon opacity-60">{s.step}</span>
              <div>
                <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Opinions */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Fresh <span className="text-neon">Opinions</span>
          </h2>
          <div className="flex flex-col gap-6">
            {opinions.map((o) => (
              <div key={o.user} className="border border-gray-800 rounded-2xl p-6 hover:border-neon transition">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neon flex items-center justify-center text-black font-bold text-sm">
                      {o.user[0]}
                    </div>
                    <div>
                      <p className="font-semibold">{o.user}</p>
                      <p className="text-gray-400 text-sm">{o.game}</p>
                    </div>
                  </div>
                  <span className="text-neon font-bold text-xl">{o.rating}/10</span>
                </div>
                <p className="text-gray-300">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-xl mx-auto border border-neon rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-3">
            Join the <span className="text-neon">Community</span>
          </h2>
          <p className="text-gray-400 mb-6">Get early access, new features, and top opinions weekly.</p>
          <div className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-900 border border-gray-700 rounded-full px-6 py-3 focus:outline-none focus:border-neon text-center"
            />
            <button className="bg-neon text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition">
              Get Early Access
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}