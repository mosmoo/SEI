import './App.css';
import Sidebar from './components/Sidebar';
import Reviews from './components/Reviews';
import AverageRating from './components/AverageRating';
import SentimentAnalysis from './components/SentimentAnalysis';
import WebsiteVisitor from './components/WebsiteVisitor';

function App() {
  return (
    <div className="App">
      <div className='Sidebar'>
        <Sidebar />
      </div>
      <div className='Reviews'>
        <Reviews />
      </div>
      <div className='AverageRating'>
        <AverageRating />
      </div>
      <div className='SentimentAnalysis'>
        <SentimentAnalysis />
      </div>
      <div className='WebsiteVisitor'>
        <WebsiteVisitor />
      </div>

    </div>
  );
}

export default App;
