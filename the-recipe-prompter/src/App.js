import logo from './logorecipe.svg';
import './App.css';

function App() {
const APP_ID = "65268f1f";
const APP_KEY="d7809ab1d3c1a8e99f1957eec0970e27";
const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>App suggesting dishes to create</p>
   
      </header>
    </div>
  );
}

export default App;
