const express = require("express");
const cors = require("cors");

const cars = require("./cars.json");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/cars", (req, res) => {
  res.json(cars);
});

app.post("/recommend", (req, res) => {
  const { budget, fuel, priority } = req.body;

  const recommendations = cars.map((car) => {
    let score = 0;

    if (car.price <= budget) score += 30;

    if (car.fuel === fuel) score += 20;

    if (priority === "Safety")
      score += car.safety * 10;

    if (priority === "Mileage")
      score += car.mileage;

    if (priority === "Performance")
      score += car.performance * 10;

    let aiReason = "";

    if (priority === "Safety") {
      aiReason = `${car.name} is a strong recommendation because safety is your top priority and this vehicle offers one of the best safety ratings among the shortlisted options while staying aligned with your budget.`;
    }

    if (priority === "Mileage") {
      aiReason = `${car.name} is recommended because it delivers strong fuel efficiency and offers excellent value for long-term ownership costs.`;
    }

    if (priority === "Performance") {
      aiReason = `${car.name} stands out for its performance characteristics and provides a more engaging driving experience compared to similar vehicles in your price range.`;
    }

    return {
      ...car,
      score,
      aiReason,
    };
  });

  recommendations.sort((a, b) => b.score - a.score);

  res.json(recommendations.slice(0, 3));
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});