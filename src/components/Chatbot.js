import React, { useContext } from 'react';
import { DeepChat } from 'deep-chat-react';
import DataContext from '../context/dataContext';
import '../style.css';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';

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
        result,
        chatbot
    } = useContext(DataContext);

    let command = "";

    if (result === 'You are: The Easygoing Minimalist') {
        command = "This individual tends to prefer routine, is not overly organized, leans towards introversion, may have a more skeptical approach in relationships, and remains exceptionally calm and composed, even in stressful situations. They value simplicity and are less concerned about exploring new ideas or seeking out social interactions.";
    } else if (result === 'You are: The Relaxed Explorer') {
        command = "This individual is resistant to routine, dislikes too much structure or planning, is highly spontaneous and social, maintains a neutral stance in relationships, and tends to remain calm in most situations.";
    } else if (result === 'You are: The Balanced Realist') {
        command = "This person is open to new ideas, maintains a balanced approach to organization, enjoys social interactions to a moderate extent, has a neutral stance in relationships, and remains relatively calm in most situations.";
    } else if (result === 'You are: The Considerate Optimist') {
        command = "This individual is open to some new ideas, appreciates organization to a degree, has a balanced social approach, can be skeptical in relationships, and tends to worry about future events.";
    } else if (result === 'You are: The Thoughtful Realist') {
        command = "This person prefers routine and is organized, leans towards introversion, may be less trusting in relationships, and remains exceptionally calm in stressful situations. They have a more reserved and cautious approach to life.";
    }

    return (
        
      <div className="Chat" style={{ backgroundImage: 'url(/images/chatBackground.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <br></br>
        <h1 style={{ color: '#448569' }}>Dino Chat</h1>
        <DeepChat
        directConnection={{
            cohere: {
              key: process.env.REACT_APP_COHERE_API_KEY,
              chat: { system_prompt: command},
            }
          }}
        // demo={false}
        style={{ borderRadius: '10px' }}
       
        // textInput={{ placeholder: { text: 'Welcome to the demo!' } }}
        // initialMessages={initialMessages}
        />
    </div>
    );
};

export default Chatbot;
