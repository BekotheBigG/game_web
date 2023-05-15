import { Routes } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/home';
import GamePage from '../pages/gamePage';
import AboutUs from '../pages/aboutUs';
import ContactUs from '../pages/contactUs';
import VersionList from '../pages/versionList';



export default function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/game" element={<GamePage />} />,
        <Route path="/about_us" element={<AboutUs />} />,
        <Route path="/contact_us" element={<ContactUs />} />,
        <Route path="/version_list" element={<VersionList />} />,
      </Routes>
    </BrowserRouter>

  )
}