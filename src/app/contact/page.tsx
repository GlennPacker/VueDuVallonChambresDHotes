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
              +33 7 70 26 20 89
            </div>
          </div>
          <div className={styles.email}>
            <strong>Email:</strong>
            <div className="ps-5">
              Glenn@VueDuVallon.fr
            </div>
          </div>
          <div className={styles.social}>
            <strong>Social:</strong>
            <div className="ps-5">
              <a
                href="https://www.facebook.com/profile.php?id=61557315565267"
                target="_blank"
              >
                <img
                  height="25px"
                  src="/facebook.png"
                  alt="link to facebook"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </main >
  );
}
