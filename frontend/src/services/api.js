const API_BASE_URL = "http://localhost:5000/api";

export async function sendQuestion(question) {
  const response = await fetch(`${API_BASE_URL}/chats`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ question })
  });

  if (!response.ok) {
    throw new Error("Failed to get response from server");
  }

  const data = await response.json();
  return data.answer;
}

export async function getVideoSummary() {
  const response = await fetch("http://localhost:5000/api/content/summary");

  if (!response.ok) {
    throw new Error("Failed to load video summary");
  }

  const data = await response.json();
  return data.summary;
}
