import { useState } from 'react';
import './App.css';

const API_URL = 'http://localhost:8081/api/ollama';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse('');
    try {
      const res = await fetch(`${API_URL}/${encodeURIComponent(prompt)}`);
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      setResponse(await res.text());
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Ollama Chat</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Ask something..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={loading}
        />
        <button type="submit" disabled={loading || !prompt.trim()}>
          {loading ? 'Thinking...' : 'Send'}
        </button>
      </form>

      <div className="response">
        {response || <span className="placeholder">Response will appear here</span>}
      </div>
    </div>
  );
}

export default App;
