import { useNavigate, Routes, Route } from "react-router-dom"

import { PAGES } from '../../configuration/PagesConts'

import ConfermaView from '../pages/confermaView/ConfermaView'
import HomeView from '../pages/homeView/HomeView'
import QrCodeView from '../pages/qrCodeView/QrCodeView'


function Routing() {
  return (
    <>
        <Routes>
            <Route path={"/"} element={<HomeView />} />
            <Route exact path={PAGES.confermaView} element={<ConfermaView />} />
            <Route exact path={PAGES.homeView} element={<HomeView />} />
            <Route exact path={PAGES.qrCodeView} element={<QrCodeView />} />
        </Routes>
    </>
  );
}

export default Routing;