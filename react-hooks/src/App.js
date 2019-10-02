import React from 'react';
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

export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={'John'}>
        <ComponentA />
      </UserContext.Provider> */}
      <CounterThree />
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter />
      <IntervalClassCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <ClassMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
      {/* <ClassCounter /> */}
    </div >
  );
}

export default App;
