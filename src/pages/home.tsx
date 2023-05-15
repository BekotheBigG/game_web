import '@mui/material'
import { Link } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
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

const Home = () => {
    const { t } = useTranslation();
    return (
        <div className="App w-full h-full">
            <div className='w-full h-full' style={{ backgroundImage: 'url(/dark1.jpg)', backgroundSize: 'cover', height: '100vh', width: '100vw', overflowY: 'auto', position: 'fixed' }}>
                <div className='w-11/12 h-full flex flex-col justify-end'>
                    <div style={{ paddingTop: '5vh' }}>
                        <Header />
                    </div>
                    <div style={{ width: '100vw', height: '75vh', color: 'gray', justifyItems: 'center', paddingTop: '15vh' }}>
                        <div className='flex flex-col'>
                            <div className='flex flex-col'>
                                <div style={{ fontSize: "50px", textShadow: '2px 2px 5px #9a9898', fontFamily: "serif" }}>
                                   " {t('quotation')} "
                                </div>
                                <div style={{ fontSize: '20px', fontFamily: "serif" }}>
                                    Harry S. Truman
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingTop: '10vh' }}>
                            <div className='border-l border-r border-b border-t' style={{ borderColor: 'HighlightText' }}>
                                <button type='button' className='btn btn-secondary'
                                    style={{ border: '1px', fontSize: '70px', color: 'black', borderRadius: '60px', textShadow: '3px 3px 7px #660000', fontFamily: "serif", boxShadow: '3px 10px 40px #747272', width: '20vw' }}
                                >
                                    <Link to="/game">
                                        {t('play')}
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Footer />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;
