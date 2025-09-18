import heroBackground from '@/assets/hero-background.jpg';
import logo from '@/assets/logo.svg';
const Hero = () => {
  return <section className="relative z-10 flex flex-col items-center justify-center gap-2 text-center translate-y-8 md:translate-y-12\n">
      <div style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} className="absolute inset-0 opacity-20 px-[2px] my-[7px] py-[6px] mx-[16px]" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center my-px mx-[4px] py-[5px] px-[280px]">
        <img src={logo} alt="Mullins Digital Ventures" className="w-[85%] max-w-4xl object-contain filter drop-shadow-lg mix-blend-screen opacity-95" />
        <p className="text-white/80 mb-1 mt-0 mx-0 my-[11px] py-[26px] font-normal text-3xl px-[61px]">
          Transforming Digital Landscapes
        </p>
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium max-w-2xl mt-0 text-center">
          Building global ventures at the intersection of AI, digital products, and media innovation
        </p>
      </div>
    </section>;
};
export default Hero;