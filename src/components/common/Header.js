import React from 'react'
import { AppBar, Toolbar, styled, Grid } from "@material-ui/core"
import logo from "./../../assets/image/logo.jpg";
import { Link } from "react-router-dom";

const MyAppBar = styled(AppBar)({
    background: '#092239',
    boxShadow: 'none'
});

const Header = () => {
    return (
        <MyAppBar position='sticky'>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <Link to={`/`}>
                            <img className='logo-site' src={logo} alt="Game Zone"></img>
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Link className='link-nav-header' to={`/`}>
                            Home
                        </Link>
                        <Link className='link-nav-header' to={`/games`}>
                            Lista de Juegos
                        </Link>
                    </Grid>
                </Grid>
            </Toolbar>
        </MyAppBar >
    );
}
export default Header