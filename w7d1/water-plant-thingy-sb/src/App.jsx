import logo from './logo.svg';
import './App.css';
import PlantList from './components/PlantList';

const onePlant = {
  id: 1,
  type: "Fern",
  name: "Backwoods fern",
  lastWateredDate: new Date('2021-05-05'),
  waterInterval: 10
}
const anotherPlant = {
  id: 1,
  type: "Fern",
  name: "Frontwoods fern",
  lastWateredDate: new Date('2021-05-01'),
  waterInterval: 10
}

const listOfPlants = [onePlant, anotherPlant]

function App() {
  return (
    <div className="App">
      <PlantList listOfPlants={listOfPlants} />
    </div>
  );
}

export default App;
