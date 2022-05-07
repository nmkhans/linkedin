import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </div>
      
    </div>
  );
}

export default App;
