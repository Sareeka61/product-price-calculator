import Header from "./Header";
import Footer from './Footer';
import Body from './Body';


const TshirtDetails = ({picture, name, description, price}) => {
    return (
         <div class="tshirt">
        <Header picture={picture} name={name} description={description} price={price}/>
        <Body price={price}/>
        <Footer />
        </div>
    )
}

export default TshirtDetails;