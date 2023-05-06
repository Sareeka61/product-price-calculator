const Header = ({picture, name, description, price}) => {
    return (
        <div className="tshirt-header">
            <img src={picture} alt="T-shirt" className="image" />
            <h2 className="tshirtName">{name}</h2>
            <p className="description">{description}</p>
            <span className="price">Price:{price}</span>
        </div>
    )
} 

export default Header;