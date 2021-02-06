import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/NavComponent';
import Footer from './components/FooterComponent';
import Home from './pages/Home';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Nav />
      <Router>
      <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
