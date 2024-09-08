import React from "react";

function ExamBoxInfo(props) {
  return (
    <div className="container-exam-page">
      {props.data.map((exam) => {
        return (
          <div className="box-quiz" key={exam.id}>
            <h2>{exam.titleOfExam}</h2>
            <div className="qr-code mt-4">
              <h3>الباركود</h3>
              <img
                style={{
                  width: "150px",
                  maxWidth: "100%",
                  display: "block",
                  margin: "0 auto",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                }}
                src={exam.linkImg}
                alt="QR_Code"
              ></img>
            </div>
            <a href={exam.link} target="_black" onClick={() => {}} to={`/الاختبار/${exam.id}`} className="button-in-quizes-page">
              اختبر الان
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default ExamBoxInfo;
