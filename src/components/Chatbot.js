import React, { useContext } from 'react';
import { DeepChat } from 'deep-chat-react';
import DataContext from '../context/dataContext';

const Chatbot = () => {
    const { showQuiz, question, quizs, checkAnswer, correctAnswer,
        selectedAnswer,questionIndex, nextQuestion, showTheResult, chatbot }  = useContext(DataContext);

    return (
         <DeepChat
                demo={true}
                style={{ borderRadius: '10px', position:'absolute' }}
        // textInput={{ placeholder: { text: 'Welcome to the demo!' } }}
        // initialMessages={initialMessages}
      />
    );
};

export default Chatbot;
