const API_URL = "https://v3x9404s8b.execute-api.us-east-1.amazonaws.com";

export async function uploadReceipt(base64Image) {
  const response = await fetch(`${API_URL}/ocr`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: base64Image,
    }),
  });

  if (!response.ok) {
    throw new Error("Upload failed");
  }

  return await response.json();
}

export async function getSummary() {
  const response = await fetch(`${API_URL}/summary`);

  if (!response.ok) {
    throw new Error("Failed to fetch summary");
  }

  return await response.json();
}