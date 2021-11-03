import CharCards from "../CharCards";

const Characters = ({ characters }) => {
  return (
    <div className="container">
      {characters.map((character) => (
        <CharCards character={character} />
      ))}
    </div>
  );
};
export default Characters;
