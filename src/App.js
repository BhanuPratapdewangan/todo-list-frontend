
import './App.css';
import FetchTodo from './component/fetch-todo/fetch-todo.js';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FetchTodo />
      </BrowserRouter>
    </div>
  );
}

export default App;
