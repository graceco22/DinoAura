import React from 'react';
import Start from './components/Start';
import Chatbot from './components/Chatbot';
import { DeepChat } from 'deep-chat-react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { DataProvider } from './context/dataContext';


function App() {
  return (
    <DataProvider>
      {/* Welcome Page */}
      <Start/>

      {/* Quiz Page */}
      <Quiz/>

      {/* Result Page */}
      <Result/>

      <Chatbot/>

    </DataProvider>
  );
}

export default App;
