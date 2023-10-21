import { FC } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const HomePage: FC = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate("/calculator")}
      >
        Raw Food Calculator
      </Button>
    </div>
  );
};

export default HomePage;
