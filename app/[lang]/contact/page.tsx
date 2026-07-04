import React from 'react';
import Pagehero from "@/components/UI/Pagehero";
import bg from "@/assets/ui/breadcrumb.png";
import Contact_s3 from "@/components/contact/contact_s3";

const Page = () => {
    return (
        <div>
            <Pagehero
                title="Контакты"
                watermarkText=""
                backgroundImage={bg}
                breadcrumbs={[{label: "Главная", href: "/"}, {label: "Контакты"}]}
            />
            <div className="">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d187.27343022292354!2d69.21377251390744!3d41.32246083785528!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1783160525636!5m2!1sru!2s"
                    width="100%" height="550"   loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
            <Contact_s3/>
        </div>
    );
};

export default Page;