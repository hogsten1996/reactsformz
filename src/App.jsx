import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import './App.css'
import { useState } from 'react';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}

export default App