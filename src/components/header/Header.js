import './Header.css'
import logo from '../../Vectorlogo.svg'

function Header({ home }) {
  return (
    <div className={home ? 'header' : 'header header--size-small'}>
      <img src={logo} className="App-logo logo" alt="logo" />
      <h1 className='titolo'>MCP</h1>
    </div>
  )
}

export default Header