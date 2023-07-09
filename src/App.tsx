import './App.css';
import bh from './assets/bh.gif'
import BackStar from './comps/background'

function App() {
  return (
    <div>
      <BackStar/>
      <img src={bh} alt="BH"/>
      <h1>Hello There!</h1>
      <h1>site under constructions</h1>
    </div>
  );
}

export default App;
