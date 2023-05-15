import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';

import translationEN from '../../locales/en/translation.json';
import translationTR from '../../locales/tr/translation.json';
import LanguageSwitcher from "./languageSwitcher";

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

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>
        <header>
          <div className='flex' style={{ width: '97vw', display: "flex", flexDirection: 'row-reverse' }}>
            <LanguageSwitcher />
            <Button type='button'
              className='btn btn-secondary'
              style={{ color: '#9a9898', borderColor: 'HighlightText' }}>
              <div style={{ fontSize: '20px', fontFamily: "serif", borderRadius: '8px', boxShadow: '3px 3px 10px darkred', width: '10vw' }}>
                <Link to='/contact_us'>{t('contact us')}</Link>

              </div>
            </Button>
            <Button type='button'
              className='btn btn-secondary'
              style={{ color: '#9a9898', borderColor: 'HighlightText' }}>
              <div style={{ fontSize: '20px', fontFamily: "serif", borderRadius: '8px', boxShadow: '3px 3px 10px darkred', width: '10vw' }}>
                <Link to='/about_us'>{t('about us')}</Link>
              </div>
            </Button>
          </div>
        </header>
      </div>

    </>
  )
}
export default Header;