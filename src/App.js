import "./App.css";
import { Pie, Line } from "react-chartjs-2";
import { UserProvider } from "./Components/Context/context";
import AppLeft from "./Components/app-left/appLeft";
import InfoIndex from "./Components/country details/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

// import store from "./redux/store";
// import { Provider } from "react-redux";

function App() {
  return (
    <UserProvider>
      <Router>
        <ScrollToTop />
        <Route exact path="/">
          <AppLeft />
          {/* <Pie
            options={{ legend: { position: "bottom" } }}
            data={{
              labels: ["red", "blue", "green"],
              datasets: [
                { data: [1, 2, 3], backgroundColor: ["red", "blue", "green"] },
              ],
            }}
          /> */}
        </Route>
        <Route exact path="/country/:countryName">
          <ScrollToTop />
          <InfoIndex />
        </Route>
      </Router>
    </UserProvider>
  );
}

export default App;
