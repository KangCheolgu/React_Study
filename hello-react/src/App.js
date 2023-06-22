import logo from './logo.svg';
import './App.css';

function App() {
  const name='리액트';
  const style = {
    backgroundColor : 'black',
    color : 'white'

  }
  return <div style={style}>{name}</div>
}

export default App;
