import { Typography } from "@mui/material";
import EventSection from "./EventSection";
import ProfileCard from "../../components/card/ProfileCard";
import { RegesterEvents, ActiveEvents, CloseEvents } from "../../data/User";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const Common = () => {
  const data = ActiveEvents.map((val) => val);
  const data2 = CloseEvents.map((val) => val);
  const data3 = RegesterEvents.map((val) => val);
  const eventpath = RegesterEvents.map((val) => val.path);

  const isRegisteredUser = true;
  const navigates = useNavigate();
  const handleButtonClick = (path) => {
    if (eventpath.includes(path)) {
      navigates(path);
    } else if (action === "navigate") {
      alert("navigate to new page!!");
    } else {
      alert("Unknown action");
    }
  };

  return (
    <div>
      <EventSection />
      {isRegisteredUser && (
        <>
          <StyledHeading variant="h4">Register Events</StyledHeading>
          <ProfileCard data={data3} onButtonClick={handleButtonClick} />
        </>
      )}
      <StyledHeading variant="h4">Active Events</StyledHeading>
      <ProfileCard data={data} />
      <StyledHeading variant="h4">Closed Events</StyledHeading>
      <ProfileCard data={data2} />
    </div>
  );
};

const StyledHeading = styled(Typography)({
  fontSize: "2rem",
  fontWeight: "bold",
  textAlign: "left",
  marginBottom: "16px",
  "@media (max-width: 768px)": {
    fontSize: "1.8rem",
    marginBottom: "12px",
  },
  "@media (max-width: 480px)": {
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
});
export default Common;
