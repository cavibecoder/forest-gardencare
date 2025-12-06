import Link from 'next/link';

interface ServiceAreasProps {
    dict: any;
}

export default function ServiceAreas({ dict }: ServiceAreasProps) {
    return (
        <section id="service-areas" className="py-24 sm:py-32 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{dict.serviceAreas.title}</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                    {dict.serviceAreas.description}
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="#contact"
                        className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                    >
                        {dict.serviceAreas.cta}
                    </Link>
                </div>
            </div>
        </section>
    );
}
