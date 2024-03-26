import React from 'react'

const MovieChip = ({ data, setSelected }) => {
  const handleChange = () => {
    setSelected((prev) => prev.filter((item) => item !== data));
  };

  return (
    <section
      onClick={handleChange}
      style={{
        background: "green",
        padding: "12px",
        borderRadius: "20px",
        fontWeight: "400",
        fontFamily: `"Roboto", sans-serif`,
      }}
    >
      {data}&nbsp; &nbsp; &nbsp; <span style={{opacity: "0.5"}}>X</span>
    </section>
  );
};

export default MovieChip;
