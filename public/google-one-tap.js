// google-one-tap.js
window.googleOneTapLoaded = false;

function loadGoogleOneTap() {
  if (!window.googleOneTapLoaded) {
    window.googleOneTapLoaded = true;
    const oneTapScript = document.createElement('script');
    oneTapScript.src = 'https://accounts.google.com/gsi/client';
    oneTapScript.async = true;
    oneTapScript.defer = true;

    oneTapScript.onload = () => {
      const oneTap = new window.google.accounts.id.prompt({
        // ... One Tap configuration options ...
        context: 'signin',
        promptParentId: 'one-tap-container',
      });
      oneTap.present();
    };

    document.head.appendChild(oneTapScript);
  }
}

loadGoogleOneTap();