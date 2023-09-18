import React from 'react';
const Coupang = (props) => {
  return <>
    <div className="CoupangBox">
      <img className="cider" alt="사이다" src="img\사이다.jpg"/>
      <p>{props.name}</p>
      <h3>{props.price}</h3>
      <p>{props.mlPrice}</p>
      <p>{props.arrivalTime}</p>
    </div>
  </>
}

export default Coupang;