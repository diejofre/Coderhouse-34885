import Item from "../Item";

const Grid = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </>
  );
};

export default Grid;
