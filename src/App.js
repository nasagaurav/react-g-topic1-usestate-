import React from 'react';
import './style.css';

export default function App() {
  const p1 = () => {};
  const p2 = () => {};
  const p3 = () => {};

  return (
    <div>
      <h1>we are practising usestate in reactjs-project 1</h1>
      <h1>counter ? </h1>

      <button onClick={p1}>+</button>
      <button onClick={p2}>-</button>
      <button onclick={p3}>0</button>
    </div>
  );
}
