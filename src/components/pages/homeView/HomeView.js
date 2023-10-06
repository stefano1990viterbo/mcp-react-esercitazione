import './HomeView.css';

import Body from '../../body/Body';
import Header from '../../header/Header';
import ButtonMcp from '../../button/ButtonMcp'

import { PAGES } from '../../../configuration/PagesConts'



function HomeView() {
  return (
    <>
      <Header home></Header>
      <Body>
        <ButtonMcp stile={"button button--fill-riempito"} testo={"CHECK-IN"} url={PAGES.qrCodeView}></ButtonMcp>
        <ButtonMcp stile={"button button--fill-nobackground"} testo={"PRENOTAZIONE"} url={'/'}></ButtonMcp>
        <ButtonMcp stile={"button button--fill-noborder"} testo={"LOGIN"} url={'/'}></ButtonMcp>
      </Body>
    </>
  )
}

export default HomeView;