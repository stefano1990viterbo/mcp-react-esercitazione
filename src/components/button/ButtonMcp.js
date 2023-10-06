import './ButtonMcp.css'
import { useNavigate } from 'react-router-dom'

function ButtonMcp({ url, testo, stile }) {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(url)} className={stile}>{testo}</button>
  )
}

export default ButtonMcp
