import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

import img1 from './img/Donatello.png'
import img2 from './img/Rafael.png'
import img3 from './img/Leonardo.png'
import img4 from './img/Miguel Angel.png'
function App() {
  return (
  
  <div className='App-container'>
    <Header
    title='Galería de Imágenes con React'
    subtitle='Teenage Mutant Ninja Turtles'
    />

    <div className='card-container'>
    <Card 
    title='Donatello'
    description='Tortuga mutante antropomorfa, adiestrado en el arte del ninjutsu y gran conocedor de diversas ciencias; para combatir utiliza un bo de madera.' 
    photo={img1}> 
    </Card>

    <Card 
    title='Rafael'
    description='Tortuga mutante antropomorfa, adiestrado en el arte del ninjutsu. Se caracteriza por ser el más rudo del equipo. Para combatir utiliza 2 Sais.' 
    photo={img2}> 
    </Card>

    <Card 
    title='Leonardo'
    description='Tortuga mutante antropomorfa, adiestrado en el arte del ninjutsu. Es el líder del equipo, siendo el más serio, maduro y centrado. Para combatir utiliza Katanas dobles.' 
    photo={img3}> 
    </Card>

    <Card 
    title='Miguel Angel'
    description='Tortuga mutante antropomorfo, adiestrado en el arte del ninjutsu. Es el más pequeño, entusiasta, positivo y adaptable del equipo. Para combatir utiliza 2 nunchakus.' 
    photo={img4}> 
    </Card>

    </div>

    
    <Footer desc= 'Serie animada que se estrenó en 1987'></Footer>
  </div>
  
  );
  }
  export default App;
  
