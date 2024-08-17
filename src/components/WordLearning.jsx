import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WordLearning = () => {
    const [level, setLevel] = useState(1); // 초기 레벨 설정
    const [words, setWords] = useState([]); // 현재 레벨의 단어들
    const [currentWordIndex, setCurrentWordIndex] = useState(0); // 현재 단어의 인덱스
    const [completed, setCompleted] = useState(false); // 레벨 완료 상태
    const [allLevelsCompleted, setAllLevelsCompleted] = useState(false); // 모든 레벨 완료 상태
    const dummyData = {
        1: ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine'],
        2: ['ant', 'bee', 'cat', 'dog', 'eel', 'fox', 'goat', 'horse', 'iguana', 'jaguar', 'koala', 'lion'],
        3: ['airplane', 'boat', 'car', 'drone', 'elevator', 'ferry', 'gondola', 'helicopter', 'jet', 'kayak', 'limousine', 'motorcycle'],
        // 나머지 레벨에 대한 더미 데이터 추가
        // ...
        12: ['zebra', 'yak', 'xenon', 'wolf', 'vulture', 'urchin', 'tiger', 'snake', 'rabbit', 'quail', 'penguin', 'octopus'],
    };
    useEffect(() => {
        const fetchWords = async () => {
            try {
                const data = dummyData[level] || [];
                setWords(data.slice(0, 12)); // 각 
                //const response = await axios.get(`https://example.com/api/words?level=${level}`);
                //setWords(response.data.words.slice(0, 12)); // 각 레벨당 12개의 단어만 사용
                setCurrentWordIndex(0);
                setCompleted(false);
            } catch (error) {
                console.error('Failed to fetch words:', error);
            }
        };

        fetchWords();
    }, [level]);

    const handleNextWord = () => {
        if (currentWordIndex < words.length - 1) {
            setCurrentWordIndex(currentWordIndex + 1); // 다음 단어로 이동
        } else {
            setCompleted(true); // 레벨 완료
        }
    };

    const handleNextLevel = () => {
        if (completed) {
            if (level < 12) {
                setLevel(level + 1); // 다음 레벨로 이동
            } else {
                setAllLevelsCompleted(true); // 모든 레벨 완료
            }
        }
    };

    // 인라인 스타일 정의
    const containerStyle = {
        textAlign: 'center',
        marginTop: '50px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        maxWidth: '400px',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#f9f9f9',
    };

    const headingStyle = {
        color: '#333',
        fontSize: '2em',
        marginBottom: '20px',
    };

    const subheadingStyle = {
        color: '#555',
        fontSize: '1.5em',
        marginBottom: '20px',
    };

    const buttonStyle = {
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '1em',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    const buttonDisabledStyle = {
        ...buttonStyle,
        backgroundColor: '#ddd',
        cursor: 'not-allowed',
    };

    return (
        <div style={containerStyle}>
            {!allLevelsCompleted ? (
                <div>
                    <h1 style={headingStyle}>Level {level}</h1>
                    {!completed ? (
                        <div>
                            <h2 style={subheadingStyle}>Word: {words[currentWordIndex]}</h2>
                            <button style={buttonStyle} onClick={handleNextWord}>Next Word</button>
                        </div>
                    ) : (
                        <div>
                            <h2 style={subheadingStyle}>Level {level} Completed!</h2>
                            <button style={buttonStyle} onClick={handleNextLevel}>Next Level</button>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <h1 style={headingStyle}>Congratulations!</h1>
                    <h2 style={subheadingStyle}>You've completed all levels.</h2>
                </div>
            )}
        </div>
    );
};

export default WordLearning;
