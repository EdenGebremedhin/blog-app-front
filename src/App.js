import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
//Pages
import Home from "./pages/Home.js"
import About from "./pages/About.js";
import Article from "./pages/Article.js";
import ArticlesList from "./pages/ArticlesList.js";
import NotFound from "./pages/NotFound.js";
//components
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <Router>
      <Navbar />
    <div className="max-w-screen-md mx-auto pt-20">
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles-list" element={<ArticlesList />} />
        <Route path="/article/:name" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
