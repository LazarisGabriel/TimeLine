import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="App">
      <div className='formLogin'>
        <span>Login:</span>
        <form>
          <label>
            Email:
            <input type="email" value={email} name='email' onChange={(e) => setEmail(e.target.value)}/>
          </label>
          <label>
            Senha:
            <input type="password" value={password} name='password' onChange={(e) => setPassword(e.target.value)}/>
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
