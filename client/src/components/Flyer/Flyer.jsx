import ArtistList from "../ArtistList/ArtistList";
import EventDetails from "../EventDetails/EventDetails";
import EventTitle from "../EventTitle/EventTitle";
import FlyerCTA from "../FlyerCTA/FlyerCTA";
import FlyerFooter from "../FlyerFooter/FlyerFooter";
import FlyerWrapper from "../FlyerWrapper/FlyerWrapper";

const Flyer = () => {
  return (
    <FlyerWrapper>
      <FlyerCTA />
      <EventTitle />
      <EventDetails />
      <ArtistList />
      <FlyerFooter />
    </FlyerWrapper>
  );
};

export default Flyer;
