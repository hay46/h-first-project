function CardComponent() {
  return (
    <div className="div-comfortable">
      <div className="div-icon">
        <h1>{props.icon}</h1>
      </div>
      <div className="div-title">
        <h1>{props.title}</h1>
      </div>
      <div className="div-parag">
        <p>{props.parag}</p>
      </div>
    </div>
  );
}

export default CardComponent;
