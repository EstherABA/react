import './App.css';
// import Names from './components/Names';
import Car from './components/Car';

function App() {
  const allCars = [{
    image: "https://i.ytimg.com/vi/tArC9-RHmU4/maxresdefault.jpg",
    name: 'Max',
    color: 'Pink',
    year: '2010'
  },
  {
    image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Urus/4418/Lamborghini-Urus-V8/1621927166506/front-left-side-47.jpg",
    name: 'Mini',
    color: 'Yellow',
    year: '2012'
  }
]
    
    
    
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {
            allCars.map((car) => {return <Car image={car.image} name={car.name} color={car.color} year={car.year}/>})
          }
        </div>
      </header>
    </div>
  );
}

export default App;
