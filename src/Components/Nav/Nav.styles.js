import styled from "styled-components"



export const Wrapper = styled.div`
display:flex;
margin: 0 auto;
align-items: center;
justify-content: space-between;
padding:5px 70px 3px 70px;
background-color: white;
height: 10vh;
box-shadow: 0 20px 25px rgb(189 206 212 / 20%);
@media only screen and (max-width: 600px){
  padding:5px 20px 3px 20px;
}

.btn-7 {
    background: linear-gradient(0deg, rgba(255,151,0,1) 0%, rgba(251,75,2,1) 100%);
      line-height: 42px;
      padding: 0;
      border: none;
    }
    .btn-7 span {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
    }
    .btn-7:before,
    .btn-7:after {
      position: absolute;
      content: "";
      right: 0;
      bottom: 0;
      background: rgba(251,75,2,1);
      box-shadow:
       -7px -7px 20px 0px rgba(255,255,255,.9),
       -4px -4px 5px 0px rgba(255,255,255,.9),
       7px 7px 20px 0px rgba(0,0,0,.2),
       4px 4px 5px 0px rgba(0,0,0,.3);
      transition: all 0.3s ease;
    }
    .btn-7:before{
       height: 0%;
       width: 2px;
    }
    .btn-7:after {
      width: 0%;
      height: 2px;
    }
    .btn-7:hover{
      color: rgba(251,75,2,1);
      background: transparent;
    }
    .btn-7:hover:before {
      height: 100%;
    }
    .btn-7:hover:after {
      width: 100%;
    }
    .btn-7 span:before,
    .btn-7 span:after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      background: rgba(251,75,2,1);
      box-shadow:
       -7px -7px 20px 0px rgba(255,255,255,.9),
       -4px -4px 5px 0px rgba(255,255,255,.9),
       7px 7px 20px 0px rgba(0,0,0,.2),
       4px 4px 5px 0px rgba(0,0,0,.3);
      transition: all 0.3s ease;
    }
    .btn-7 span:before {
      width: 2px;
      height: 0%;
    }
    .btn-7 span:after {
      height: 2px;
      width: 0%;
    }
    .btn-7 span:hover:before {
      height: 100%;
    }
    .btn-7 span:hover:after {
      width: 100%;
    }
` 

export const Balance = styled.h3`

` 
export const ConnectButton = styled.button`
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: 0 20px 25px rgb(189 206 212 / 20%);
  outline: none;

` 

