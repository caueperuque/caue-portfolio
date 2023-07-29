import React from 'react';
import CookieConsent from 'react-cookie-consent';

const COOKIE_STYLE = {
  background: '#000',
  textAlign: 'left',
  fontSize: '16px',
  padding: '20px',
};

function CookieConsentComponent() {
  return (
    <CookieConsent
      cookieName="fSCookie"
      style={ COOKIE_STYLE }
      buttonText="Aceitar"
      expires={ 30 }
      buttonClasses="btn"
    >
      Este site utiliza cookies para seu adequado funcionamento,
      análises, personalização e publicidade.
      Ao continuar navegando neste site você declara estar ciente destas condições.
    </CookieConsent>
  );
}

export default CookieConsentComponent;
