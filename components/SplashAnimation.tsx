import Script from "next/script";

export default function SplashAnimation() {
  return (
    <>
      <div id="splash_animation" className="logo_onload" />
      <Script
        id="lottie-player"
        src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.12.2/lottie.min.js"
        strategy="afterInteractive"
      />
      <Script
        id="lottie-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              function init() {
                var container = document.getElementById('splash_animation');
                if (!container || !window.lottie) return false;
                var anim = window.lottie.loadAnimation({
                  container: container,
                  renderer: 'svg',
                  loop: false,
                  autoplay: true,
                  path: '/lottie/splash_lottie_animation.json'
                });
                anim.addEventListener('complete', function() {
                  container.classList.add('logo_faded');
                  setTimeout(function() { container.style.display = 'none'; }, 600);
                });
                return true;
              }
              if (!init()) {
                var interval = setInterval(function() {
                  if (init()) clearInterval(interval);
                }, 100);
              }
            })();
          `,
        }}
      />
    </>
  );
}
