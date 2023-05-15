import { Link } from "react-router-dom";
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';

import translationEN from '../locales/en/translation.json';
import translationTR from '../locales/tr/translation.json';

i18n
    .use(HttpBackend)
    .use(initReactI18next)
    .init({
        lng: 'tr',
        fallbackLng: 'en',
        resources: {
            en: {
                translation: translationEN
            },
            tr: {
                translation: translationTR
            }
        }
    });

const twitter = process.env.PUBLIC_URL + 'twitter.png'
const instagram = process.env.PUBLIC_URL + 'instagram.png'
const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <div className="App w-full h-full">
            <div className='w-full h-full' style={{ backgroundImage: 'url(/dark1.jpg)', backgroundSize: 'cover', height: '100vh', width: '100vw', overflowY: 'auto', position: 'fixed' }}>
                <div className='flex flex-col' style={{ textAlign: 'left', paddingTop: '20vh', paddingLeft: '20vw', color: '#B9B7B7' }}>
                    <div style={{ fontSize: '30px', textShadow: '3px 3px 7px black', fontFamily: "serif" }}>
                        {t('about us')}
                    </div>
                    <div className="flex flex-col" style={{ width: '100vw', height: '100vh', color: '#B9B7B7', fontFamily: "serif", fontSize: '20px' }}>
                        <div style={{ width: '100vw', height: '4vh' }}>
                            {t('hello')}
                        </div>
                        <div className="flex px-auto" style={{ width: '60vw', height: '10vh', paddingTop: '1vh' }}>
                            {t('aboutus1')}
                        </div>
                        <div style={{ fontSize: '24px', width: '60vw', height: '10vh', textShadow: '10px 10px 10px black', display: 'flex', justifyContent: 'center' }}>
                            Gemini Project
                        </div>
                        <div className="flex px-auto" style={{ width: '60vw', height: '10vh', paddingTop: '1vh' }}>
                            {t('aboutus2')}
                        </div>
                        <div className="flex px-auto" style={{ width: '60vw', height: '10vh', paddingTop: '1vh' }}>
                            {t('aboutus3')}
                        </div>
                        <div>
                            <div>
                                {t('social media')}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <Link to={'https://www.instagram.com/geminiproject_23'} target="_blank"><img src={instagram} alt="instagram" /> </Link>
                                <Link to={'https://twitter.com/GeminiProject23'} target="_blank"><img src={twitter} alt="" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;