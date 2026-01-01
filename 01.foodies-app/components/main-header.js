import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logoImg} alt="pizza logo" />
        NextLevel Food
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodie Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
