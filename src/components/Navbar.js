import React, { useState, useLayoutEffect } from 'react'
import styled from 'styled-components'


const NavbarWrapper = styled.nav`
.nav-wrapper{
  max-width:1280px;
  margin:auto;
  padding:0 1em;
  display:flex;
  align-items:center;
  justify-content:space-between;
  font-size:1.5rem;
}
  *{
    color: ${props => props.theme.p};
  }

  ul{
    display:flex;
    list-style-type:none;

    label{padding-right:10px;}

  }

  .nav-items__options{
    display:flex;
  }

  .nav-settings{
    display:block;
    text-align:center;
  }
    button{
        border: 1px solid ${props => props.theme.p};
        margin-bottom:1em;
        padding: 5px;
        border-radius:5px;
    }

  @media (min-width: 960px){
   .nav-items__options{
   flex-direction:row;
   text-align:center;
   form{
     display:flex;
     gap:1em;
   }
  }

}
`
const Logo = styled.a`
  display:hidden;
  color: ${props => props.theme.p};
  font-size:2rem;
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
      <div className="nav-wrapper">
        <Logo href="./index.html" className="logo">Github Jobs</Logo>
        <div className="nav-items">
          {
            width < 960 && !menu ?
              <div className="nav-toggler">
                <button onClick={handleToggleMenu}>
                  <svg viewBox="0 0 100 80" width="30" height="30">
                        <rect width="100" height="20"></rect>
                        <rect y="30" width="100" height="20"></rect>
                        <rect y="60" width="100" height="20"></rect>
                  </svg>
              </button>
              </div>
              :
              <div>

              <ul className='nav-items__options'>
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
                  <li><button onClick={handleThemeSwitch}>
                    {theme ==='dark' ? 'go light' : 'go dark'}
                    </button></li>     
                  {width < 960 && <li><button onChange={onParamChange} value={params.description} onClick={handleToggleMenu}><svg height="20px" viewBox="0 0 329.26933 329" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg></button></li>}
                </ul>
              </div>
          }
        </div>
      </div>
    </NavbarWrapper>
  )
}

export default Navbar
