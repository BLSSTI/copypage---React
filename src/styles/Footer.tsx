import styled from "styled-components";

export const StyledFooter = styled.footer`
  footer {
      margin: 5% 0% 5% 0%; 

  }

  .bg {
    background-color: #e9e9e9;
  }

  .container {
    /* margin: 5% 2% 5% 5%; */
    margin: 0% 5% 0% 5%;

    -webkit-align-items: flex-end;
    align-items: flex-end;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .containertext {
    /* margin: 5% 2% 0% 5%; */
    align-items: flex-end;
    margin: 0% 5% -10% 5%;
    padding-top: 50px;
    font-family: 'Poppins', sans-serif;
    h2{
      font-height: 0;
      font-size: 14px;
      font-family: 'Poppins', sans-serif;
    }
  }
  /* margin: 5% 2% 5% 5%; */

  .baixo {
    width: 100%;
    background-color: #3399ff;
    display: flex;
    height: 100%;

    align-items: flex-end;
p{
  text-align: center;
    color: white;
    font-family: 'Poppins', sans-serif;
    margin: 5% 5% 5% 5%;
}
  }
  .cima {
    max-width: 100%;
    width: 100%;
    height: 100px;
    background-color: #0e50a7;
    vertical-align: top;

    h1,
    h2 {
      color: white;
      line-height: 0.1;
      text-align: justify;
      padding: 10% 0 0 5%;
      font-family: 'Poppins', sans-serif;
    }

    h2 {
      font-size: 1rem;
    }
  }

  .wh-600 {
    width: 150px;
    height: 450px;
    display: flex;
    flex-direction: column;
  }
  .wh-500 {
    width: 150px;
    height: 400px;
    display: flex;
    flex-direction: column;
  }
  .wh-400 {
    width: 150px;
    height: 350px;
    display: flex;
    flex-direction: column;
  }
  .wh-300 {
    width: 150px;
    height: 300px;
    display: flex;
    flex-direction: column;
  }
  .wh-200 {
    width: 150px;
    height: 250px;
    display: flex;
    flex-direction: column;
  }

  .wh-100 {
    width: 150px;
    height: 200px;
    display: flex;
    flex-direction: column;
  }
`;
