import { useLocation, useNavigate } from 'react-router';
import { changeMood, processTitleMood } from '../utils/processNewsLLM';
import { useState } from 'react';
import { calculateAverage } from '../utils/math.js';

export default function Article() {
    const location = useLocation();
    const data = location.state;
    const navigate = useNavigate();
    const [newsData, setNewsData] = useState(data);
    return <div>
        <button onClick={
            () => {
                navigate('/');
            }
        }>back</button>
        <h1>{newsData.title}</h1>
        <img src={newsData.img} alt="" />
        <p>{newsData.description}</p>
        <p>author: {newsData.author}</p>
        <p>source: {newsData.source}</p>
        <p>date: {newsData.date}</p>
        <p>mood score: {newsData.moodScore}</p>
        <button onClick={async () => {
            const answer = await changeMood({
                title: newsData.title,
                description: newsData.description
            });
            console.log('answer Article', answer);
            const scores = await processTitleMood([answer.title, answer.description]);
            const avgScore = calculateAverage(scores);
            setNewsData(Object.assign({}, newsData, { title: answer.title, description: answer.description, moodScore: Math.floor(avgScore) }));
        }}>make more calm</button>
    </div>;
}
