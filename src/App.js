import './App.css';
import Navbar from './Container/Navbar';
import Container from './Container/Container';
import Footer from './Container/Footer';

function App() {
  return (
    <div className="App">
      
      <div className='space-y-12 '>
        <Navbar />
        <Container />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
