import heroBackground from '@/assets/hero-background.jpg';
import logo from '@/assets/logo.svg';
const Hero = () => {
  return <section className="relative min-h-[45vh] md:min-h-[50vh] flex items-start justify-center hero-gradient pt-40 md:pt-48\n">
      <div style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} className="absolute inset-0 opacity-20 mx-0 px-0 py-0 my-0" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-0 text-center opacity-72 mx-[11px] px-[2px] py-[15px] my-0">
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