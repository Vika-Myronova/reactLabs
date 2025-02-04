import React from "react";
import Link from "next/link";
import { ThemeProvider } from "@/context/ThemeContext";
import { FontSizeProvider } from "@/context/FontSizeProvider";
import { ContrastProvider } from "@/context/ContrastProvider";
import ContrastControls from "@/components/ContrastControls";
import FontSizeControls from "@/components/FontSizeControls";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <FontSizeProvider>
        <ContrastProvider>
          <div className={styles.layout}>
            <header className={styles.header}>
              <nav className="navigation">
                <Link href="/">
                  <button>Головна</button>
                </Link>
                <Link href="/country/add-country">
                  <button>Додати країну</button>
                </Link>
              </nav>
              <FontSizeControls />
              <ContrastControls />
            </header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
              © 2025 Cultural Heritage App
            </footer>
          </div>
        </ContrastProvider>
      </FontSizeProvider>
    </ThemeProvider>
  );
};

export default Layout;
