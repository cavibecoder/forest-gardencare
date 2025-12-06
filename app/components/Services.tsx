import { TreeDeciduous, Mountain, AlertTriangle, CalendarDays } from 'lucide-react';

interface ServicesProps {
    dict: any;
}

export default function Services({ dict }: ServicesProps) {
    const services = [
        {
            title: dict.services.items.garden.title,
            description: dict.services.items.garden.description,
            icon: TreeDeciduous,
        },
        {
            title: dict.services.items.mountain.title,
            description: dict.services.items.mountain.description,
            icon: Mountain,
        },
        {
            title: dict.services.items.dangerous.title,
            description: dict.services.items.dangerous.description,
            icon: AlertTriangle,
        },
        {
            title: dict.services.items.care.title,
            description: dict.services.items.care.description,
            icon: CalendarDays,
        },
    ];

    return (
        <section id="services" className="py-24 sm:py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{dict.services.title}</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        {dict.services.subtitle}
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {services.map((service) => (
                        <div key={service.title} className="flex flex-col items-start">
                            <div className="rounded-lg bg-gray-50 p-2 ring-1 ring-gray-900/10">
                                <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                            </div>
                            <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">{service.title}</h3>
                            <p className="mt-2 text-base leading-7 text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
