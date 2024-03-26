import React from 'react'

const MovieBox = ({ data, selected, setSelected }) => {
  const isSelected = selected.includes(data.id);
  const handleChange = () => {
    if (selected.includes(data.id)) {
      setSelected((prev) => prev.filter((item) => item !== data.id));
    } else {
      setSelected((prev) => {
        return [...prev, data.id];
      });
    }
  };

  return (
    <section
      style={{
        borderRadius: "10px",
        backgroundColor: data.color,
        border: isSelected ? "4px solid green" : "",
        paddingInline: "1rem",
      }}
      onClick={handleChange}
    >
      <p style={{ fontWeight: "500", fontFamily: `"DM Sans", sans-serif` }}>
        {data.id}
      </p>
      {data.image}
    </section>
  );
};

export default MovieBox;
