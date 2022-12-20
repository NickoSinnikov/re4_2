import logo from './logo.svg';
import './App.css';
import EntryDistance from './components/EntryDistance';
import DistanceList from './components/DistanceList';

function App() {
  return (
    <div className="container">
      <EntryDistance />
      <DistanceList />
    </div>
  );
}

export default App;
