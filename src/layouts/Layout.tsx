import { FC, ReactNode } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

import { ThemeToggle } from "@theme/index";
import {
  StyledMobileLayout,
  StyledTabletLayout,
  StyledDesktopLayout,
  StyledBaseLayout,
} from "./Layout.styles";

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const LayoutComponent = isMobile
    ? StyledMobileLayout
    : isTablet
    ? StyledTabletLayout
    : StyledDesktopLayout;

  return (
    <StyledBaseLayout>
      <ThemeToggle />
      <LayoutComponent
        className={
          isMobile
            ? "mobileLayout"
            : isTablet
            ? "tabletLayout"
            : "desktopLayout"
        }
      >
        {children}
      </LayoutComponent>
    </StyledBaseLayout>
  );
};

export default Layout;
