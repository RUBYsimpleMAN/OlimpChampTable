import logo from '../assets/imgs/logo.svg'

const LogOlimpic = (props) => {
  return(
    <div style={styleLogOlimpic}>
      <div style={styleDiv}>
        <span style={styleSpan}>
          <img src={logo} className="styleLogo" style={styleLogo} alt="logo" />
        </span>
        <span style={styleSpan}>
          <img src={logo} style={styleLogo} alt="logo" />
        </span>
        <span style={styleSpan}>
          <img src={logo} style={styleLogo} alt="logo" />
        </span>
      </div>
      <div style={styleDiv}>
      <span style={styleSpan}>
          <img src={logo} style={styleLogo} alt="logo" />
        </span>
        <span style={styleSpan}>
          <img src={logo} fill='red' className="styleLogo" style={styleLogo} alt="logo" />
        </span>
      </div>
    </div>
  )
}

const styleLogOlimpic = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '10%',
  flexDirection: 'column',
  // maxWidth: '150px',
  // minWidth: '120px',
  pointerEvents: 'none'
}

const styleDiv = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '-2%',
  pointerEvents: 'none'
}

const styleSpan = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '6vmin',
  height: '6vmin',
  margin: '2%',
  border: '3px solid',
  borderRadius: '50%',
  pointerEvents: 'none'
}

const styleLogo = {
  height: '12vmin',
  // fill: '#61dafb50',
  pointerEvents: 'none'
}

export default LogOlimpic
