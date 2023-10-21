import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from "react";

import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

import { isNumeric } from "./utils";
import { CalculatorInput, TimeFrame } from "../../types/rawDietCalculator";

type RawDietCalculatorProps = {
  setInput: Dispatch<SetStateAction<CalculatorInput>>;
};

const RawDietCalculator: FC<RawDietCalculatorProps> = ({ setInput }) => {
  const [weight, setWeight] = useState("");
  const [dailyWeightPercentage, setDailyWeightPercentage] = useState("");
  const [timeUnit, setTimeUnit] = useState("");
  const [timeFrame, setTimeFrame] = useState<TimeFrame>("days");

  const onWeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newWeight = event.target.value;

    if (isNumeric.test(newWeight)) {
      setWeight(newWeight);
    }
  };

  const onDailyWeightPercentageChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newDailyWeightPercentage = event.target.value;

    if (isNumeric.test(newDailyWeightPercentage)) {
      setDailyWeightPercentage(`${newDailyWeightPercentage}`);
    }
  };

  const onTimeUnitChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTimeUnit = event.target.value;

    if (isNumeric.test(newTimeUnit)) {
      setTimeUnit(newTimeUnit);
    }
  };

  const onTimeFrameChange = (event: SelectChangeEvent<string>) => {
    const newTimeFrame = event.target.value;
    setTimeFrame(newTimeFrame as TimeFrame);
  };

  console.log({ weight, timeUnit, timeFrame, dailyWeightPercentage });

  return (
    <Box>
      <TextField
        type="text"
        value={weight}
        onChange={onWeightChange}
        label="Weight"
        variant="outlined"
        InputProps={{
          endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
        }}
      />
      <TextField
        type="text"
        value={dailyWeightPercentage}
        onChange={onDailyWeightPercentageChange}
        label="Daily Percentage"
        variant="outlined"
        InputProps={{
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        }}
      />
      <TextField
        type="text"
        value={timeUnit}
        onChange={onTimeUnitChange}
        label="Time"
        variant="outlined"
      />
      <Select value={timeFrame} label="TimeFrame" onChange={onTimeFrameChange}>
        <MenuItem value={"days"}>Days</MenuItem>
        <MenuItem value={"weeks"}>Weeks</MenuItem>
        <MenuItem value={"months"}>Months</MenuItem>
      </Select>
      <Button
        variant="contained"
        size="large"
        onClick={() =>
          setInput({ weight, timeUnit, timeFrame, dailyWeightPercentage })
        }
      >
        LET'S GO!
      </Button>
    </Box>
  );
};

export default RawDietCalculator;
