import React from "react";
import { styled } from "@storybook/theming";
import { Title } from "@storybook/components";
import Transfer from "./Transfer";
import { Typography } from "@material-ui/core";


const TabWrapper = styled.div(({ theme }) => ({
  background: theme.background.content,
  padding: "4rem 20px",
  minHeight: "100vh",
  boxSizing: "border-box",
}));

const TabInner = styled.div({
  maxWidth: 768,
  marginLeft: "auto",
  marginRight: "auto",
});

interface TabContentProps {
  code: string;

}

export const TabContent: React.FC<TabContentProps> = ({ code }) => (
  <TabWrapper>
    <TabInner>
      <Title>Storylab</Title>
      <Typography>Light grey labels don't yet exist on your GitLab project; Click to add.</Typography>
      <Typography>Charcoal grey labels already exist; Click to remove.</Typography>
      <Transfer />
    </TabInner>
  </TabWrapper>
);
