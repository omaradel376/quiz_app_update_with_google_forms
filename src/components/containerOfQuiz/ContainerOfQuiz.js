import QuizOfExam from "../quizOfExam/QuizOfExam";
import exames from "../../examesData.json";
import { useEffect, useState } from "react";
import "./containerOfQuiz.css";
import Result from "../result/Result";
import { useParams } from "react-router-dom";
function ContainerOfQuiz() {
  
  let { id } = useParams() //fix very important


  let [clicking, setClicking] = useState(false);
  let [sResult, setResult] = useState(false);
  // this is a card alert for end the exam
  function Card() {
    return (
      <>
        <div className="card">
          <p className="cookieHeading">إنهاء الاختبار ؟</p>
          <p className="cookieDescription">
            بالضغط على موافق فلا يمكنك الرجوع مرة اخرى الى الاختبار
          </p>
          <div className="buttonContainer">
            <button
              onClick={(event) => {
                setResult(true);
                setClicking(false);
                event.target.parentElement.parentElement.parentElement.classList.add(
                  "disabled"
                );
              }}
              className="acceptButton"
            >
              موافق
            </button>
            <button
              onClick={() => {
                setClicking(false);
              }}
              className="declineButton"
            >
              إلغاء
            </button>
          </div>
        </div>
      </>
    );
  }

  // set state of user answer that function is from chat gpt
  const [userAnswers, setUserAnswers] = useState({});
  const handleUserAnswer = (questionId, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [`user-answer-${questionId}`]: answer,
    }));
  };

  // set state of the really correct answer from file json
  let [correctAnswers, setCorrectAnswers] = useState({});
  useEffect(() => {
    const newCorrectAnswers = {};
    // exames[localStorage.getItem("idOfExam")].emax.forEach((answer) => {
    exames[id - 1].emax.forEach((answer) => {
      newCorrectAnswers[`answer-${answer.id}`] = answer.theCorrect;
    });
    setCorrectAnswers(newCorrectAnswers);
  }, [id]);
  let [correctState, setCorrect] = useState(0);
  // checking the answer of user and make varible one for correct and other for uncorrect and increese them when user select right or false
  const checking = () => {
    let correct = 0;
    let unCorrect = 0;
    for (let i = 1; i <= Object.keys(correctAnswers).length; i++) {
      if (userAnswers[`user-answer-${i}`] === correctAnswers[`answer-${i}`]) {
        correct++;
        setCorrect(correct);
        // console.log(userAnswers[`user-answer-${i}`]);
      } else {
        // setUnCorrect(unCorrect + 1);
        unCorrect++;
      }
    }
    // console.log("this is correct", correct);
    // console.log("this is not correct", unCorrect);
    // console.log(true);
  };
  return (
    <>
      <div className="container-of-quizes" style={{ marginTop: "20px" }}>
        {exames[id - 1].emax.map((quiz) => {
          return (
            // this is a quiz input
            <QuizOfExam
              id={quiz.id}
              key={quiz.id}
              quiz={quiz.quiz}
              passage={quiz.passage}
              answer1={quiz.answerOne}
              answer2={quiz.answerTwo}
              answer3={quiz.answerThree}
              answer4={quiz.answerFour}
              correct={quiz.theCorrect}
              titleOfQuiz={quiz.titleOfQuiz}
              onUserAnswer={handleUserAnswer} //chat gpt
            />
          );
        })}
        <button
          className="buttonSubmit"
          // checking the answers
          onClick={() => {
            // console.log(userAnswers);
            // console.log(correctAnswers);
            checking();
            setClicking(true);
          }}
        >
          إنهاء الاختبار
        </button>
        {clicking === true ? (
          <>
            <Card />
            <div className="overLay"></div>
          </>
        ) : null}{" "}
      </div>
      {sResult === true ? (
        <Result
          array={exames[id - 1].emax}
          correct={correctState}
          userAnswer={userAnswers}
          correctAnswer={correctAnswers}
        />
      ) : null}
    </>
  );
}
export default ContainerOfQuiz;
