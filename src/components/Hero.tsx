import heroBackground from '@/assets/hero-background.jpg';
import logo from '@/assets/logo.svg';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} className="absolute inset-0 opacity-20 mx-0 px-0" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center py-80 mx-[3px] my-[3px] px-[8px] rounded-none">
        <img src={logo} alt="Mullins Digital Ventures" className="w-[85%] -bottom-11 -bottom-1.5 filter drop-shadow-lg mix-blend-screen opacity-95 mb-2" />
 <p className="-bottom-0 from-teal-800 text-center font-normal mx-[4px] my-[16px] px-[51px] py-[9px] text-6xl">
  Transforming Digital Landscapes
      </p>

      <p className="text-xl text-white/90 leading-relaxed font-medium max-w-2xl mt-0 text-center mx-0 px-[54px] py-[27px] my-[30px] md:text-5xl">
  Building global ventures at the intersection of AI, digital
  products, and media innovation
      </p>
 

      </div>
    </section>;
};
export default Hero;