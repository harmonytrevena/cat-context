import React, { useReducer } from 'react';
import { StateProvider } from "./context/index";
import Demo from "./components/DemoComponent";

import './App.css';

function App() {
  const initialState = {
    name: "Harmony",
  };

  const reducer = (state, action) => {
    const { name } = action;
    switch (action.type) {
      case "CHANGE_NAME":
        return {
          ...state,
          name
        };
        default:
          return state;
    }
  }

  return (
    <div className="App">
      <StateProvider value={useReducer(reducer, initialState)}>
        <Demo />
      </StateProvider>
    </div>
  );
}

export default App;
