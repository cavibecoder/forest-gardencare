'use client';

import { useState } from 'react';

interface ContactProps {
    dict: any;
}

export default function Contact({ dict }: ContactProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        serviceType: 'garden',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = `New Inquiry from ${formData.name}: ${formData.serviceType}`;
        const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
Service Type: ${formData.serviceType}

Message:
${formData.message}`;

        const mailtoLink = `mailto:sugaharataisuke0518@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
        alert(dict.contact.form.success);
    };

    return (
        <section id="contact" className="py-24 sm:py-32 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{dict.contact.title}</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        {dict.contact.subtitle}
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                                {dict.contact.form.name}
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                {dict.contact.form.email}
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                                {dict.contact.form.phone}
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    autoComplete="tel"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="address" className="block text-sm font-semibold leading-6 text-gray-900">
                                {dict.contact.form.address}
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    required
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="serviceType" className="block text-sm font-semibold leading-6 text-gray-900">
                                {dict.contact.form.serviceType}
                            </label>
                            <div className="mt-2.5">
                                <select
                                    id="serviceType"
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                >
                                    <option value="garden">{dict.contact.form.serviceOptions.garden}</option>
                                    <option value="mountain">{dict.contact.form.serviceOptions.mountain}</option>
                                    <option value="dangerous">{dict.contact.form.serviceOptions.dangerous}</option>
                                    <option value="care">{dict.contact.form.serviceOptions.care}</option>
                                    <option value="other">{dict.contact.form.serviceOptions.other}</option>
                                </select>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                {dict.contact.form.message}
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                        >
                            {dict.contact.form.submit}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
