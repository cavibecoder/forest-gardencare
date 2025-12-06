import Link from 'next/link';

interface FooterProps {
    dict: any;
}

export default function Footer({ dict }: FooterProps) {
    return (
        <footer className="bg-primary text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="text-lg font-bold mb-4">{dict.footer.companyName}</p>
                <p className="text-sm opacity-90 mb-4">
                    {dict.footer.description}
                </p>
                <div className="flex justify-center gap-4 text-sm opacity-80">
                    <Link href="#services" className="hover:underline">{dict.footer.links.services}</Link>
                    <Link href="#contact" className="hover:underline">{dict.footer.links.contact}</Link>
                </div>
                <p className="text-xs mt-8 opacity-70">
                    {dict.footer.copyright.replace('{year}', new Date().getFullYear().toString())}
                </p>
            </div>
        </footer>
    );
}
