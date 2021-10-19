import logo from './logorecipe.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>The application that suggests</p>
        <p>the dishes to be created</p>
      </header>
    </div>
  );
}

export default App;
