import { useState } from "react";
import "./quizOfExam.css";

function QuizOfExam(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    props.onUserAnswer(props.id, value); // <-- Call the callback function
  };
  return (
    <>
      <div className="quiz-info">
        <p>{props.id}</p>

        <p>{props.titleOfQuiz}</p>
      </div>
      <div className="quiz-card">
        {props.passage === "" ? null : <h4>{props.passage}</h4>}
        <h2 className="quiz-text">{props.quiz}</h2>
        <div className="quiz-answers" id={"quiz-" + props.id}>
          <div className="answer">
            <input
              type="checkbox"
              className="ui-checkbox"
              id={"quiz-" + props.id + "-option-1"}
              value={props.answer1}
              checked={selectedOption === props.answer1}
              onChange={(event) => {
                handleOptionChange(event.target.value);
              }}
            />
            <label
              className="text-answer"
              htmlFor={"quiz-" + props.id + "-option-1"}
            >
              {props.answer1}
            </label>
          </div>

          <div className="answer">
            <input
              className="ui-checkbox"
              type="checkbox"
              id={"quiz-" + props.id + "-option-2"}
              value={props.answer2}
              checked={selectedOption === props.answer2}
              onChange={(event) => {
                handleOptionChange(event.target.value);
              }}
            />
            <label
              className="text-answer"
              htmlFor={"quiz-" + props.id + "-option-2"}
            >
              {props.answer2}
            </label>
          </div>

          <div className="answer">
            <input
              type="checkbox"
              className="ui-checkbox"
              id={"quiz-" + props.id + "-option-3"}
              value={props.answer3}
              checked={selectedOption === props.answer3}
              onChange={(event) => {
                handleOptionChange(event.target.value);
              }}
            />
            <label
              className="text-answer"
              htmlFor={"quiz-" + props.id + "-option-3"}
            >
              {props.answer3}
            </label>
          </div>

          <div className="answer">
            <input
              type="checkbox"
              className="ui-checkbox"
              id={"quiz-" + props.id + "-option-4"}
              value={props.answer4}
              checked={selectedOption === props.answer4}
              onChange={(event) => {
                handleOptionChange(event.target.value);
              }}
            />
            <label
              className="text-answer"
              htmlFor={"quiz-" + props.id + "-option-4"}
            >
              {props.answer4}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizOfExam;
