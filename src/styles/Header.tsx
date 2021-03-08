import styled from "styled-components";

export const HeaderStyle = styled.header`
h1{
  font-family: 'Poppins', sans-serif;
}
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }


img {
    display: flex;
    flex: 1;
    max-height: 95vh;
    max-width: 100%;
  }
p{
  position: absolute;
  font-size: 50px;
  color: white;
  max-width: 600px;
  text-align: center;
  font-family: 'Poppins-Bold', sans-serif;
  font-weight: bold;  }

button{
  position: absolute;
  font-size: 30px;
  cursor: pointer;
  margin-top: 15%;
  background-color: white;
  font-family:'Poppins', sans-serif;
  font-style: thin;
  font-weight: bold; 
  width:300px;
  color: #4d4d4d;


  
}

`;
