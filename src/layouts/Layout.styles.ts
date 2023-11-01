import styled from "styled-components";

export const StyledBaseLayout = styled.div`
  padding: 2.5vw;
  height: 100vh;
  width: 100vw;
`;

export const StyledMobileLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
`;

export const StyledTabletLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
`;

export const StyledDesktopLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  overflow-y: auto;
`;
