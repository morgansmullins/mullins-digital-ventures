import heroBackground from '@/assets/hero-background.jpg';
import logo from '@/assets/logo.svg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 text-center px-3 sm:px-4 py-12 sm:py-16 md:py-24">
        <img 
          src={logo} 
          alt="Mullins Digital Ventures" 
          className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl object-contain filter drop-shadow-lg mix-blend-screen" 
        />
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white/80 font-semibold leading-tight">
          Transforming Digital Landscapes
        </h1>
        <p className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl text-white/90 leading-relaxed font-medium max-w-sm sm:max-w-md md:max-w-2xl px-2 sm:px-4">
          Building global ventures at the intersection of AI, digital products, and media innovation
        </p>
      </div>
    </section>
  );
};

export default Hero;