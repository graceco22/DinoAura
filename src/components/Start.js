import React, { useContext } from 'react';
import DataContext from '../context/dataContext';
import {useSpring, animated} from '@react-spring/web';

const Start = () => {
    const {startQuiz, showStart} = useContext(DataContext);
    return (
        <section className='text-white text-center' style={{ display: `${showStart ? 'block' : 'none'}`, backgroundImage: 'url(/images/background.png)'}}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        {/* <h1 className='fw-bold mb-4' style = {{color: "#448569"}}> Dino Quiz
                        </h1> */}
                        <button onClick={startQuiz} className="btn px-4 py-2 bg-light text-dark fw-bold" style={{ marginTop: '125px' }}>
                            Start Quiz
                        </button>
                    </div>
                </div>
                <div className = "dinos">
                    <animated.div style= {{width: 80, height: 80}}> 

                    </animated.div>
                </div>
            </div>
        </section>
    );
};

export default Start;