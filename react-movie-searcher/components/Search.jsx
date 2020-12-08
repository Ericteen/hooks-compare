import React from 'react';

export default function Search({movieTitle, handleSubmit, handleChange}) {
  return (
    <form className="search">
      <input
        type="text"
        value={movieTitle}
        onChange={handleChange}
      />
      <input onClick={handleSubmit} type="submit" value="SEARCH" />
    </form>
  )
}