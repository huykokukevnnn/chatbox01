import axios from 'axios';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "";

const api = axios.create({
  baseURL: 'https://api.groq.com/openai/v1',
  headers: {
    'Authorization': `Bearer ${GROQ_API_KEY}`,
    'Content-Type': 'application/json'
  }
});

export const sendMessageToAI = async (messages, systemPrompt) => {
  try {
    const finalSystemPrompt = systemPrompt || "You are a helpful AI assistant.";
    
    const response = await api.post('/chat/completions', {
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: finalSystemPrompt
        },
        ...messages.filter(m => m.role !== 'system') // ensure no duplicate systems
      ],
      temperature: 0.7,
      max_tokens: 2048,
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error communicating with Groq:", error);
    throw new Error("Unable to get response from AI. Please check your API key or network connection.");
  }
};
