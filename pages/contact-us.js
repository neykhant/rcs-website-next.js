import { Fragment } from "react";
import ContactForm from "../components/contact-us/ContactForm";
import ContactMap from "../components/contact-us/ContactMap";
import ContactUsHero from "../components/contact-us/ContactUsHero";

export default function ContactUsPage() {
  return (
    <Fragment>
      <ContactUsHero />
      <ContactForm />
      <ContactMap />
    </Fragment>
  );
}
