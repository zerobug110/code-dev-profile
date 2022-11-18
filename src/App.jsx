import './App.scss';
import { Footer } from './components/layouts/footer/footer';
import { Header } from './components/layouts/header/header';
import { Home } from './pages/home/home';
import {GithubProvider} from  './context/github/githubContext'

function App() {
  return (
    <GithubProvider>
      <div className="App">
        <Header/>
        <Home/>     
        <Footer/>
      </div>
    </GithubProvider>
  );
}

export default App;


// https://nivo.rocks/calendar/  use this chart