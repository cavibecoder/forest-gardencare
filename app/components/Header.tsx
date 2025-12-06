'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { Locale } from '../i18n-config';

interface HeaderProps {
    dict: any;
    lang: Locale;
}

export default function Header({ dict, lang }: HeaderProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { name: dict.header.nav.services, href: '#services' },
        { name: dict.header.nav.whyChooseUs, href: '#why-choose-us' },
        { name: dict.header.nav.howItWorks, href: '#how-it-works' },
        { name: dict.header.nav.serviceAreas, href: '#service-areas' },
        { name: dict.header.nav.faq, href: '#faq' },
    ];

    const switchLocale = (newLocale: Locale) => {
        const path = window.location.pathname;
        const segments = path.split('/');
        segments[1] = newLocale;
        window.location.href = segments.join('/');
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
            <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href={`/${lang}`} className="-m-1.5 p-1.5 text-xl font-bold text-primary">
                        {dict.header.title}
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 items-center">
                    <button
                        onClick={() => switchLocale(lang === 'en' ? 'ja' : 'en')}
                        className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors flex items-center gap-1"
                    >
                        <Globe className="h-4 w-4" />
                        {lang === 'en' ? '日本語' : 'English'}
                    </button>
                    <Link href="#contact" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        {dict.header.contactButton}
                    </Link>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-50" />
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href={`/${lang}`} className="-m-1.5 p-1.5 text-xl font-bold text-primary" onClick={() => setMobileMenuOpen(false)}>
                                {dict.header.title}
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6 space-y-4">
                                    <button
                                        onClick={() => {
                                            switchLocale(lang === 'en' ? 'ja' : 'en');
                                            setMobileMenuOpen(false);
                                        }}
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center gap-2 w-full text-left"
                                    >
                                        <Globe className="h-5 w-5" />
                                        {lang === 'en' ? 'Switch to Japanese' : 'Switch to English'}
                                    </button>
                                    <Link
                                        href="#contact"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {dict.header.contactButton}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
