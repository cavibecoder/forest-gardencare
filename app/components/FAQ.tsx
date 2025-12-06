interface FAQProps {
    dict: any;
}

export default function FAQ({ dict }: FAQProps) {
    const faqs = [
        {
            question: dict.faq.items[0].question,
            answer: dict.faq.items[0].answer,
        },
        {
            question: dict.faq.items[1].question,
            answer: dict.faq.items[1].answer,
        },
        {
            question: dict.faq.items[2].question,
            answer: dict.faq.items[2].answer,
        },
    ];

    return (
        <section id="faq" className="py-24 sm:py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{dict.faq.title}</h2>
                </div>
                <div className="mx-auto mt-16 max-w-2xl">
                    <dl className="space-y-8">
                        {faqs.map((faq) => (
                            <div key={faq.question} className="border-b border-gray-200 pb-8">
                                <dt className="text-lg font-semibold leading-7 text-gray-900">{faq.question}</dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
