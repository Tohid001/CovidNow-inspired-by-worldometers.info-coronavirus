import { createStore } from "redux";
import rootreducer from "./rootreducer";

const store = createStore(rootreducer);

export default store;
