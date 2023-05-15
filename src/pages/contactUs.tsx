import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import { Button } from 'react-bootstrap';
import { useRef } from 'react';import { useTranslation, initReactI18next } from 'react-i18next';
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


const ContactUs = () => {
    const { t } = useTranslation();
    const myRef= useRef<any>()
    const success = t('success')
    const errorT = t('error')

    const SERVICE_ID = "service_e5rqdvq";
    const TEMPLATE_ID = "template_8f578mt";
    const USER_ID = "hOgLIfLLziNSCgjv-";

    const handleOnSubmit = (e: any) => {
        e.preventDefault();
  
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: success
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error',
                    title: errorT,
                    text: error.text,
                })
            });
        e.target.reset()
    };
    return (
        <>
            <div className="App w-full h-full">
                <div className='w-full h-full'
                    style={{ backgroundImage: 'url(/dark1.jpg)', backgroundSize: 'cover', height: '100vh', width: '100vw', overflowY: 'auto', position: 'fixed' }}>
                    <div style={{ color: '#9a9898', width: '100vw', height: '100vh', paddingTop: '20vh' }}>
                        <div style={{ fontSize: '56px', width: '100vw', height: '10vh', textShadow: '10px 10px 10px black', display: 'flex', justifyContent: 'center', marginBottom: '8vh' }}>
                            Gemini Project
                        </div>
                        <div style={{ marginBottom: '4vh' }}>
                        {t('contact us detail')}
                        </div>
                        <div style={{ border: '1px', borderColor: '' }}>
                            <Form ref={myRef.current} style={{ justifyContent: 'start' }} onSubmit={handleOnSubmit}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ width: '80vw', fontSize: '20px', marginRight: '4vw' }}>{t('email')}</Form.Label>
                                    <Form.Control required style={{ width: '20vw', backgroundColor: 'black', paddingLeft: '1vw' }}
                                        type="email" placeholder="name@example.com" name='user_email'
                                         />
                                </Form.Group>
                                <Form.Group style={{ marginTop: '2vh' }} controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ width: '90vw', fontSize: '20px', marginRight: '7.5vw' }}>{t('name')}</Form.Label>
                                    <Form.Control required style={{ width: '20vw', backgroundColor: 'black', paddingLeft: '1vw' }}
                                        type="text" placeholder="Adınız" name="user_name" />
                                </Form.Group>
                                <Form.Group style={{ marginTop: '2vh' }} controlId="exampleForm.ControlTextarea1">
                                    <Form.Label style={{ fontSize: '20px', width: '80vw', marginRight: '6vw', justifyItems: 'flex-start' }}>{t('message')}</Form.Label>
                                    <Form.Control required style={{ width: '20vw', backgroundColor: 'black', height:'10vh', paddingLeft:'1vw' }}
                                     type="text"  name="message" />
                                </Form.Group>
                                <Button type='submit'
                                    className='btn btn-secondary'
                                    style={{ color: '#9a9898', borderColor: 'HighlightText', backgroundColor: 'black', borderRadius: '6px', marginLeft: '22vw', marginTop:'4vh' }}
                                    
                                >
                                    <div style={{ fontSize: '20px', fontFamily: "serif", borderRadius: '8px', boxShadow: '3px 3px 10px black', textShadow: '3px 3px 10px darkred', width: '8vw' }}>
                                    {t('send')}
                                    </div>
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactUs;