import './App.css';
import { DownLinner } from './components/DownLinner';
import { Linner } from './components/Linner';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
  return (
    <div className="App">
      <Linner />
      <TodoWrapper />
      <DownLinner />
    </div >
  );
}

export default App;
