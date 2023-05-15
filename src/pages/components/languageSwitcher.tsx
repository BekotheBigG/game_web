import React from 'react';
import { useTranslation } from 'react-i18next';

const tr = process.env.PUBLIC_URL + 'turkey.png'
const usa = process.env.PUBLIC_URL + 'usa.png'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng : string) => {
    i18n.changeLanguage(lng); // Dil değiştirme işlemi
  };

  return (
    <div style={{display:'flex', justifyItems:'center'}}>
      <button onClick={() => changeLanguage('tr')}>
        <img style={{width:'1.5vw'}} src={tr} alt="Türçe" />
      </button>
      <button onClick={() => changeLanguage('en')}>
        <img style={{width:'1.5vw'}} src={usa} alt="English" />
      </button>
    </div>
  );
}

export default LanguageSwitcher;