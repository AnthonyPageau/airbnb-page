import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from "./components/data"

function App() {
  const cardElements = data.map(data => {
    return (
      <Card 
        key= {data.id}
        {...data}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cardElements}
      </section>
    </div>
  );
}

export default App;
