import { useEffect, useState } from "react";
import Character from "./Character";
import classes from "./Characters.module.css";

const Characters = (props) => {
  const [characters, setCharacters] = useState();

  useEffect(() => {
    const fetchChracters = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();

      setCharacters(data.results);
    };

    fetchChracters();
  }, []);

  return (
    <div className={classes.characters}>
      {characters &&
        characters.map((character) => {
          return <Character data={character} key={character.id} />;
        })}
    </div>
  );
};

export default Characters;
