export default function Home() {
  return (
    <div style={{fontFamily: 'Georgia, serif', background: '#0c0b09', color: '#efe7d6', minHeight: '100vh', padding: '40px'}}>
      
      <h1 style={{fontSize: '48px', letterSpacing: '4px'}}>WHITEWASHED</h1>

      <p style={{fontSize: '18px', maxWidth: '700px', lineHeight: '1.6'}}>
        A poisoning, a cover-up, and a university built on reputation—Whitewashed uncovers the story history tried to bury.
      </p>

      <h2 style={{marginTop: '40px'}}>About</h2>

      <p style={{maxWidth: '700px', lineHeight: '1.6'}}>
        Whitewashed investigates the 1905 death of Jane Stanford, who insisted she had been poisoned—an account initially confirmed before being recast as natural causes. The film examines how power reshapes truth.
      </p>

      <h2 style={{marginTop: '40px'}}>Film</h2>

      <iframe
        src="https://player.vimeo.com/video/1129259990?h=284ad14b62"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      ></iframe>

      <h2 style={{marginTop: '40px'}}>Stills</h2>

      <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
        <img src="/image1.jpg" width="300" />
        <img src="/image2.jpg" width="300" />
        <img src="/image3.jpg" width="300" />
        <img src="/image4.jpg" width="300" />
        <img src="/image5.jpg" width="300" />
      </div>

      <h2 style={{marginTop: '40px'}}>Contact</h2>
      <p>your@email.com</p>

    </div>
  );
}
