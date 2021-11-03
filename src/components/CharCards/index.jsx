import "./style.css";
const CharCards = ({ character }) => {
  return (
    <div className={character.status === "Alive" ? "cardAlive" : "cardDied"}>
      <img className="imgs" src={character.image} alt={character.name} />
      <div className="titlesCont">
        <div>
          {" "}
          <strong className="titles">Nome</strong>:
          {character.name.length > 16
            ? character.name.substr(0, 15) + "..."
            : character.name}
        </div>
        <div>
          <strong className="titles">Espécie</strong>:{character.species}
        </div>
        <div>
          <strong className="titles">Gênero</strong>:{character.gender}
        </div>
      </div>
    </div>
  );
};
export default CharCards;
