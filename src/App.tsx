import { ReactSimpleList } from './components/simple-list';

const App = () => {
  const items = ['apple', 'orange'];
  const animals = ['elephant', 'lion', 'panda']
  return (
    <div><ReactSimpleList items={items} animals={animals}></ReactSimpleList></div>
  );
};

export default App;
