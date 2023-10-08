import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
