import { Link } from "react-router-dom";
import "./examesPage.css";
import exames from "../../examesData.json";
function ExamesPages() {
  // fix this is a import for select the exam that will show from json file
  // localStorage.setItem("idOfExam", 0);
  return (
    <div className="quizes-page">
      <div className="container">
        {exames.map((exam) => {
          return (
            <div className="box-quiz" key={exam.id}>
              <h2>{exam.titleOfExam}</h2>
              <p>عدد الأسئلة: {exam.emax.length}</p>
              <p>الدرجة النهائية: {exam.max}</p>
              <Link
                onClick={() => {
                  // localStorage.setItem("idOfExam", exam.id - 1);
                }}
                to={`/الاختبار/${exam.id}`}
                className="button-in-quizes-page"
              >
                اختبر الان
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExamesPages;
