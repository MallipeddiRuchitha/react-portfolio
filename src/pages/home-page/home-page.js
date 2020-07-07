import React from "react";
import HeaderTemplate from "../../components/templates/_header-template/_header-template";
import HomeMainContent from "../../components/organisms/_home-main-content/_home-main-content";
import { ThemeProvider } from "@material-ui/core";
import Header from "../../components/organisms/_header/_header";
import MainComponentRouter from "../../components/organisms/_routing/_routing";

const HomePage = () => {
  return (
    <div data-testid="homePage">
      <HeaderTemplate
        header={<Header></Header>}
        mainContent={<MainComponentRouter></MainComponentRouter>}
      ></HeaderTemplate>
    </div>
  );
};

export default HomePage;
