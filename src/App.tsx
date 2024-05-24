import React, {FC, useState} from 'react';
import './App.css';
import {IToggleModel, useToggle} from "./hooks/useToggle";




const click = useToggle();
const App: FC  = (value) => {
  return (
      <div>
        <button onClick={click}>toggle</button>
      </div>
  );
};
export default App;
