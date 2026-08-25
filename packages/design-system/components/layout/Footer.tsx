"use client";

import FloatingButton from "../primitives/FloatingButton";
import Hyperlink from "../primitives/Hyperlink";
import styles from "./Footer.module.css";

type FooterSize = "md" | "sm";

type FooterSocialLink = {
  label: string;
  href: string;
};

type FooterProps = {
  profileImage: string;
  profileImageAlt: string;
  handle?: string;
  message: string;
  socialLinks: FooterSocialLink[];
  developerName?: string;
  developerHref: string;
  copyrightText?: string;
  size?: FooterSize;
  className?: string;
};

const footerArtworkDesktop = "/footer/footer-artwork-desktop.png";
const footerArtworkMobile = "/footer/footer-artwork-mobile.png";

const messageTextClassBySize: Record<FooterSize, string> = {
  md: "text-heading-lg",
  sm: "text-heading-md",
};

const copyrightTextClassBySize: Record<FooterSize, string> = {
  md: "text-body-md",
  sm: "text-body-sm",
};

export default function Footer({
  profileImage,
  profileImageAlt,
  handle = "@mdelacumbre",
  message,
  socialLinks,
  developerName = "Vitor Holtz",
  developerHref,
  copyrightText = "Delacumbre EXP @2026",
  size = "md",
  className,
}: FooterProps) {
  const isSm = size === "sm";
  const classes = [styles.footer, styles[size], className]
    .filter(Boolean)
    .join(" ");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTopButton = (
    <FloatingButton
      icon="arrow_upward"
      label="Voltar ao topo"
      onClick={scrollToTop}
      className={styles.scrollTopButton}
    />
  );

  return (
    <footer className={classes}>
      <div className={styles.content}>
        <div className={styles.profile}>
          <div className={styles.pictureBlock}>
            <div className={styles.pictureWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profileImage}
                alt={profileImageAlt}
                className={styles.picture}
              />
            </div>
            <p className={`${styles.handle} text-body-lg`}>{handle}</p>
          </div>
          <p className={`${styles.message} ${messageTextClassBySize[size]}`}>
            {message}
          </p>
        </div>

        <div className={styles.social}>
          {!isSm && scrollTopButton}
          <nav className={styles.links} aria-label="Redes sociais">
            {socialLinks.map((link) => (
              <Hyperlink
                key={link.label}
                href={link.href}
                showIcon={false}
                size="md"
                className={styles.socialLink}
              >
                {link.label}
              </Hyperlink>
            ))}
          </nav>
          {isSm && scrollTopButton}
        </div>
      </div>

      <div className={styles.bottom}>
        {!isSm && (
          <div className={styles.artworkDesktop}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={footerArtworkDesktop}
              alt=""
              className={styles.artworkImage}
            />
          </div>
        )}

        <div className={styles.copyrights}>
          <p className={copyrightTextClassBySize[size]}>
            {"Desenvolvido por "}
            <Hyperlink
              href={developerHref}
              showIcon={false}
              underline="always"
              size="md"
              className={styles.developerLink}
            >
              {developerName}
            </Hyperlink>
          </p>
          <p className={copyrightTextClassBySize[size]}>{copyrightText}</p>
        </div>

        {isSm && (
          <div className={styles.artworkMobile}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={footerArtworkMobile}
              alt=""
              className={styles.artworkImage}
            />
          </div>
        )}
      </div>
    </footer>
  );
}
