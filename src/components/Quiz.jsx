import React from "react";

import { Link } from 'react-router-dom';
import penguinIcon from './penguin.png'; // 이미지

const quizList=[
    {
		id: 'sazi',
		title: '사지선다',
		description: '올바른 정답을 선택하세요!',
		icon: <img src={penguinIcon} alt="펭귄 아이콘"  />,
	},
	{
		id: 'test',
		title: '받아쓰기',
		description: '받아쓰기를 하며 단어를 외워요!',
		
	},
	{
		id: 'word',
		title: '단어카드',
		description: '카드를 넘기며 단어를 외워요!',
		//icon: <TbCards size='50' color='#ffff' />,
	},
];

export default function Quiz(){

    const quizItemStyle = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        margin: '10px 0',
        backgroundColor: 'ffff',
        color: 'purple',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s',
      };
    
      const quizTitleStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '10px',
        
      };
    
      const quizDescriptionStyle = {
        fontSize: '16px',
        color: '#666',
      };
    
      const containerStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
      };
    
      return (
        <div style={containerStyle}>
          <main>
            {quizList.map(quiz => (
                 <Link
                 to={`/${quiz.id}`} // 각 퀴즈 항목에 링크 설정
                 key={quiz.id}
                 style={{ textDecoration: 'none' }} // 기본 링크 스타일 제거
                >
              <div key={quiz.id} style={quizItemStyle}>
                <h2 style={quizTitleStyle}>{quiz.title}</h2> {/* 퀴즈의 제목 출력 */}
                <p style={quizDescriptionStyle}>{quiz.description}</p> {/* 퀴즈의 설명 출력 */}
              </div>
              </Link>
            ))}
          </main>
        </div>
      );
    }