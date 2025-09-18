import heroBackground from '@/assets/hero-background.jpg';
import logo from '@/assets/logo.svg';
const Hero = () => {
  return <section className="relative min-h-[70vh] flex items-center justify-center hero-gradient mx-0 px-0 py-0">
      <div style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} className="absolute inset-0 opacity-20 mx-[4px] my-[2px] px-[2px] py-[5px]" />
      <div className="relative min-h-[80vh] flex items-center justify-center hero-gradient mx-0 px-[3px] py-[2px]">
        <img src={logo} alt="Mullins Digital Ventures" className="w-[85%] max-w-4xl object-contain filter drop-shadow-xl mix-blend-screen opacity-120 pt-24" />
        <p className="text-white/80 mb-0 mt-0 font-normal text-4xl my-[3px] mx-[3px] px-[160px] py-0">
          Transforming Digital Landscapes
        </p>
        <p className="text-xl text-white/90 leading-relaxed font-medium max-w-2xl mt-0 text-center px-0 py-[43px] my-px mx-[184px] md:text-3xl">
          Building global ventures at the intersection of AI, digital products, and media innovation
        </p>
      </div>
    </section>;
};
export default Hero;