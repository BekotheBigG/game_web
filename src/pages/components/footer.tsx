import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';

import translationEN from '../../locales/en/translation.json';
import translationTR from '../../locales/tr/translation.json';

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
const baskent = process.env.PUBLIC_URL + 'baskent.jpeg'

const Footer = () => {
    const { t } = useTranslation();

    return (
        <>
            <div>
                <footer>
                    <div className='flex' style={{ width: '97vw', display: "flex", flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingTop: '4vh' }}>
                        <div className='flex' style={{ width: '7vw', display: "flex", flexDirection: 'column-reverse', alignItems: 'start' }}>
                            <Button type='button'
                                className='btn btn-secondary'
                                style={{ color: '#9a9898', borderColor: 'HighlightText' }}>
                                <div style={{ fontSize: '12px', fontFamily: "serif", borderRadius: '8px', width: '10vw' }}>
                                {t('contact us')}
                                </div>
                            </Button>
                            <Button type='button'
                                className='btn btn-secondary'
                                style={{ color: '#9a9898', borderColor: 'HighlightText' }}>
                                <div style={{ fontSize: '12px', fontFamily: "serif", borderRadius: '8px', width: '10vw' }}>
                                    <Link to='/about_us'>{t('about us')}</Link>
                                </div>
                            </Button>
                        </div>
                        <div style={{width:'10vw'}} >
                            <Button type='button'
                                className='btn btn-secondary'
                                style={{ color: '#9a9898', borderColor: 'HighlightText' }}>
                                <div style={{ fontSize: '12px', fontFamily: "serif", width: '10vw' }}>
                                    <Link to='/version_list'>{t('game version list')}</Link>
                                </div>
                            </Button>
                        </div>
                        <div style={{ width: '80vw', display: "flex", flexDirection: 'row', justifyContent: 'center' }}>
                            <Link to={'https://www.instagram.com/geminiproject_23'} target="_blank"><img src={instagram} alt="instagram" /> </Link>
                            <Link to={'https://twitter.com/GeminiProject23'} target="_blank"><img src={twitter} alt="" /></Link>
                        </div>
                        <div>
                            <Link to='https://bil.baskent.edu.tr/kw/index.php' target="_blank">
                                <div style={{ fontSize: '14px', fontFamily: "serif", color: '#9a9898', width: '15vw', display: 'flex', justifyContent: 'end' }}>
                                    <img style={{ width: '2vw' }} src={baskent} alt="Başken Üniversitesi" />
                                    <div style={{ flexWrap: 'wrap', width: '5vw' }}>
                                        {t('university')}
                                    </div>
                                </div>
                            </Link>
                        </div>

                    </div>
                </footer>
            </div>

        </>
    )
}
export default Footer;