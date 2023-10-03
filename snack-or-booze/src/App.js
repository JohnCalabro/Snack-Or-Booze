import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NotFound from "./NotFound";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import AddToMenu from "./AddToMenu";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();

    async function getDrinks () {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
    
  }, []);
  console.log(drinks)
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks}/>
            </Route>
            {/* <Route exact path="/snacks"> */}

            <Route path="/add">
              <AddToMenu />
            </Route>

            <Route exact path="/:items">
              <Menu snacks={snacks} drinks={drinks} title="Snacks" />
            </Route>
            {/* <Route exact path="/drinks">
              <Menu snacks={snacks} drinks={drinks} title="Snacks" />
            </Route> */}
            <Route path="/:items/:id">
              <Snack items={snacks} drinkItems={drinks} cantFind="/snacks" />
            </Route>
            <Route path="/notfound">
              <p>Hmmm. I can't seem to find what you want.</p>
              <NotFound />
            </Route>
          </Switch>
          
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
