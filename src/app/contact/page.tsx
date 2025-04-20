import ContactForm from "@/components/contactForm/ContactForm";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <main>
      <div className={`${styles.pageLayout} mx-auto`}>
        <h1>
          Contact
        </h1>

        <div className={styles.layout}>
          <div className={styles.form}>
            <ContactForm />
          </div>

          <div className={styles.phone}>
            <strong>Phone:</strong>
            <div className="ps-5">
              +33 7 70 29 65 62
            </div>
          </div>
          <div className={styles.email}>
            <strong>Email:</strong>
            <div className="ps-5">
              info@VueDuVallon.fr
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}
