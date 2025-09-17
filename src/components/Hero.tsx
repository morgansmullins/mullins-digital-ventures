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
        <img 
          src={logo} 
          alt="Mullins Digital Ventures" 
          className="w-[300px] h-[150px] mb-12 mx-auto drop-shadow-2xl filter brightness-110 object-contain"
        />
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
          Building global ventures at the intersection of AI, digital products, and media innovation
        </p>
      </div>
    </section>
  );
};

export default Hero;