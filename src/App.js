import './App.css';
import './style/buttons.scss';
import './style/colors.scss';
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <TaskList />
    </div>
  );
}

export default App;
