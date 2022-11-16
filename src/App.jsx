import './App.scss';
import { Footer } from './components/layouts/footer/footer';
import { Header } from './components/layouts/header/header';
import { Home } from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>     
      <Footer/>
    </div>
  );
}

export default App;
