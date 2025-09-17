import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Mullins Digital Ventures
        </h1>
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
          Building global ventures at the intersection of AI, digital products, and media innovation
        </p>
      </div>
    </section>
  );
};

export default Hero;