import React, { useContext } from 'react';
import { DeepChat } from 'deep-chat-react';
import DataContext from '../context/dataContext';
import '../style.css';

const Chatbot = () => {
    const { 
        showQuiz, 
        question, 
        quizs, 
        checkAnswer, 
        correctAnswer,
        selectedAnswer,
        questionIndex,
        nextQuestion,
        showTheResult,
        chatbot 
    } = useContext(DataContext);

    return (
      <div className="Chat">
        <br></br>
        <h1>Dino Chat</h1>
        <DeepChat
        demo={true}
        style={{ borderRadius: '10px' }}
        // textInput={{ placeholder: { text: 'Welcome to the demo!' } }}
        // initialMessages={initialMessages}
        />
    </div>
    );
};

export default Chatbot;
