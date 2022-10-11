import React from "react";

function Visited({ movie }) {
  return (
    <>
      {movie && (
        <div>
          {movie.visited === 0 ? (
            <small>This page has been viewed 0 time</small>
          ) : (
            <small>This page has been viewed {movie.visited} times</small>
          )}
        </div>
      )}
    </>
  );
}

export default Visited;
