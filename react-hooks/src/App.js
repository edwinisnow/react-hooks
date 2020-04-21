import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import { IntervalClassCounter } from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import CounterOne from './components/CounterOne';
import ComponentA from './components/ComponentA';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentA1 from './components/ComponentA1';
import ComponentB1 from './components/ComponentB1';
import ComponentC1 from './components/ComponentC1';
import ParentComponent from './components/ParentComponent';
import Counter from './components/Counter';

export const UserContext = React.createContext();
export const CountContext = React.createContext()
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function App() {

  return (
    <div className="App">
      <Counter />
    </div >
  );
}

export default App;
