import './QrCodeView.css';
import Body from '../../body/Body';
import Header from '../../header/Header';
import ButtonMcp from '../../button/ButtonMcp'
import { PAGES } from '../../../configuration/PagesConts'

import qrcode from '../../../qrcode.gif';

function QrCodeView() {
  return (
    <>
      <Header></Header>
      <Body claim="Inquadra il QR code">
        <img src={qrcode} className="qrcode" alt="logo" />
        <ButtonMcp stile={"button button--fill-riempito"} testo={"CONFERMA"} url={PAGES.confermaView}></ButtonMcp>
        <ButtonMcp stile={"button button--fill-nobackground"} testo={"INDIETRO"} url={PAGES.homeView}></ButtonMcp>
      </Body>
    </>
  );
}

export default QrCodeView;