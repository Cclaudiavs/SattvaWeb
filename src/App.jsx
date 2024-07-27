/*
import './App.css';
import HomePage from './components/Home';
import '@mui/material/styles';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sattva YogaWeb</h1>
      </header>
      <main>
        <HomePage />

      </main>
      <footer>
        
      </footer>

    </div>
  );
}

export default App;*/

import './App.css';
import HomePage from './components/Home';
import Header from './components/Header';
import '@mui/material/styles';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomePage />
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;

