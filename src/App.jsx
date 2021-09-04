import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SwapiContextProvider from "./contexts/SwapiContextProvider";
import OverviewPage from "./pages/OverviewPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <SwapiContextProvider>
          <BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
            <Switch>
              <Route exact path="/">
                <OverviewPage />
              </Route>

              <Route path="/films"></Route>

              <Route path="/people"></Route>

              <Route path="/planets"></Route>
              <Route path="/species"></Route>
              <Route path="/starships"></Route>
              <Route path="/vehicles"></Route>
            </Switch>
          </BrowserRouter>
        </SwapiContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
