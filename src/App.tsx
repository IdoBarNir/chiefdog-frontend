import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";

import MainRoutes from "./routes/MainRoutes";
import globalStyles from "./styles/globalStyles";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <MainRoutes />
    </BrowserRouter>
  );
};

export default App;
