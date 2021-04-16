import React, { useState, useLayoutEffect } from 'react'
import styled from 'styled-components'


const NavbarWrapper = styled.nav`
overflow: hidden;
padding: 1em 0;
position: -webkit-sticky; /* Safari */
position: sticky;
top: 0;

div{
  display:grid;
  grid-template-columns:1fr 1fr;
  justify-items: space-between;
  padding:0 0.5em;
  max-width: 1280px;
  margin: 0 auto;
}
  button{
    cursor:pointer;
    padding:0 1em;
    max-width:120px;
    border:none;
    outline:none;
    text-transform:uppercase;
    :hover{
      color: ${props => props.theme.body};
    }
  }
  a{
    color: ${props => props.theme.a.color};
    text-transform:uppercase;
  }
  ul{
    list-style-type:none;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-evenly;
    text-align:center;
    @media (max-width: 960px){
      flex-direction:column;
      justify-content:space-evenly;
      align-items:justify;
    }
  }
    li {
      padding-right:1em;
      a{
        :hover, :focus{
          color: ${props => props.theme.a.hover};
        }
      }
    }
  form{
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  text-align:left;
  label{
    align-self:center;
    color: ${props => props.theme.label.color};
  }
  input{
    margin:1em 5px;
    align-self:center;
    border:1px solid ${props => props.theme.input.color};
  }
  .nav-settings{
    display:flex;
    flex-wrap:wrap;
    max-width:fit-content;
    justify-content:space-between;
  }
  @media (min-width: 960px){
    grid-template-columns: 1fr 1fr 1fr;
  }
}
.nav-toggler{
  @media (min-width: 960px){
  position:absolute;
  right:0;
  bottom:1rem;
  }
}
`
const Logo = styled.a`
  display:hidden;
  @media (min-width: 960px){
    display:block;
    padding:0;
    margin:auto 0;
  }
`

function Navbar({ handleThemeSwitch, button, params, onParamChange, theme}) {
  const [menu, setMenu] = useState(false)

  function useWindowsSize() {
    const [size, setSize] = useState([0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => {
        window.removeEventListener('resize', updateSize);
        setMenu(!menu)
      }
    }, []);
    return size;
  }

  const [width] = useWindowsSize()

  function handleToggleMenu() {
    setMenu(!menu)
  }

  return (
    <NavbarWrapper button={button} id="Navbar">
      <div>
        <Logo href="./index.html" className="logo">Github Jobs</Logo>
        <div className="nav-items">
          {
            width < 960 && !menu ?
              <div className="nav-toggler">
                <button onClick={handleToggleMenu}>
                  menu
              </button>
              </div>
              :
              <div>

              <ul>
                <li>
                  <span>Search jobs</span>
                  <form>
                    <div>
                      <label>Description</label>
                      <input onChange={onParamChange} value={params.description} name="description" type="text" />
                    </div>
             
                    <div>
                    <label>Location</label>
                    <input onChange={onParamChange} value={params.location} name="location" type="text"></input>
                    </div>           
                    <div>
                      <label>Full_Time</label>
                      <input onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" label="Only Full Time" type="checkbox" ></input>
                    </div>
                  </form>
                </li>
              </ul>
              <ul className="nav-settings">
                  {width < 960 && <li><button onChange={onParamChange} value={params.description} onClick={handleToggleMenu}>Close</button></li>}
                  <li><button onClick={handleThemeSwitch}>
                    {theme ==='dark' ? 'go light' : 'go dark'}
                    </button></li>     
                </ul>
              </div>
          }
        </div>
      </div>
    </NavbarWrapper>
  )
}

export default Navbar
