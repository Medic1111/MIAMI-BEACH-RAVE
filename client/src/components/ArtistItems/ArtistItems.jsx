import classes from "./ArtistItem.module.css";

const ArtistItem = ({ obj }) => {
  return (
    <p className={classes.pBox}>
      <span className={classes.spanSec1}>{obj.title}</span>
      <span className={classes.spanSec2}>{obj.name}</span>
    </p>
  );
};

export default ArtistItem;
