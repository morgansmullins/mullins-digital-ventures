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
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex flex-col items-center">
          <img 
            src={logo} 
            alt="Mullins Digital Ventures" 
            className="w-[85%] filter drop-shadow-lg mix-blend-screen opacity-95 object-contain"
            style={{
              background: 'transparent',
              border: 'none',
              padding: 0,
              margin: 0,
              marginBottom: '15px'
            }}
          />
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium text-center" style={{ width: '42.5%' }}>
            Building global ventures at the intersection of AI, digital products, and media innovation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;