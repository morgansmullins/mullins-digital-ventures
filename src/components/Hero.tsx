import heroBackground from '@/assets/hero-background.jpg';
import logo from '@/assets/logo.svg';
const Hero = () => {
  return <section className="relative min-h-screen flex items-start justify-center hero-gradient pt-64 overflow-hidden">
      <div style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} className="absolute inset-0 opacity-20 mx-0 px-0 py-0 my-0" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-0 text-center px-0 opacity-72  my-2 mx-0">
        <img src={logo} alt="Mullins Digital Ventures" className="w-[85%] max-w-4xl object-contain filter drop-shadow-xl mix-blend-screen opacity-120" />
        <p className="text-white/80 mb-0 mt-0 font-normal text-3xl my-px mx-[3px] px-[240px] py-0">
          Transforming Digital Landscapes
        </p>
        <p className="text-xl text-white/90 leading-relaxed font-medium max-w-2xl mt-0 text-center px-px my-px mx-px py-[36px] md:text-2xl">
          Building global ventures at the intersection of AI, digital products, and media innovation
        </p>
      </div>
    </section>;
};
export default Hero;