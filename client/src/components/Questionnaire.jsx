import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Questionnaire() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    budget: "",
    fuel: "Petrol",
    familySize: 4,
    priority: "Safety",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/results", {
      state: formData,
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">

      <h2 className="text-2xl font-bold text-white mb-8">
        Tell Us What You're Looking For
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block mb-2 text-slate-300">
            Budget (₹)
          </label>

          <input
            type="number"
            name="budget"
            placeholder="Enter your budget"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 text-slate-300">
            Fuel Type
          </label>

          <select
            name="fuel"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          >
            <option>Petrol</option>
            <option>Diesel</option>
            <option>Hybrid</option>
            <option>Electric</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-slate-300">
            Family Size
          </label>

          <input
            type="number"
            name="familySize"
            placeholder="Number of family members"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-2 text-slate-300">
            Priority
          </label>

          <select
            name="priority"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 text-white focus:outline-none focus:border-blue-500"
            onChange={handleChange}
          >
            <option>Safety</option>
            <option>Mileage</option>
            <option>Performance</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-4 rounded-xl font-semibold text-lg transition duration-300"
        >
          Find My Perfect Car →
        </button>

      </form>
    </div>
  );
}

export default Questionnaire;