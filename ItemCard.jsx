export function ItemCard({ name, image, about, stars }) {
  return (
    <div className="card">
      {/* <div className="image-container"> */}
      <img alt={name} src={image} />
      {/* </div> */}
      <div className="card-content">
        <h2>{name}</h2>
        <p>{about}</p>
        <p>Rating:{stars}</p>
      </div>
    </div>
  );
}
