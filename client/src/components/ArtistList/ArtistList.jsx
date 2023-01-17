import classes from "./ArtistList.module.css";
import artistData from "../../assets/ArtistData/ArtistData";
import ArtistItem from "../ArtistItems/ArtistItems";

const ArtistList = () => {
  return (
    <div className={classes.div}>
      {artistData.map((obj, index) => {
        return <ArtistItem key={`ARTIST_${index}`} obj={obj} />;
      })}
    </div>
  );
};

export default ArtistList;
