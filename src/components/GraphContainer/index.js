import React, { useState, useCallback } from "react";
import GraphDisplay from "./GraphDisplay";
import DropDownComponent from "./DropDownComponent";
import "./graphcomponent.scss";
const GraphComponent = () => {
  const [graphType, setGraphType] = useState("");
  const [toogleDropDown, setToogleDropDown] = useState(false);

  //useCallback will render the "GraphDisplay" based on the value change of "graphType"
  const getGraphItems = useCallback(() => {
    //setting dummy array values
    if (graphType === "piechart") {
      return [12, 11, 31];
    } else if (graphType === "barchart") {
      return [999, 555, 222];
    } else if (graphType === "linechart") {
      return [11, 22, 33];
    }
  }, [graphType]);

  return (
    <div className="graph-container">
      <DropDownComponent
        setGraphType={setGraphType}
        setToogleDropDown={setToogleDropDown}
        toogleDropDown={toogleDropDown}
      />
      <GraphDisplay getGraphItems={getGraphItems} />
    </div>
  );
};

export default GraphComponent;
