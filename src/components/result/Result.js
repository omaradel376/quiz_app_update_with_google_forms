import { Link } from "react-router-dom";
import "./resulte.css";
import { useState } from "react";

function Result(props) {
  let [showWrong, setShowWrong] = useState(false);
  let [wrong, setwrong] = useState({});

  const checking = () => {
    // chat gpt
    let newWrong = {}; // إنشاء كائن جديد لتخزين الإجابات الخاطئة
    for (let i = 1; i <= Object.keys(props.correctAnswer).length; i++) {
      if (
        props.userAnswer[`user-answer-${i}`] !==
        props.correctAnswer[`answer-${i}`]
      ) {
        newWrong[i] = {
          // إضافة الإجابة الخاطئة إلى كائن newWrong
          id: i,
          quizText: props.array[i - 1].quiz,
          answer: [
            props.array[i - 1].answerOne,
            props.array[i - 1].answerTwo,
            props.array[i - 1].answerThree,
            props.array[i - 1].answerFour,
          ],
          yourSelect: props.userAnswer[`user-answer-${i}`],
          correct: props.correctAnswer[`answer-${i}`],
        };
      }
    }
    setwrong(newWrong); // تحديث الحالة wrong بالقيم الجديدة
  };

  const r = () => {
    return ((props.correct / props.array.length) * 100).toFixed(1);
  };

  return (
    <>
      <div className="result">
        <h3>عدد الاسئلة : {props.array.length}</h3>
        <h3>عدد الاسئلة الصحيحة : {props.correct}</h3>
        <p>النتيجة: {r()}%</p>
        <Link className="link-to-quiz-page" to="/الاختبارات">
          الرجوع الي صفحة الاختبارات
        </Link>
        {showWrong === true ? (
          <button
            className="show-wrong"
            onClick={() => {
              setwrong({});
              setShowWrong(false);
            }}
          >
            اخفاء الأخطاء
          </button>
        ) : (
          <button
            className="show-wrong"
            onClick={() => {
              checking();
              setShowWrong(true);
            }}
          >
            إظهار الأخطاء
          </button>
        )}
      </div>
      <div className="wrongs-answer">
        {/* this to show wrong answers and show the correct */}
        {Object.keys(wrong).map((key) => (
          <div className="container-wrong-quiz" key={key}>
            <p>السؤال رقم: {wrong[key].id}</p>
            <p>{wrong[key].quizText}</p>

            <div className="testDiv">
              {wrong[key].answer.map((an, index) => {
                return wrong[key].yourSelect === an ? (
                  <p className="the-wrong-answer">{wrong[key].yourSelect}</p>
                ) : (
                  <p
                    key={index}
                    className={
                      wrong[key].correct === an ? "the-correct-answer" : ""
                    }
                  >
                    {an}
                  </p>
                );
              })}
            </div>
            {wrong[key].yourSelect === undefined ? (
              <p>"لم تقم بحل هذا السؤال"</p>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}
export default Result;
