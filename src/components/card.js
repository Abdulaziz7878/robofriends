import React from "react";
import "tachyons";

function Card({ id, name, email }) {
  return (
    <div className="dib bg-light-green br3 pa3 ma2 grow shadow-5 bw2">
      <img alt="Robot" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
