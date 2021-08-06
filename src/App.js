import "./App.css";
import { UserProvider } from "./Components/Context/context";
import AppLeft from "./Components/app-left/appLeft";
// import store from "./redux/store";
// import { Provider } from "react-redux";

function App() {
  return (
    <UserProvider>
      <AppLeft />
    </UserProvider>
  );
}

export default App;
