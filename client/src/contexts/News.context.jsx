import { createContext, useEffect, useState } from 'react';
import { getNews } from '../utils/getNews';
import { processTitleMood } from '../utils/processNewsLLM';

export const NewsContext = createContext();


export function NewsContextProvider({ children }) {
    const [news, setNews] = useState([]);
    useEffect(() => {
        getNews()
            .then(async res => {
                const titles = res.data.map(story => story.title);
                const scores = await processTitleMood(titles);
                for (let i = 0; i < res.data.length; i++) {
                    const story = res.data[i];
                    story.moodScore = scores[i];
                }
                setNews(res.data);
            })
            .catch(err => {
                console.log('err', err);
            });
    }, []);

    return <NewsContext.Provider
        value={{ setNews, news }}
    >
        {children}
    </NewsContext.Provider>;
}