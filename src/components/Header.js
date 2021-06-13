// import Logo from './Logo'
import LogOlimpic from './LogOlimpic'

const Header = () => {
  return (
    <header>
        <LogOlimpic/>
      <style>{headerStyle}</style>
      <div className='centerBlock'> Table of Records </div>
      {/* <a  className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" >
        Learn React
      </a> */}
      <div className='rightBlock'> Table of Records </div>
    </header>
  )
}

export default Header

const headerStyle = `
header {
  display: flex;
  justify-content: space-around;
  align-items: end;
  height: 15vh;
  font-size: calc(10px + 2vmin);
  color: white;
}
.App-link {
  color: #61dafb;
}
.centerBlock {
  font-family: Raleway;
  font-size: 3.4vw;
  font-weight: 100;
}
.rightBlock {
  color: black;
}
.styleLogo {
  // fill: 'rgba(138,185,198,0.5)';
  fill: '#ccc';
}
@media (prefers-reduced-motion: no-preference) {
  .styleLogo {
    animation: App-logo-spin infinite 20s linear;
  }
}
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@media only screen and (max-width : 992px) {
  header {
    display: none;
    background-color: cornflowerblue;
  }
}
`