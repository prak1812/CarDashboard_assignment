import { useNavigate } from "react-router-dom";

function Compare() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-4">
        Compare Cars 🚗
      </h1>

      <p className="text-slate-400 text-center max-w-xl mb-8">
        The comparison workflow was intentionally scoped out
        for the MVP. The recommendation engine is fully functional,
        and vehicle comparison would be the next feature added.
      </p>

      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
      >
        Back To Home
      </button>
    </div>
  );
}

export default Compare;