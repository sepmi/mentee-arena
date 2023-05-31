import classes from "./Character.module.css";

const Character = (props) => {
  return (
    <div className={classes.main}>
      {/* detail section */}
      <div className={classes.details}>
        <div>name: {props.data.name}</div>
        <div>status: {props.data.status}</div>
        <div>species: {props.data.species}</div>
        <div>gender: {props.data.gender}</div>
        <div>origin: {props.data.origin.name}</div>
        <div>location: {props.data.location.name}</div>
      </div>

      {/* image section */}
      <img className={classes.image} src={props.data.image} />
    </div>
  );
};

export default Character;
