import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const services = [{
  title: "AI & Digital Products",
  description: "Conversational AI, automation tools, language translation utilities, productivity platforms"
}, {
  title: "Media & E-Commerce",
  description: "Performance content systems, affiliate funnels, branded digital media"
}, {
  title: "Affiliate Marketing & Creative",
  description: "Campaign strategy, audience growth, measurable outcomes"
}, {
  title: "Innovative App Ventures",
  description: "Early-stage apps and utilities merging creativity with technology"
}];
const Services = () => {
  return <section id="services" className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 my-px mx-0 md:px-[5px] lg:py-[83px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-brand-navy">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => <Card key={index} className="card-shadow smooth-transition hover:card-shadow-hover hover:-translate-y-1 border-0 bg-gradient-to-b from-white to-brand-gray-light touch-manipulation">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl text-brand-navy mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <CardDescription className="text-brand-slate text-sm sm:text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Services;