import React from "react";
import exames from "../../../../examesDataClassOne.json";
import DegreeBoxInfo from "../../DegreeBoxInfo";

function ClassOneDegree() {
  return (
    <div>
      <DegreeBoxInfo data={exames} />
    </div>
  );
}

export default ClassOneDegree;
