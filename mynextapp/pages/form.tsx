import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(null);
    setToken(null);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        setToken(data.token);
        setResult("Login successful!");
      } else {
        setResult(data.error || "Login failed");
      }
    } catch (err) {
      setResult("Network error");
    }
  }

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            required
            onChange={e => setUsername(e.target.value)}
            
          />
        </label><br /><br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            required
            onChange={e => setPassword(e.target.value)}
            
          />
        </label><br /><br />
        <button type="submit">
          Login
        </button>
      </form>
      {result && (
        <div>
          {result}
        </div>
      )}
      {token && (
        <div>
          <strong>JWT:</strong> <code>{token}</code>
        </div>
      )}
    </div>
  );
}