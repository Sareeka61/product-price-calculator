import './App.css'
import TshirtDetails from './TshirtDetails';


const App = () => {
  return(
    <>
      <h1>T-Shirt Ecommerce Site</h1>
      <TshirtDetails name="Black Tshirt-Programmer Edition" picture="image.png" description="Cozy black tshirt" price="9.99" />
      <TshirtDetails name="Artpiece" picture="tshirt.jpeg" description="Cool unisex tshirt" price="12.69" />
    </>
  )
} 

export default App;
