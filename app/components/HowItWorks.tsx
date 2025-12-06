import { Phone, ClipboardCheck, FileText, Axe, Smile } from 'lucide-react';

interface HowItWorksProps {
    dict: any;
}

export default function HowItWorks({ dict }: HowItWorksProps) {
    const steps = [
        {
            name: dict.howItWorks.steps.contact.title,
            description: dict.howItWorks.steps.contact.description,
            icon: Phone,
        },
        {
            name: dict.howItWorks.steps.check.title,
            description: dict.howItWorks.steps.check.description,
            icon: ClipboardCheck,
        },
        {
            name: dict.howItWorks.steps.quote.title,
            description: dict.howItWorks.steps.quote.description,
            icon: FileText,
        },
        {
            name: dict.howItWorks.steps.work.title,
            description: dict.howItWorks.steps.work.description,
            icon: Axe,
        },
        {
            name: dict.howItWorks.steps.support.title,
            description: dict.howItWorks.steps.support.description,
            icon: Smile,
        },
    ];

    return (
        <section id="how-it-works" className="py-24 sm:py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{dict.howItWorks.title}</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        {dict.howItWorks.subtitle}
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-5 lg:gap-x-8">
                        {steps.map((step, index) => (
                            <div key={step.name} className="relative flex flex-col items-center text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                                    <step.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                                </div>
                                <h3 className="text-lg font-semibold leading-8 text-gray-900">{step.name}</h3>
                                <p className="mt-2 text-base leading-7 text-gray-600">{step.description}</p>
                                {/* Connector Line (hidden on mobile/last item) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 -z-10" style={{ left: '50%', width: '100%' }} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
