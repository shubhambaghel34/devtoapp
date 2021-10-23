import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import test from '../src/img/freeLogo.jpeg'
import Blog from './Components/blogs';

function App() {
  console.log(test);
  return (
      
      <div styles={{ backgroundImage:'../src/img/freeLogo.jpeg', backgroundSize: "cover",height: "300px",
      backgroundRepeat: "no-repeat"}}>
      <NavBar />
      <Blog/>
      </div>
     
     
   
  );
}

export default App;
