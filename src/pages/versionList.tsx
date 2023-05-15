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



type VersionListType = {
    versionNumber: string
    versionDetail: string
}
const VersionList = () => {

    const { t } = useTranslation();

    const VersionList: VersionListType[] = [
        {
            versionNumber: "V.0.1.",
            versionDetail: t('v01')
        },
        {
            versionNumber: "V.0.2.",
            versionDetail: t('v02')
        },
        {
            versionNumber: "V.0.3.",
            versionDetail: t('v03')
        },
        {
            versionNumber: "V.0.4.",
            versionDetail: t('v04')
        },
        {
            versionNumber: "V.1.1",
            versionDetail: t('v11')
        }
    ]
    return (
        <div className="App w-full h-full">
            <div className='w-full h-full' style={{ backgroundImage: 'url(/dark1.jpg)', backgroundSize: 'cover', height: '100vh', width: '100vw', overflowY: 'auto', position: 'fixed' }}>
                <div style={{ color: '#9a9898', width: '100vw', height: '40vh', paddingTop: '20vh' }}>
                    <div style={{ fontSize: '56px', width: '100vw', height: '10vh', textShadow: '10px 10px 10px black', display: 'flex', justifyContent: 'center', marginBottom: '8vh' }}>
                    {t('game version list')}
                    </div>
                </div>
                <div style={{ width: '100vw' }}>
                    {VersionList.map((items: VersionListType) =>
                        <div style={{ marginBottom: '4vh', display: 'flex', justifyContent:'center' }}>
                            <div style={{ fontSize: '20px', fontFamily: "serif", borderRadius: '8px', boxShadow: '3px 3px 10px darkred', width: '40vw' }}>
                                <div style={{ color: '#9a9898', borderColor: 'HighlightText' }}>
                                    {items.versionNumber}
                                </div>
                                <div style={{ color: '#9a9898', borderColor: 'HighlightText' }}>
                                    {items.versionDetail}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default VersionList