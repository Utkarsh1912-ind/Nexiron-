export default function About() {
  const team = [
    { name: "Utkarsh", role: "Founder & CEO", initial: "U" },
    { name: "Community", role: "10K+ Gamers", initial: "C" },
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <span className="text-neon text-sm font-semibold tracking-widest uppercase border border-neon px-4 py-1 rounded-full">
          Our Story
        </span>
        <h1 className="text-5xl font-bold mt-6 mb-4">
          Built by Gamers.<br />
          <span className="text-neon">For Gamers.</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Nexiron was born from one simple belief — every gamer has a voice worth hearing. We built the stage. You bring the truth.
        </p>
      </div>

      {/* Mission */}
      <div className="border border-gray-800 rounded-2xl p-8 mb-8 hover:border-neon transition">
        <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
        <p className="text-gray-400">
          To create the most trusted gaming opinion platform for youth — where real players share real takes, and no review is paid or fake.
        </p>
      </div>

      {/* Values */}
      <div className="grid grid-cols-2 gap-4 mb-12">
        {[
          { title: "Honest", desc: "No paid reviews. Ever." },
          { title: "Youth-First", desc: "Built for ages 13-24." },
          { title: "Community", desc: "Your voice shapes us." },
          { title: "Premium", desc: "Quality over quantity." },
        ].map((v) => (
          <div key={v.title} className="border border-gray-800 rounded-2xl p-5 hover:border-neon transition">
            <h3 className="text-neon font-bold text-lg mb-1">{v.title}</h3>
            <p className="text-gray-400 text-sm">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <h2 className="text-2xl font-bold mb-6 text-center">The Team</h2>
      <div className="flex gap-4 justify-center">
        {team.map((t) => (
          <div key={t.name} className="border border-gray-800 rounded-2xl p-6 text-center hover:border-neon transition flex-1">
            <div className="w-14 h-14 rounded-full bg-neon flex items-center justify-center text-black font-bold text-xl mx-auto mb-3">
              {t.initial}
            </div>
            <p className="font-semibold">{t.name}</p>
            <p className="text-gray-400 text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </main>
  );
}