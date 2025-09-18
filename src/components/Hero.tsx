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
      <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center px-6">
        <img 
          src={logo} 
          alt="Mullins Digital Ventures" 
          className="w-[85%] max-w-4xl object-contain filter drop-shadow-lg mix-blend-screen opacity-95"
        />
        <p className="text-white/80 text-lg font-normal mb-1 mt-0">
          Transforming Digital Landscapes
        </p>
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium max-w-2xl mt-0 text-center">
          Building global ventures at the intersection of AI, digital products, and media innovation
        </p>
      </div>
    </section>
  );
};
export default Hero;
