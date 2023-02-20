import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { MagnifyingGlass } from 'phosphor-react'
import { useStateContext } from '../context'
import styled from 'styled-components'
import Logo from '../assets/favicon.png'

const StyledNavbar = styled.div`
    background: #f5f5f5;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px 10vw;
    z-index: 999;

    .navbar-left {
        display: flex;
        align-items: center;
        gap: 30px;

        h1 {
            font-size: large;
            display: flex;
            align-items: center;
            gap: 5px;

            img {
                width: 25px;
            }
        }

        a, button {
            :hover{ 
                opacity: .5;
            }
        }
    }

    .navbar-right {
        display: flex;
    }
`

const Navbar = () => {

    const navigate = useNavigate()
    const { connect, address } = useStateContext()

    return (
        <StyledNavbar>
            <div className='navbar-left'>
                <h1>
                    <img src={Logo} alt="logo" />
                    Give Support
                </h1>

                <NavLink to={'/'}>Todos los proyectos</NavLink>

                <button
                    onClick={() => {
                        if (address) navigate('createcampaign')
                        else connect()
                    }}
                >
                    {address ? 'Crear proyecto' : 'Conectar billetera'}
                </button>

                {address ? <NavLink to={'/profile'}>Mis proyectos</NavLink> : ''}
            </div>
            <div className='navbar-right'>
                <MagnifyingGlass size={20} />
            </div>
        </StyledNavbar>
    )
}

export default Navbar