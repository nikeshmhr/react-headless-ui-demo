import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';

function App() {
  return (
    <div className="App">
      <section>
        <MyButton onClick={()=>{console.log('clicked')}} value={true}><span>Yo</span> My Button</MyButton>
      </section>
    </div>
  );
}

export default App;
