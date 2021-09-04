import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import OverviewPage from "./pages/OverviewPage";
import Person from "./components/overview/people/Person";
import Planet from "./components/overview/planets/Planet";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
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
            <Route path="/species"></Route>
            <Route path="/starships"></Route>
            <Route path="/vehicles"></Route>
          </Switch>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
