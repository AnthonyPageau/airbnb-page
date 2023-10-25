import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from "./components/data"

function App() {
  const cardElements = data.map(data => {
    return (
      <Card 
        img= {data.coverImg}
        rating= {data.stats.rating}
        reviewCount= {data.stats.reviewCount}
        location= {data.location}
        title= {data.title}
        price= {data.price}
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
