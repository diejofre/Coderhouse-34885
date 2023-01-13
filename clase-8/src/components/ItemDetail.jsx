import { useLocation, useParams } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const { name } = useParams();
  const category = useLocation().pathname.split("/")[1];
  const items = data[category]; // data.movies or data.series
  const item = items.find((item) => item.name === name);
  return (
    <>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{item.score}</p>
    </>
  );
};

export default ItemDetail;
