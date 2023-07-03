import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import CardWidgetContainer from "../../common/cartWidget/CartWidgetContainer"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="containerBrand">
        <img src="https://res.cloudinary.com/dawadzlfe/image/upload/v1688407155/CODER-React/Dermo/LogoDermo_azfakx.png" alt="DermoCosmetic" />
        <h1 className="brandText">ermo Cosmetic</h1>
      </div>
        
      <div className="containerCategories">
        <Button sx={{ color: "#F2CEDB" }}>Todos</Button>
        <Button sx={{ color: "#F2CEDB" }}>Eucerín</Button>
        <Button sx={{ color: "#F2CEDB" }}>ISDIN</Button>
        <Button sx={{ color: "#F2CEDB" }}>La Roche-Posay</Button>
      </div>
    <CardWidgetContainer />
    </div>
  )
}

export default Navbar