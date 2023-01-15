import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

import img1 from './img/Donatello.png'
function App() {
  return (
  
  <div>
    <Header 
    title='Galería de Imágenes con React'
    subtitle='Teenage Mutant Ninja Turtles'
    />
    <Card 
    title='Donatello'
    description='Tortuga mutante antropomorfa, adiestrado en el arte del ninjutsu y gran conocedor de diversas ciencias y mecánicas; para combatir emplea un bo de madera.' 
    photo={img1}> 
    </Card>
    
    <Footer title= 'Serie animada que se estrenó en 1987'></Footer>
  </div>
  
  );
  }
  export default App;
  
