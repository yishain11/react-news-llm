import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.jsx'
import Article from './pages/Article.jsx';
import { NewsContextProvider } from './contexts/News.context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/article" element={<Article />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </NewsContextProvider>
  </StrictMode>,
)
