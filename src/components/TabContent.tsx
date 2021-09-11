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
      <Typography>Charcoal grey labels with the (x) exist on GitLab. Click the (x) to remove from GitLab.</Typography>
      <Typography>For all other labels, click anywhere on them to create on GitLab.</Typography>
      <br/><br/>
      <Typography variant='caption'>Removing labels can affect what issues show in the component boards</Typography>
      <Transfer />
    </TabInner>
  </TabWrapper>
);
