import React, { useState, useEffect, useContext } from "react";
import "./Quiz_app.css";
import StudentContext from "../../Context/StudentContext";

function Quiz_app() {

  const ques = useContext(StudentContext);
  const [username]=useState(ques.students[5])
  const [questions]=useState(ques.students[4]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showTimeUp, setshowTimeUp]=useState(false);
  const [timeLeft, settimeLeft]=useState(120); // 2 mins Timer
  const [selectedAnswer, setAnswerSelected]=useState(false);
  const [correctAnswers, setCorrectAnswers]=useState(0);
  const [incorrectAnswers, setIncorrectAnswers]=useState(0);
  const [userAnswers, setUserAnswers]=useState([]);

useEffect(() => {

  if(timeLeft > 0 && !showScore){
    const Timer = setTimeout(() => {
      settimeLeft((prevTime) => prevTime - 1)
      return clearTimeout(Timer)
    }, 1000);
  }else if(timeLeft === 0){
    setshowTimeUp(true);
    setShowScore(true);
  }
}, [timeLeft, showScore]);

  const handleAnswerOptionClick = (isCorrect, selectedAnswer, incorrect) => {
    setAnswerSelected(true);
    if(isCorrect){
      setScore(score + 5);
      setCorrectAnswers(correctAnswers + 1);
      setAnswerSelected(true);
    }else {
      setIncorrectAnswers(incorrectAnswers +1);
    }
    setUserAnswers([...userAnswers, selectedAnswer]);
  }

  return (
    <div className="quiz_main">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            {showTimeUp}
            <div className="quiz-question">
              <div className="score">
                <h2>Score: {score}</h2>
                <h3>Time Left : {timeLeft}</h3>
                <p><span>user Name:</span> {username}</p>
              </div>
              <div className="question-count mt-4">
                <h3>
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </h3>
              </div>
              <div className="question-text mt-3">
                <h4>{questions[currentQuestion].questionText}</h4>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="answer-options">
              
              {
                questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <div key={index} className="ans_button_main">
                    <button className={`answer-option ${
                      userAnswers.includes(answerOption)
                      ? questions[currentQuestion].answer === answerOption
                      ? "correct"
                      : "incorrect"
                      : " "
                    }`}
                    disabled={selectedAnswer}
                    onClick={() => {
                      handleAnswerOptionClick(
                        answerOption === questions[currentQuestion].answer,
                        answerOption
                      );
                      setAnswerSelected(true);
                    }}
                    >
                    {answerOption}
                    </button>
                  </div>
                ))
              }
            </div>
            <div className="buttons">
              {currentQuestion > 0 && (
                <button
                  className="previous-button"
                  onClick={() =>
                    setCurrentQuestion((prevQuestion) => prevQuestion - 1)
                  }
                >
                  Previous
                </button>
              )}
              {selectedAnswer && (
                  <button
                    className={`next-button ${
                      currentQuestion === questions.length - 1
                        ? "submit-button"
                        : ""
                    }`}
                    onClick={() => {
                      if (currentQuestion === questions.length - 1) {
                        setShowScore(true);
                      } else {
                        setAnswerSelected(false);
                        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
                      }
                    }}
                  >
                    {currentQuestion === questions.length - 1
                      ? "Submit"
                      : "Next"}
                  </button>
              )}
              <button
                className="quit-button"
                onClick={() => setShowScore(true)}
              >
                Quit
              </button>
            </div>
          </div>
        </div>
      </div>
      {showScore && (
        <div className="results">
          <div className="result_wapper">
          <h2>Results</h2>
          <p>Total Marks: {questions.length}</p>
          <p>Obtained Marks: {score}</p>
          <p>Percentage: {(score / questions.length) * 100}%</p>
          <p>Correct Answers: {correctAnswers}</p>
          <p>Incorrect Answers: {incorrectAnswers}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz_app;
