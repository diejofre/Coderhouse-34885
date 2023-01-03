const Card = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.username}</h2>
      <h3>{user.email}</h3>
    </div>
  );
};

export default Card;
