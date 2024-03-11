import React from "react";

function DegreeBoxInfo(props) {
  return (
    <div className="container-box-degree-info">
      {props.data.map((exam) => {
        return (
          <div className="degrees-links" key={exam.id}>
          <h2>{exam.titleOfExam}</h2>
          <a
            className="link-to-degree"
            target="_blank"
            rel="noreferrer"
            href={exam.linkDegrees}
          >
            اضغط لعرض النتائج
          </a>
        </div>
        );
      })}
    </div>
  );
}

export default DegreeBoxInfo;
