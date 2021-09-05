import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ThemeContextProvider from "./contexts/ThemeContextProvider";
import Theme from "./components/theme/Theme";
import Navigation from "./components/Navbar";
import OverviewPage from "./pages/OverviewPage";
import Person from "./components/people/Person";
import Planet from "./components/planets/Planet";
import Specie from "./components/specie/Specie";
import Starship from "./components/starships/Starship";
import Vehicle from "./components/vehicles/Vehicle";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeContextProvider>
          <Theme>
            <Navigation />
            <BrowserRouter>
              <ReactQueryDevtools initialIsOpen={false} />
              <Switch>
                <Route exact path="/">
                  <OverviewPage />
                </Route>

                {/* <Route path="/films"></Route> */}

                <Route exact path="/people/:personId">
                  <Person />
                </Route>

                <Route exact path="/planets/:planetId">
                  <Planet />
                </Route>
                <Route path="/species/:specieId">
                  <Specie />
                </Route>
                <Route path="/starships/:shipId">
                  <Starship />
                </Route>
                <Route path="/vehicles/:vehicleId">
                  <Vehicle />
                </Route>
              </Switch>
            </BrowserRouter>
          </Theme>
        </ThemeContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
