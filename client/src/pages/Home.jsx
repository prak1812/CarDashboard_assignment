import Questionnaire from "../components/Questionnaire";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Navbar */}
        <nav className="flex justify-between items-center mb-16">
          <h1 className="text-2xl font-bold">
            AutoMatch AI 🚗
          </h1>

          <button className="px-5 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 transition">
            Home
          </button>
        </nav>

        {/* Hero */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-blue-400 text-sm mb-3">
            AI Powered Car Discovery
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Find Your Perfect Car Match
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Tell us your budget, priorities and preferences.
            We'll instantly build a personalized shortlist of cars
            that fit your needs.
          </p>
        </div>

        {/* Feature Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <div className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700">
            ⚡ Instant Recommendations
          </div>

          <div className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700">
            🛡 Safety Insights
          </div>

          <div className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700">
            ⛽ Mileage Focused
          </div>
        </div>

        <Questionnaire />
      </div>
    </div>
  );
}

export default Home;