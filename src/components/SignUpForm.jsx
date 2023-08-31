import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [validate, setValidate] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidate("")

    if (username.length < 5 || password.length < 5) {
        setValidate('Username and Password must be at least 5 characters long.');
        return;
      }

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const api = await response.json();
      console.log(api);

      setToken(api.token);
      console.log(api.token);

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      {validate && <p>{validate}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}


