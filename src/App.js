import React, { useReducer } from 'react';
import { StateProvider } from "./context/index";
import Cat from "./components/CatComponent";

import './App.css';

function App() {
  const initialState = {
    name: "Sunshine",
    activity: "napping",
  };

  const catReducer = (state, action) => {
    const { name, activity } = action;
    switch (action.type) {
      case "CHANGE_NAME":
        return {
          ...state,
          name,
        };
      case "SET_ACTIVITY":
        return {
          ...state,
          activity,
        }
      default:
        return state;
    }
  };

  return (
    <div className="App">
      <StateProvider value={useReducer(catReducer, initialState)}>
        <Cat />
      </StateProvider>
    </div>
  );
}

export default App;
