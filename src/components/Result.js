import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Result = () => {
    const { showResult, quizs, marks, startOver } = useContext(DataContext);

    let resultText, resultStyle;

    if (marks > 40) {
        resultText = 'You are: The Easygoing Minimalist';
        resultStyle = 'bg-success';
    } else if (marks > 30) {
        resultText = 'You are: The Relaxed Explorer';
        resultStyle = 'bg-info';
    } else if (marks > 20) {
        resultText = 'You are: The Balanced Realist';
        resultStyle = 'bg-warning';
    } else if (marks > 10) {
        resultText = 'You are: The Considerate Optimist';
        resultStyle = 'bg-danger';
    } else {
        resultText = 'You are: The Thoughtful Realist';
        resultStyle = 'bg-dark';
    }

    return (
        <section className="bg-dark text-white" style={{ display: showResult ? 'block' : 'none' }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${resultStyle}`}>
                            <h1 className='mb-2 fw-bold'>{resultText}</h1>
                            <button onClick={startOver} className='btn py-2 px-4 btn-light fw-bold d-inline'>Start Over</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;
