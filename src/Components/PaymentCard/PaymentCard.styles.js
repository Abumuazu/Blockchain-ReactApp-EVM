import styled from "styled-components"



export const Wrapper = styled.div`
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

ul li {
  list-style: none;
}

.parent {
  margin: 0 auto;
  width: 100%;
  padding: 30px 0;
  border-radius: 5px;
  box-shadow: 23px 27px 28px -20px rgba(0, 0, 0, 0.75);
  height: fit-content;
  min-height: 670px;

}

.parent .son {
  width: 100%;
  max-width: 900px;
  height: 100%;
  padding: 80px 0 55px 0;
  margin: 0 auto;
  background-image: linear-gradient(0deg, rgba(255,151,0,1) 100%, rgba(251,75,2,1) 100%);
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 1px 25px 0px rgba(50, 50, 50, 0.91);
}

.parent .son .container {
  height: 100%;
  position: relative;
  right: -30px;
  margin: 0 auto;
  max-width: 700px;
}

.parent .son .left,
.parent .son .right {
  display: inline-block;
}

.parent .son .left {
  width: 310px;
  height: 370px;
  overflow: hidden;
  position: relative;
  z-index: 333;
  border-radius: 5px;
  box-shadow: 0px 1px 22px 0px rgba(50, 50, 50, 0.65);
}

.parent .son .left .img {
  background-image: url("http://pamperyourmind.com/wp-content/uploads/2016/04/iStock_000065426843_Full.jpg");
  background-size: cover;
  width: 100%;
  height: 62%;
}

.parent .son .left .info {
  width: 100%;
  height: 38%;
  overflow: hidden;
  background-image: linear-gradient(0deg, rgba(255,151,0,1) 0%, rgba(251,75,2,1) 100%);
}

.parent .son .left .info ul:first-of-type {
  float: left;
  width: 50%;
  height: 100%;
  color: white;
  font-size: 8px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-top: 40px;
  padding-left: 30px;
}

.parent .son .left .info ul:first-of-type li {
  margin-bottom: 4px;
}

.parent .son .left .info ul:first-of-type li:last-of-type {
  font-size: 28px;
  margin-top: 20px;
}

.parent .son .left .info ul:last-of-type {
  float: right;
  width: 50%;
  height: 100%;
  color: white;
  font-size: 8px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-top: 35px;
  padding-right: 30px;
  text-align: right;
}

.left .info ul:last-of-type li:nth-of-type(2) {
  margin-bottom: 20px;
}

.left .info ul:last-of-type li:nth-of-type(2),
.left .info ul:last-of-type li:last-of-type {
  font-size: 12px;
}

.left .info ul:last-of-type li:nth-of-type(3),
.left .info ul:last-of-type li:first-of-type {
  color: #95a5a6;
  margin-bottom: 4px;
}

.left .circle1 {
  width: 81px;
  height: 81px;
  position: absolute;
  top: 147px;
  right: 50%;
  transform: translate(50%, 50%);
  background-color: #55338d;
  border-radius: 50%;
  font-size: 12px;
  margin: 0 auto;
  text-align: center;
  padding-top: 5px;
  box-shadow: 0px 1px 25px 0px rgba(50, 50, 50, 0.51);
}

.left .circle1 .circle {
  border-right: 3px solid #0081cf;
  border-top: 3px solid #0081cf;
  border-left: 3px solid #fff;
  border-bottom: 3px solid #fff;
  width: 69px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto;
  padding-top: 16px;
  position: relative;
  top: 0;
  right: 0px;
}

.left .circle1 .circle span {
  display: block;
  font-size: 7.5px;
  text-transform: uppercase;
  font-weight: bold;
}

.left .circle1 .circle span:first-child {
  color: #95a5a6;
}

.left .circle1 .circle span:last-child {
  color: #fff;
  font-size: 14.5px;
  padding: 3px;
}


.parent .son .right {
  height: auto;
  width: 380px;
  position: relative;
  top: -12px;
  right: 55px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 1px 25px 0px rgba(50, 50, 50, 0.91);
}
@media screen and (max-width:600px) {

.parent .son .right{
    right: 12px;
}
}

.parent .son .right .up {
  width: 100%;
  height: 43%;
  background-image: linear-gradient(
    to right top,
    #ecf0f1,
    #e7f5f4,
    #e6faf1,
    #eefde8,
    #fefedf
  );
  padding: 40px 40px 0 80px;
  border-radius: 5px 5px 0 0;
}

.son .right .up ul:first-of-type li:first-of-type {
  margin-bottom: 15px;
  color: #2a3350;
  font-weight: bold;
  font-size: 23px;
}

.son .right .up ul:first-of-type li:not(:first-of-type) {
  color: #34495e;
  font-size: 12.5px;
  letter-spacing: 0.5px;
  line-height: 20px;
}

.son .right .up ul:last-of-type li {
  display: inline-block;
  color: #bdc3c7;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: bold;
  padding: 8px 25px;
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid transparent;
}

.son .right .up ul:last-of-type li + li {
  margin-left: 44px;
  margin-top: 29px;
}

.son .right .up ul:last-of-type li:hover,
.son .right .up ul:last-of-type .activecr {
  border-bottom: 2px solid #2c73d2;
  color: #2c3e50;
}

.son .right .down {
  width: 100%;
  height: calc(100% - 43%);
  padding: 30px 0 40px 80px;
}

.son .right .down .payment form label {
  display: block;
  color: #bdc3c7;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 7px;
}

.son .right .down .payment form input {
  border: 1px solid transparent;
  box-shadow: 0px 0px 17px 0px rgba(50, 50, 50, 0.12);
  padding: 7px;
  margin-bottom: 20px;
  color: #34495e;
  border: 1px solid #ecf0f1;
  border-radius: 3px;
}

.son .right .down .payment form label {
  transition: all 0.3s ease-in-out;
}

.son .right .down .payment form .form-group:hover label{
  color: #2c3e50;
}

.son .right .down .payment form .form-control1 {
  width: 257px;
}

.son .right .down .payment form select {
  border: none;
  border-bottom: 1.5px solid #bdc3c7;
  color: #bdc3c7;
  margin-right: 20px;
  font-size: 11px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 22px 0px rgba(50, 50, 50, 0.09);
  padding: 5px;
}

.son .right .down .payment form .lab {
  width: 190px;
}

.son .right .down .payment form .lab,
.son .right .down .payment form .lab select {
  transition: all 0.3s ease-in-out;
}

.son .right .down .payment form .lab:hover label {
  color: #2c3e50;
}

.son .right .down .payment form .lab:hover select,
.son .right .down .payment form .CVV input:hover {
  color: #2c3e50;
  border-bottom: 1.5px solid #2c3e50;
}

.son .right .down .payment form .form-group1 {
  position: relative;
}

.son .right .down .payment form .CVV {
  width: 75px;
  position: absolute;
  top: 0px;
  right: 40px;
  height: 100%;
}

.son .right .down .payment form .CVV input {
  width: 70px;
  padding: 4px;
  margin-bottom: 0;
  transition: all 0.3s ease-in-out;
  border-bottom: 1.5px solid transparent;
}

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
export const SendButton = styled.button`
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