import { FC } from "react";

import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";

import { WeightFormatter } from "@components/index";

type ResultCardProps = {
  title: string;
  data: Record<string, number>;
};

const ResultCard: FC<ResultCardProps> = ({ title, data }) => {
  return (
    <Card className="resultCard" style={{ margin: "10px 0" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Divider style={{ margin: "10px 0" }} />
        <List>
          {Object.entries(data).map(([key, value]) => (
            <ListItem key={key}>
              <Typography variant="body1">
                {`${key}: `} <WeightFormatter value={value} />
              </Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
