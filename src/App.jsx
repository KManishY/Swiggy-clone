import "./App.css";
import userInfo from "./data/userInfo.json";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import Offer from "./components/Offer";
import Restaurants from "./components/Restaurants";
import offers from "./data/offers.json";
import restaurants from "./data/restaurants.json";
function App() {
      // console.log(userInfo);
      return (
            <div>
                  <Navbar {...userInfo.location} />
                  <Offer offer={offers} />
                  <Filters />
                  <Restaurants restaurants={restaurants} />
            </div>
      );
}

export default App;
