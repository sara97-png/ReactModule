import Header from "./components/Header";
import DestinationCard from "./components/DestinationCard";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const destinations = [
    {
      id: 1,
      city: "Plovdiv",
      country: "Bugarska",
      distanceKm: 953,
      rating: 4.2,
      imageUrl:
        "https://plovdivcitycard.com/wp-content/uploads/2019/09/Your-Perfect-European-City-Break-Plovdiv-Bulgaria.png",
    },
    {
      id: 2,
      city: "Amsterdam",
      country: "Nizozemska",
      distanceKm: 1318,
      rating: 4.8,
      imageUrl:
        "https://smilingway.cz/wp-content/uploads/2023/10/Amsterdam-za-1-den-1500x844.jpeg",
    },
    {
      id: 3,
      city: "Sinj",
      country: "Hrvatska",
      distanceKm: 423,
      rating: 4.1,
      imageUrl:
        "https://www.visit-croatia.hr/photos/destinations/thumbs/Sinj-61670170d65b0792016860_huge.jpg",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          <Header />
          <h2 className="text-center mt-3">Top destinacije</h2>

          {destinations.map((des, index) => (
            <div className="col-4">
              <DestinationCard
                key={index}
                city={des.city}
                country={des.country}
                distanceKm={des.distanceKm}
                rating={des.rating}
                imageUrl={des.imageUrl}
              />
            </div>
          ))}
          <hr className="my-3"/>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
