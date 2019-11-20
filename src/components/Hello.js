import React from 'react';
import { Link } from 'react-router-dom';
import './Hello.css';

function Hello(props) {

  function goToGoodbye(){
    props.history.push('/goodbye')
  }
  return (
    <section className="helloClass">
        <h1>hello</h1>
        <fieldset><legend>dynamic urls</legend>
            <Link to="/colors/red">red</Link>
            <Link to="/colors/orange">orange</Link>
            <Link to="/colors/blue">blue</Link>
            <Link to="/colors/purple">purple</Link>
            <Link to="/colors/yellow">yellow</Link>
            <Link to="/colors/green">green</Link>
        </fieldset>
        <fieldset><legend>history</legend>
            <button onClick={() => goToGoodbye()}>go to goodbye without using Link component</button>
        </fieldset>
    </section>
  );
}

export default Hello;
