import React from "react";

export default function Movie(props) {
  return (
    <div className="movie">
      <h2>{props.title}</h2>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${props.title}`}
          src={props.poster}
        />
      </div>
      <p>{props.year}</p>
    </div>
  );
}
