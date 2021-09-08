import './App.css';
import Calendar from '../components/Calendar/Calendar';

function App() {
  return (
    <div className="App">
      <h1 className="font-bold text-7xl text-red-500">Which Concert?</h1>
      <p>Primer proyecto básico con Create React App</p>
      <Calendar className='bg-red-300'/>
    </div>
  );
}

export default App;
