import React, { useContext } from 'react';
import DataContext from '../context/dataContext';
import { DeepChat } from 'deep-chat-react';
import { useState } from 'react';
const Result = () => {
    const { showResult, quizs, marks, startOver, startChat } = useContext(DataContext);

    let resultText, resultStyle;

    if (marks > 40) {
        resultText = 'You are: Lemon';
        resultStyle = 'url(/images/yellow.png)';
    } else if (marks > 30) {
        resultText = 'You are: Acai';
        resultStyle = 'url(/images/blue.png)';
    } else if (marks > 20) {
        resultText = 'You are: Kiwi';
        resultStyle = 'url(/images/green.svg)';
    } else if (marks > 10) {
        resultText = 'You are: Taro';
        resultStyle = 'url(/images/purple.png)';
    } else {
        resultText = 'You are: Lychee';
        resultStyle = 'url(/images/red.png)';
    }

    return (
        <section style={{ display: showResult ? 'block' : 'none' , backgroundImage: resultStyle, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            <div className="container">
                <div className="row vh-100 justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded`}>
                            <h1 className='mb-2 fw-bold' style={{ color: '#448569' }}>{resultText}</h1>
                            <button onClick={startOver} className='btn py-2 px-4 btn-light fw-bold d-inline'>Start Over</button>
                            <button onClick={startChat} className='btn py-2 px-4 btn-light fw-bold d-inline'>Go To Chat</button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;
