import { useContext } from 'react';
import './App.css'
import NewsFeedCard from './components/NewsFeedCard/NewsFeedCard';
import { NewsContext } from './contexts/News.context'

function App() {
  const newsContext = useContext(NewsContext);
  const newsStories = newsContext.news;

  return (
    <>
      {newsStories.length > 0 && newsStories.map(newsStory => {
        return <div
          key={newsStory.source + newsStory.title + newsStory.author}
          id='newsFeedContainer'>
          <NewsFeedCard
            author={newsStory.author}
            date={newsStory.published_at}
            description={newsStory.description}
            img={newsStory.image}
            source={newsStory.source}
            title={newsStory.title}
            moodScore={newsStory.moodScore}
          />;
        </div>
      })}
    </>
  )
}

export default App
