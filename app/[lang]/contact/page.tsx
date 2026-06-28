import React from 'react';
import Pagehero from "@/components/UI/Pagehero";
import bg from "@/assets/ui/breadcrumb.png";
import Contact_s3 from "@/components/contact/contact_s3";

const Page = () => {
    return (
        <div>
                <Pagehero
                    title="Contact"
                    watermarkText="WTMA ANALITIC"
                    backgroundImage={bg}
                    breadcrumbs={[{label: "Home", href: "/"}, {label: "Contact"}]}
                />
      <div className="">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.83987128575!2d69.11455638899031!3d41.28273794631729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1782618784962!5m2!1sru!2s"
              width="100%" height="550"  loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"></iframe>
      </div>
            <Contact_s3/>
        </div>
    );
};

export default Page;