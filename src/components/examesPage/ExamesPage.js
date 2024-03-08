import "./examesPage.css";
import exames from "../../examesData.json";
function ExamesPages() {
  return (
    <div className="quizes-page">
      <div className="container">
        {exames.map((exam) => {
          return (
            <div className="box-quiz" key={exam.id}>
              <h2>{exam.titleOfExam}</h2>
              <a
                href={exam.link}
                target="_black"
                onClick={() => {}}
                to={`/الاختبار/${exam.id}`}
                className="button-in-quizes-page"
              >
                اختبر الان
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExamesPages;
