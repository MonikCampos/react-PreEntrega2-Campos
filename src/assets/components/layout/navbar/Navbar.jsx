import "./Navbar.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CardWidgetContainer from "../../common/cartWidget/CartWidgetContainer"

const pages = ['Todas', 'Eucerin', 'ISDIN', "La Roche-Posay"];

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "#0C203B" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src="https://res.cloudinary.com/dawadzlfe/image/upload/v1688424143/CODER-React/Dermo/LogoDermo_alltnj.png" alt="DermoCosmetic" />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none', backgroudColor: "#0C203B", color: "#F2CEDB" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <CardWidgetContainer />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar