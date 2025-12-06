import Link from 'next/link';

interface HeroProps {
    dict: any;
}

export default function Hero({ dict }: HeroProps) {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 lg:pb-40">
            {/* Background Image Placeholder - using a gradient/pattern for now */}
            <div
                className="absolute inset-0 -z-10 h-full w-full object-cover bg-gradient-to-br from-green-900 to-gray-900 opacity-80"
                aria-hidden="true"
            />
            <div className="absolute inset-0 -z-10 h-full w-full bg-[url('/hero-bg-bright.jpg')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl whitespace-pre-line">
                        {dict.hero.title}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300 whitespace-pre-line">
                        {dict.hero.subtitle}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="#contact"
                            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                        >
                            {dict.hero.ctaQuote}
                        </Link>
                        <Link href="#services" className="text-sm font-semibold leading-6 text-white hover:text-gray-200 transition-colors">
                            {dict.hero.ctaServices} <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
