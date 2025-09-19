import heroBackground from '@/assets/hero-background.jpg';
import logo from '@/assets/logo.svg';
const Hero = () => {
  return <section className="relative min-h-[100dvh] flex items-center justify-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} />
      <div className="relative z-10 w-full max-w-[100vw] flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 text-center px-4 py-8 sm:py-12 md:py-16 sm:px-0 mx-[3px] lg:py-[25px] rounded-none">
        <img src={logo} alt="Mullins Digital Ventures" className="max-w-5xl max-w-xl sm:max-w-sm md:max-w-lg lg:max-w-5xl xl:-bottom-10 object-contain filter drop-shadow-lg mix-blend-screen" />
        <h1 className="w-full text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white/80 font-semibold leading-tight my-0 px-0 py-0 mx-0 xl:text-4xl">Transforming Digital Landscapes</h1>
        <p className="w-full break-words text-xs sm:text-sm md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-[90vw] sm:max-w-md md:max-w-2xl text-center font-light mx-0 px-0 my-0 py-0 xl:text-xl">Building global ventures at the intersection of  
AI, Digital products, and Media Innovation</p>
      </div>
    </section>;
};
export default Hero;