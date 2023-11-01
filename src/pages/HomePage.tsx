import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";

const HomePage: FC = () => {
  const navigate = useNavigate();

  return (
    <Button
      className="calculatorPageButton"
      variant="contained"
      size="large"
      onClick={() => navigate("/calculatorInput")}
    >
      Raw Food Calculator
    </Button>
  );
};

export default HomePage;
