import heroBackground from '@/assets/hero-background.jpg';
import logo from '@/assets/logo.svg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px'
          }}
        >
          <img 
            src={logo} 
            alt="Mullins Digital Ventures" 
            className="w-[85%] max-w-4xl filter drop-shadow-lg mix-blend-screen opacity-95 object-contain"
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              margin: 0
            }}
          />
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium text-center max-w-2xl" style={{ margin: 0, padding: 0 }}>
            Building global ventures at the intersection of AI, digital products, and media innovation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;