import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from './context/FeedbackContext'

function App() {
      
    return(
        <FeedbackProvider>
            <Router>
                <Header text='Rate it up!' />
                <div className="container">
                <Routes>
                    <Route path='/' element={
                    <>
                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />
                    </>}>
                    </Route>
                    <Route path='/about' element={<About />} />
                </Routes>
                </div>
                <AboutIconLink />
            </Router>
        </FeedbackProvider>
        )
}

export default App;