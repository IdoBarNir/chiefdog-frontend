import { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline } from "@mui/material";

import { MainRoutes } from "@routes/index";
import { ThemeProvider } from "@theme/index";
import { Layout } from "@layouts/index";

const App: FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CssBaseline />
        <Layout>
          <MainRoutes />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
