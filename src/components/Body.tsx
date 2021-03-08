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
          <div className="textcard">
            <h1>Nature</h1>
            <br />
            <p>Lorem ipsum dolor sit amet </p>
          </div>
          <img className="priority" src="body/nature-layout.png" alt="daily" />

          <div className="textcard">
            <h1>Daily</h1>
            <br />
            <p>Lorem ipsum dolor sit amet </p>
          </div>
          <img className="priority1" src="body/daily-layout.png" alt="daily" />
        </div>

        <div className="full">
          <div className="textcard">
            <h1>Daily</h1>
            <br />
            <p>Lorem ipsum dolor sit amet </p>
          </div>
          <img src="body/togeter-layout.png" alt="daily" />
        </div>

        <div className="cont">
          <div className="textcard">
            <h1>Daily</h1>
            <br />
            <p>Lorem ipsum dolor sit amet </p>
          </div>

          <img className="priority" src="body/teste-layout.png" alt="daily" />

          <div className="textcard">
            <h1>Daily</h1>
            <br />
            <p>Lorem ipsum dolor sit amet </p>
          </div>
          <img className="priority1"src="body/pictures-layout.png"alt="daily"/>
        </div>
      </body>
    </StyledBody>
  );
}
