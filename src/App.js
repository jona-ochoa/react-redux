import './App.css';
import store from './store/'
import RepoSearch from './RepoSearch'

function App() {
  return (
    <>
      <RepoSearch store={store} />
    </>
  );
}

export default App;
