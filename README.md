# AutoMatch AI

## Overview

AutoMatch AI is a full-stack car recommendation platform designed to help users move from confusion to confidence when choosing a car.

Users answer a short questionnaire about their budget, fuel preference, family size, and purchase priorities. The system then scores available vehicles and generates a personalized shortlist with recommendation explanations.

---

## Features

* Personalized car recommendations
* Budget-aware ranking system
* Fuel preference matching
* Priority-based scoring (Safety, Mileage, Performance)
* AI-style recommendation explanations
* Responsive modern UI
* Full-stack architecture with React and Express

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* React Router

### Backend

* Node.js
* Express
* CORS

---

## Product Decisions

Given the 2–3 hour time constraint, I focused on building the shortest path from:

User uncertainty → Personalized shortlist

I prioritized:

* Recommendation questionnaire
* Ranking algorithm
* Recommendation explanations
* Responsive UI

I deliberately did not build:

* Authentication
* User accounts
* Database persistence
* Large vehicle datasets
* Advanced comparison workflows

---

## AI Tool Usage

AI tools were used to accelerate:

* UI scaffolding
* Styling iteration
* Backend logic generation
* Debugging support
* Product brainstorming

All generated code was reviewed, modified, tested, and integrated manually.

---

## Where AI Helped Most

* Rapid prototyping
* UI generation
* Tailwind styling
* React component structure

---

## Where AI Struggled

* Environment configuration
* Tailwind setup debugging
* Product-scoping decisions
* UI consistency refinement

---

## If I Had Another 4 Hours

* Real LLM-powered recommendation reasoning
* Multi-car comparison workflow
* Larger car dataset
* Recommendation confidence analysis
* Saved user shortlists

---

## Local Setup

### Backend

```bash
cd server
npm install
node index.js
```

Runs on:

```txt
http://localhost:5000
```

### Frontend

```bash
cd client
npm install
npm run dev
```

Runs on:

```txt
http://localhost:5173
```
