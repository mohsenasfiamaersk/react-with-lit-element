import { ReactSimpleList } from './components/simple-list';

const App = () => {
  const items = ['apple', 'orange'];
  return (
    <div><ReactSimpleList items={items}></ReactSimpleList></div>
  );
};

export default App;
