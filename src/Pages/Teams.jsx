import Social from "../trix/HOC/Social.jsx";
import Portal from "../trix/Portal/Protal";
const Teams = () => {
  return (
    <Portal>
      <div>Team</div>
    </Portal>
  );
};

export default Social(Teams, "social", "social-list");
