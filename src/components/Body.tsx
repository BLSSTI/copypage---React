import { StyledBody } from "../styles/Body";
export function Body() {
  return (
    <StyledBody>
      <body>
        <div className="container">
          <h1>Categories</h1>
          <p>discover new possibilities to help you today</p>
        </div>
        <div className="cont">
          <img className="priority" src="body/nature-layout.png" alt="daily" />
          <img className="priority1" src="body/daily-layout.png" alt="daily" />
        </div>
        {/* <div className="image">   <img src="body/daily-layout.png" alt="daily" /></div> */}
        <div className="full">
          <img src="body/togeter-layout.png" alt="daily" />
        </div>

        <div className="cont">
          <img className="priority" src="body/teste-layout.png" alt="daily" />
          <img className="priority1" src="body/pictures-layout.png" alt="daily" />
        </div>

      </body>
    </StyledBody>
  );
}
