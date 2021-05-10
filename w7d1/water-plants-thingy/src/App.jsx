import logo from './logo.svg';
import './App.css';
import PlantForm from './components/PlantForm'
import PlantList from './components/PlantList';

const listOfPlants = [
  {
    id: 1,
    type: "Fern",
    name: "Backwoods fern",
    lastWateredDate: new Date('2021-05-05'),
    waterInterval: 10
  },
  {
    id: 2,
    type: "Tree",
    name: "Maple tree",
    lastWateredDate: new Date('2021-04-05'),
    waterInterval: 45
  },
]
function App() {
  return (
    <div className="App">
      <header>
        <h1>Super watered plants 2000</h1>
      </header>
      <PlantList listOfPlants={listOfPlants} />
      <PlantForm />
    </div>
  );
}

export default App;
