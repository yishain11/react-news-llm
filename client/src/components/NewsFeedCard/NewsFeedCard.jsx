import './NewsFeedCard.css';
import { useNavigate } from "react-router";

export default function NewsFeedCard({ title, author, source, date, img, description, moodScore = null }) {
    const navigate = useNavigate();
    return <div id='newsFeedCardContainer' onClick={() => {
        navigate('/article', { state: { title, author, source, date, img, description, moodScore } });
    }}>
        <div id="newsInfo">
            <div id='newsCardTitle'>{title}</div>
            <div id='newsCardAdditionalInfo'>
                <span>{author}</span>
                {author !== source && <span>{source}</span>}
                <span>{date}</span>
                <div>mood: {moodScore !== null ? moodScore : "waiting for score"}</div>
            </div>
        </div>
        <img src={img} />
    </div>;
}
