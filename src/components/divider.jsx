import React, { Fragment } from "react";
import van from "../content/divider.svg";
import roller from "../content/roller.svg";

import "./divider.css";
export const Divider = ({ title, type }) => {
  return (
    <Fragment>
      <div className="container">
        <div className="divider-container">
          {type == 1 && <img className="van" src={van} alt="van" />}
          {type == 2 && (
            <Fragment>
              <img className="roller" src={roller} alt="van" />
            </Fragment>
          )}
          <p className="heading-secondary black divider">{title}</p>
        </div>
      </div>
    </Fragment>
  );
};
