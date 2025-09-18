import heroBackground from '@/assets/hero-background.jpg';
import logo from '@/assets/logo.svg';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} className="absolute inset-0 opacity-20 mx-0 px-0" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center py-0 mx-[3px] my-[3px] px-[8px] rounded-full">
        <img src={logo} alt="Mullins Digital Ventures" className="w-[85%] max-w-4xl object-contain filter drop-shadow-lg mix-blend-screen opacity-95 mb-2" />
 <p className="text-white/80 mb-1 mt-0 py-0 text-3xl font-normal mx-[2px] px-[34px] my-[48px]">
  Transforming Digital Landscapes
      </p>

      <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-medium max-w-2xl mt-0 text-center mx-[3px] py-[7px] px-[46px] my-px">
  Building global ventures at the intersection of AI, digital
  products, and media innovation
      </p>
 

      </div>
    </section>;
};
export default Hero;