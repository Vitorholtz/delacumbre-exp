import Footer from "@/components/Footer";
import styles from "./page.module.css";

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Whatsapp", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "E-mail", href: "#" },
  { label: "Twitter", href: "#" },
];

const message =
  "Fala com a gente! Manda um zap, um sinal de fumaça, qualquer coisa. Sem cerimônia.";

export default function FooterPage() {
  return (
    <main className={styles.page}>
      <div className={styles.textWrap}>
        <header className={styles.pageHeader}>
          <h1 className="text-heading-xl">Footer — Delacumbre EXP</h1>
          <p className="text-body-sm">
            Rodapé do site com perfil, redes sociais e arte de fundo, nos
            tamanhos MD (desktop) e SM (mobile) do Figma. O componente ocupa
            100% da largura do contêiner — precisa de espaço suficiente no
            tamanho MD para a linha de links sociais não quebrar.
          </p>
        </header>
      </div>

      <section className={styles.section}>
        <div className={styles.textWrap}>
          <h2 className="text-heading-md">MD</h2>
        </div>
        <div className={styles.full}>
          <Footer
            profileImage="/footer/profile-photo.png"
            profileImageAlt="Foto de perfil do guia Delacumbre EXP"
            message={message}
            socialLinks={socialLinks}
            developerHref="#"
            size="md"
          />
        </div>
      </section>

      <section className={`${styles.section} ${styles.lastSection}`}>
        <div className={styles.textWrap}>
          <h2 className="text-heading-md">SM</h2>
        </div>
        <div className={styles.textWrap}>
          <div className={styles.mobileFrame}>
            <Footer
              profileImage="/footer/profile-photo.png"
              profileImageAlt="Foto de perfil do guia Delacumbre EXP"
              message={message}
              socialLinks={socialLinks}
              developerHref="#"
              size="sm"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
