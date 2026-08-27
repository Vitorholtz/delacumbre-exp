import Footer from "@delacumbre/design-system/components/layout/Footer";
import styles from "./SiteFooter.module.css";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/delacumbre" },
  // TODO: sem links reais ainda — trocar quando existirem.
  { label: "Whatsapp", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "E-mail", href: "#" },
  { label: "Twitter", href: "#" },
];

const message =
  "Ficou com dúvida? Manda no direct do Instagram — sem formulário, sem cerimônia.";

export default function SiteFooter() {
  return (
    <>
      <div className={`${styles.slot} ${styles.slotSm}`}>
        <Footer
          profileImage="/footer/profile-photo.png"
          profileImageAlt="Foto de perfil de Marcos DeLacumbre, guia da Delacumbre EXP"
          handle="@delacumbre"
          message={message}
          socialLinks={socialLinks}
          developerName="Vitor Holtz"
          // TODO: sem link real ainda — trocar quando existir.
          developerHref="#"
          copyrightText="Delacumbre EXP @2026"
          size="sm"
        />
      </div>
      <div className={`${styles.slot} ${styles.slotMd}`}>
        <Footer
          profileImage="/footer/profile-photo.png"
          profileImageAlt="Foto de perfil de Marcos DeLacumbre, guia da Delacumbre EXP"
          handle="@delacumbre"
          message={message}
          socialLinks={socialLinks}
          developerName="Vitor Holtz"
          // TODO: sem link real ainda — trocar quando existir.
          developerHref="#"
          copyrightText="Delacumbre EXP @2026"
          size="md"
        />
      </div>
    </>
  );
}
