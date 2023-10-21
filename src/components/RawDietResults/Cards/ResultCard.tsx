import { FC } from "react";

import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";

type ResultCardProps = {
  title: string;
  data: Record<string, number>;
};

const ResultCard: FC<ResultCardProps> = ({ title, data }) => {
  return (
    <Card style={{ margin: "10px 0" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Divider style={{ margin: "10px 0" }} />
        <List>
          {Object.entries(data).map(([key, value]) => (
            <ListItem key={key}>
              <Typography variant="body1">
                {key}: {value.toFixed(2)} grams
              </Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
