import React from "react";
import Select from "react-select";

const options = [
  { value: "piechart", label: "Pie Chart" },
  { value: "barchart", label: "Bar Chart" },
  { value: "linechart", label: "Line Chart" },
];

const DropDownComponent = ({
  setGraphType,
  setToogleDropDown,
  toogleDropDown,
}) => {
  return (
    <>
      <button onClick={() => setToogleDropDown((prevValue) => !prevValue)}>
        Toggle Dropdown
      </button>
      {toogleDropDown ? (
        <div>
          <Select options={options} onChange={(e) => setGraphType(e.value)} />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default DropDownComponent;
