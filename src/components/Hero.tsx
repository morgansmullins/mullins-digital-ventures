import heroBackground from '@/assets/hero-background.jpg';
import logo from '@/assets/logo.svg';
const Hero = () => {
  return <section className="-bottom-11 -bottom-1/4 flex-nowrap flex-1 justify-center items-center flex-nowrap px-80 mx-0 py-[50px] my-[39px]">
      <div style={{
      backgroundImage: `url(${heroBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} className="-bottom-1/2 -inset-y-0 divide-opacity-20 " />
      <div className="relative z-10 flex flex-col items-center justify-center gap-1 text-center mx-0 my-0 px-0 py-0">
        <img src={logo} alt="Mullins Digital Ventures" className="w-[85%] max-w-4xl object-contain filter drop-shadow-lg mix-blend-screen opacity-95" />
        <p className="text-white/80 mb-1 mt-0 text-5xl font-normal text-center mx-[3px] my-px px-[64px] py-0">
          Transforming Digital Landscapes
        </p>
        <p className="text-xl text-white/90 leading-relaxed font-medium max-w-2xl mt-0 text-center px-0 mx-0 py-[21px] md:text-2xl">
          Building global ventures at the intersection of AI, digital products, and media innovation
        </p>
      </div>
    </section>;
};
export default Hero;