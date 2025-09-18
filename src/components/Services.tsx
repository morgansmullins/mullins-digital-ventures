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
  return <section id="services" className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16 text-brand-navy">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => <Card key={index} className="card-shadow smooth-transition hover:card-shadow-hover hover:-translate-y-1 border-0 bg-gradient-to-b from-white to-brand-gray-light">
              <CardHeader>
                <CardTitle className="text-xl text-brand-navy mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-brand-slate text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Services;