import { HeaderStyle } from "../styles/Header";
import { Link, animateScroll as scroll } from "react-scroll";
export function Header() {
  return (
    <div>
      <HeaderStyle>
        <div>
          <header>
            <div>
              <p>We Have Ideas to growth your business

              <div className="bt">

                  
                  <Link
                  activeClass="active"
                  to="wh-100"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                >
                  <button>see now</button>
                </Link>
              </div>              </p>
              <img src="body/header.png" alt="header" />


            </div>
          </header>
        </div>
      </HeaderStyle>
    </div>
  );
}
