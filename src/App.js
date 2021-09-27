import "./App.css";
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
