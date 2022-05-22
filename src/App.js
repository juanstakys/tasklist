import './App.css';
import TaskList from './components/TaskList.jsx'

function App() {
  return (
    <div className="App">
      <div className="main-tasklist">
        <h1>Task List</h1>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
