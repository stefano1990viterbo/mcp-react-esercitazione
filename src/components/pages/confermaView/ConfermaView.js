import Body from '../../body/Body';
import ButtonMcp from '../../button/ButtonMcp';
import Header from '../../header/Header';
import './ConfermaView.css'

function Conferma() {
  return (
    <>
      <Header></Header>
      <Body claim="Confermi il Check-in?">
        <ButtonMcp stile={"button button--fill-riempito"} testo={"CONFERMA"} url={'/'}></ButtonMcp>
        <ButtonMcp stile={"button button--fill-nobackground"} testo={"ANNULLA"} url={'/'}></ButtonMcp>
      </Body>
    </>
  )
}

export default Conferma