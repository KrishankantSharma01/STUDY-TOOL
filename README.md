📘 Interactive Study Tool (NotebookLM-inspired)

This project is an interactive study tool inspired by NotebookLM, designed to help students learn more effectively from structured study material such as textbooks and educational videos.

The application allows students to:

Ask questions in an interactive teacher–student chat format

Listen to teacher responses using audio (Text-to-Speech)

Quickly revise concepts using video-based summaries and exam-oriented notes

🚀 Features
1. Interactive Chat (Teacher–Student Mode)

Students can ask questions related to the provided economics chapter and videos.

The AI responds strictly based on the provided material.

If a question is outside the scope, the system explicitly informs the user.

2. Audio Dialogue Mode (Text-to-Speech)

Teacher responses can be played as audio using browser-based Text-to-Speech.

Simulates a two-person dialogue learning experience.

No external audio APIs are used, ensuring simplicity and reliability.

3. Video Summaries & Exam Revision

Embedded YouTube videos provided in the assignment.

Structured revision notes derived from the video content.

Designed for quick review before exams.

🧠 How It Works (High-Level Architecture)

Study material (chapter text + video notes) is loaded once on server startup and cached in memory.

The backend exposes clean APIs for:

Chat-based Q&A

Video summaries

The frontend consumes these APIs to provide an interactive learning experience.

AI responses are generated using Google Gemini with strict grounding on the provided content.

🛠️ Tech Stack
Frontend

React

React Router

Tailwind CSS

Browser Text-to-Speech (Web Speech API)

Backend

Node.js

Express

Google Gemini API

In-memory content caching

📂 Project Structure
study-tool/
├── backend/
│   ├── routes/
│   ├── services/
│   ├── data/
│   └── server.js
│
└── frontend/
    ├── pages/
    ├── components/
    ├── services/
    └── App.jsx

▶️ How to Run the Project Locally
1. Backend Setup
cd backend
npm install
npm start


Create a .env file in backend/:

GEMINI_API_KEY=your_api_key_here

2. Frontend Setup
cd frontend
npm install
npm run dev

📌 Design Decisions

Content is cached in backend memory to avoid unnecessary file reads.

AI logic is isolated in a service layer, making the system easy to extend or switch providers.

UI components are kept intentionally simple to prioritize usability and clarity.

Audio dialogue is implemented on the frontend to reduce latency and backend complexity.

🔮 Possible Enhancements

User-uploaded study material

Source highlighting in AI responses

Voice-based student input

Personalized study history