import heroBackground from '@/assets/hero-background.jpg';
import logo from '@/assets/logo.svg';
const Hero = () => {
  return <section className="relative min-h-[100dvh] flex items-center justify-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} />
      <div className="relative z-10 w-full max-w-[100vw] flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-6 text-center px-4 py-8 sm:py-12 md:py-16 sm:px-0 lg:py-0">
        <img src={logo} alt="Mullins Digital Ventures" className="w-[90vw] max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-4xl object-contain filter drop-shadow-lg mix-blend-screen" />
        <h1 className="w-full text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white/80 font-semibold leading-tight px-2 xl:text-5xl">
          Transforming Digital Landscapes
        </h1>
        <p className="w-full break-words text-xs sm:text-sm md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-[90vw] sm:max-w-md md:max-w-2xl px-[28px] text-center mx-0 py-[46px] my-[18px] font-light xl:text-3xl">Building global ventures at the intersection of AI
Digital products, and Media Innovation</p>
      </div>
    </section>;
};
export default Hero;