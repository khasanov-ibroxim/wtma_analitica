import Image from "next/image";
import con_1 from "@/assets/contact/con-1.jpg"
import con_2 from "@/assets/contact/con-2.jpg"
const offices = [
    {
        city: "London",
        email: "info@adina-design.com",
        phone: "+(123) 456 789 00",
        address: "2938 Bingamon Branch Road",
        address2: "Highland Park, IL 60035",
        image: con_1,
    },
    {
        city: "New York",
        email: "info@adina-design.com",
        phone: "+(123) 456 789 00",
        address: "2938 Bingamon Branch Road",
        address2: "Highland Park, IL 60035",
        image: con_2,
    },
];

export default function Contact_s3() {
    return (
        <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                {/* Left: Office Cards */}
                <div className="flex flex-col gap-10">
                    {offices.map((office) => (
                        <div key={office.city} className="flex flex-col sm:flex-row gap-6 items-start">
                            {/* Image */}
                            <div className="w-full sm:w-64 h-64 flex-shrink-0 overflow-hidden">
                                <Image
                                    src={office.image}
                                    alt={office.city}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col gap-3">
                                <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
                                    {office.city}
                                </h2>
                                <div className="text-sm text-gray-500 leading-relaxed">
                                    <p>{office.email}</p>
                                    <p>{office.phone}</p>
                                </div>
                                <div className="text-sm text-gray-500 leading-relaxed">
                                    <p>{office.address}</p>
                                    <p>{office.address2}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right: Contact Form */}
                <div className="flex flex-col gap-6">
                    {/* Label */}
                    <p className="text-sm text-gray-400 tracking-wide">Contact</p>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight">
                        Get a free quote.
                    </h1>

                    {/* Form Fields */}
                    <div className="flex flex-col gap-0 mt-4">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="border-b border-gray-200 py-4 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-gray-500 bg-transparent transition-colors"
                        />
                        <input
                            type="email"
                            placeholder="Your email"
                            className="border-b border-gray-200 py-4 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-gray-500 bg-transparent transition-colors"
                        />
                        <textarea
                            placeholder="Message"
                            rows={5}
                            className="border-b border-gray-200 py-4 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-gray-500 bg-transparent resize-none transition-colors"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="button"
                        className="w-full mt-4 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium tracking-wide py-4 transition-colors duration-200 cursor-pointer"
                    >
                        Send Messages
                    </button>
                </div>

            </div>
        </section>
    );
}