import React, { useState, useLayoutEffect } from 'react'
import styled from 'styled-components'


const NavbarWrapper = styled.div`
padding:1em;
background: gray;
  nav{
    display:flex;
    justify-content:space-between;
    max-width:1280px;
    margin:auto;
  }
  button{
    margin: 0 1em;
    padding: 0 1em;
  }
  ul{
    display:flex;
    list-style-type:none;
    li{
      margin: 0 1em;
    }
    @media (max-width: 960){
      display:block;
    }
  }
`


function Navbar({ handleThemeSwitch }) {
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
    return size ;
  }

  const [width] = useWindowsSize()

  function handleToggleMenu (){
    setMenu(!menu)
  }

  return (
    <NavbarWrapper>
      <nav>
        <p>LOGO</p>
        <div>

          {
            width < 960 && !menu ? <div><button onClick={handleToggleMenu}>menu</button><button onClick={handleThemeSwitch}>theme</button></div>
              :
              <ul>
               {width < 960 &&  <li><button onClick={handleToggleMenu}>Close</button></li>}
                <li>about</li>
                <li>about</li>
                <li>about</li>
                <button onClick={handleThemeSwitch}>theme</button>
              </ul>
          }
        </div>
      </nav>
    </NavbarWrapper>
  )
}

export default Navbar
