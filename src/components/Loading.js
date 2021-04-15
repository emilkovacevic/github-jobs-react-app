import React from 'react'
import styled, {keyframes} from 'styled-components'

const frames = keyframes`
  0%{
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
  }

  25%{
    -webkit-transform: translateY(-20px);
    -ms-transform: translateY(-20px);
    -o-transform: translateY(-20px);
    transform: translateY(-20px);
  }
`

const Animation = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
  margin:auto;
  text-align:center;
span{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${props => props.theme.nav.color};
  margin: 35px 5px;
}

span:nth-child(1){
  animation: ${frames} 1s ease-in-out infinite;
}

span:nth-child(2){
  animation:  ${frames} 1s ease-in-out 0.33s infinite;
}

span:nth-child(3){
  animation:  ${frames} 1s ease-in-out 0.66s infinite;
}
`
function Loading() {
    return (
        <div style={{maxHeight:"fit-content", maxWidth:"fit-content", margin:"auto"}}>
            <p style={{textAlign:"center"}}>Loading</p>
            <Animation className="loader" >
                <span></span>
                <span></span>
                <span></span>
            </Animation>
        </div>
    )
}

export default Loading
