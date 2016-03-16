import React from 'react';

require('./modanteristcard.scss');

export function Card() {
  return (
    <div className="card">
      <img className="card-img-top img-fluid" src="http://placehold.it/700x300" alt="placeholder" />
      <div className="card-block">
        <p className="text-muted">
          <small>this is the amount of pins</small>
        </p>
        <h5 className="card-title">
          <strong>This is the card title</strong>
        </h5>
        <p className="card-text">This is the card description</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <p><small>this is the board the pin came from</small></p>
        </li>
        <li className="list-group-item">
          <p className="text-muted"><small>this the tag this pin belongs to</small></p>
        </li>
      </ul>
    </div>
  );
}


export default Card;
