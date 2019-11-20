import React from 'react';
import './Colors.css';
import { withRouter } from 'react-router-dom';
function Colors(props) {
  function onClickHandler () {
      if(props.history.length > 2)props.history.goBack()
  }
  return (
    <div>
    <button onClick={onClickHandler}>{ (props.history.length > 2)?'go back':'nothing'}</button>
    <section className="divCont">
        <div className="colorDivs" style={{background: props.match.params.color}}></div>
        <div className="colorDivs" style={{background: props.match.params.color}}></div>
        <div className="colorDivs" style={{background: props.match.params.color}}></div>
        <div className="colorDivs" style={{background: props.match.params.color}}></div>
        <div className="colorDivs" style={{background: props.match.params.color}}></div>
        <div className="colorDivs" style={{background: props.match.params.color}}></div>
        <div className="colorDivs" style={{background: props.match.params.color}}></div>
        <div className="colorDivs" style={{background: props.match.params.color}}></div>
        <div className="colorDivs" style={{background: props.match.params.color}}></div>
    </section>
    </div>
  );
}

export default withRouter(Colors);
