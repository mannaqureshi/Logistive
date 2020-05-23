import React, { Fragment } from "react";
import { SectionList } from "../components/sections";
import { Board } from "../components/board";
import processX from "../content/process-x.svg";
import processY from "../content/process-y.svg";
import { sections } from "../config";

export const Home = () => (
  <Fragment>
    <SectionList sections={sections} place="Pakistan"></SectionList>
  </Fragment>
);
