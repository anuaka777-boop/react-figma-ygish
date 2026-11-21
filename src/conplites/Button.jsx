function Button({ text, rang }) {
  return (
    <button className="my-btn" style={{ backgroundColor: rang }}>
      {text}
    </button>
  );
}

export default Button;