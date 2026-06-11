import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await API.post("/recommend", state);
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <h1 className="text-2xl font-semibold animate-pulse">
          Finding your perfect car...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-blue-400 text-sm mb-3">
            Personalized Recommendations
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Your Perfect Car Match 🚗
          </h1>

          <p className="text-slate-400 max-w-2xl mx-auto">
            Based on your preferences, we've shortlisted the cars
            that best fit your lifestyle and budget.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-semibold mb-4">
            Your Preferences
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-slate-400 text-sm">Budget</p>
              <p className="font-semibold">
                ₹{Number(state?.budget).toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-slate-400 text-sm">Fuel</p>
              <p className="font-semibold">{state?.fuel}</p>
            </div>

            <div>
              <p className="text-slate-400 text-sm">Family Size</p>
              <p className="font-semibold">{state?.familySize}</p>
            </div>

            <div>
              <p className="text-slate-400 text-sm">Priority</p>
              <p className="font-semibold">{state?.priority}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cars.map((car, index) => (
            <div
              key={car.id}
              className="group bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-blue-500 hover:-translate-y-1 transition-all duration-300"
            >
              {index === 0 && (
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm mb-4">
                  Best Match
                </div>
              )}

              <div className="flex justify-between items-start mb-5">
                <h2 className="text-2xl font-bold">
                  {car.name}
                </h2>

                <div className="text-right">
                  <p className="text-slate-400 text-xs">
                    Match Score
                  </p>

                  <p className="text-2xl font-bold text-blue-400">
                    {Math.min(Math.round(car.score), 100)}%
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Fuel Type
                  </span>
                  <span>{car.fuel}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Safety Rating
                  </span>
                  <span>{car.safety}/5 ⭐</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Mileage
                  </span>
                  <span>{car.mileage} km/l</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Price
                  </span>
                  <span>
                    ₹{Number(car.price).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4">
                <h3 className="font-semibold mb-3 text-blue-400">
                  AI Recommendation
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {car.aiReason}
                </p>
              </div>

              <div className="flex gap-3 mt-6">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-medium transition">
                  Save
                </button>

                <button
                  onClick={() => navigate("/compare")}
                  className="flex-1 border border-slate-700 hover:border-slate-500 py-3 rounded-xl font-medium transition"
                >
                  Compare
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
          >
            Start New Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;