import type { ReactNode } from "react";
import DevSidebar from "./_components/DevSidebar";
import styles from "./layout.module.css";

export default function DevLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <DevSidebar />
      <div className={styles.content}>{children}</div>
    </>
  );
}
