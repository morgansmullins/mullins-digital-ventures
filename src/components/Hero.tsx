import heroBackground from '@/assets/hero-background.jpg';
import logo from '@/assets/logo.svg';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} />
      <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center mx-px px-[18px] py-[2px] text-40xl">
        <img src={logo} alt="Mullins Digital Ventures" className="w-[85%] max-w-4xl object-contain filter drop-shadow-lg mix-blend-screen opacity-100\n" />
        <p className="text-white/80 font-normal mb-1 mt-0 py-[16px] mx-0 px-[78px] text-7xl">
          Transforming Digital Landscapes
        </p>
        <p className="text-xl text-white/90 leading-relaxed max-w-2xl mt-0 text-center my-[10px] py-[85px] mx-0 px-0 font-normal md:text-5xl">
          Building global ventures at the intersection of AI, digital products, and media innovation
        </p>
      </div>
    </section>;
};
export default Hero;