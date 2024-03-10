import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
      // All Quizs, Current Question, Index of Current Question, Answer, Selected Answer, Total Marks
  const [quizs, setQuizs] = useState([]);
  const [question, setQuesion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [marks, setMarks] = useState(0);

  // Display Controlling States
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [chatbot, setShowBot] =useState(false)
  // Load JSON Data
  useEffect(() => {
    fetch('quiz.json')
      .then(res => res.json())
      .then(data => setQuizs(data))
  }, []);

  // Set a Single Question
  useEffect(() => {
    if (quizs.length > questionIndex) {
      setQuesion(quizs[questionIndex]);
    }
  }, [quizs, questionIndex])

  // Start Quiz
  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  }

  // Check Answer
  const checkAnswer = (event, selected) => {
    if (!selectedAnswer) {
      setSelectedAnswer(selected);

      event.target.classList.add('bg-success');

      if (selected === question.five) {
        setMarks(marks + 5);
      } else if (selected === question.four){
        setMarks(marks + 4);
      } else if (selected === question.three){
        setMarks(marks + 3);
      } else if (selected === question.two){
        setMarks(marks + 2);
      } else if (selected === question.one){
        setMarks(marks + 1);
      }
    }
  }

  // Next Quesion
  const nextQuestion = () => {
    setSelectedAnswer('');
    const wrongBtn = document.querySelector('button.bg-danger');
    wrongBtn?.classList.remove('bg-danger');
    const rightBtn = document.querySelector('button.bg-success');
    rightBtn?.classList.remove('bg-success');
    setQuestionIndex(questionIndex + 1);
  }

  // Show Result
  const showTheResult = () => {
    setShowResult(true);
    setShowStart(false);
    setShowQuiz(false);
  }

  // Start Over
  const startOver = () => {
    setShowStart(false);
    setShowResult(false);
    setShowQuiz(true);
    setSelectedAnswer('');
    setQuestionIndex(0);
    setMarks(0);
    const wrongBtn = document.querySelector('button.bg-danger');
    wrongBtn?.classList.remove('bg-danger');
    const rightBtn = document.querySelector('button.bg-success');
    rightBtn?.classList.remove('bg-success');
  }

  const startChat = () => {
    console.log("start chat")
    setShowStart(false);
    setShowResult(false);
    setShowBot(true)
    setSelectedAnswer('');
    setQuestionIndex(0);
    setMarks(0);

  } 
    return (
        <DataContext.Provider value={{
            startQuiz,showStart,showQuiz,question,quizs,checkAnswer,
            selectedAnswer,questionIndex,nextQuestion,showTheResult,showResult,marks,
            startOver,startChat, chatbot
        }} >
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;

