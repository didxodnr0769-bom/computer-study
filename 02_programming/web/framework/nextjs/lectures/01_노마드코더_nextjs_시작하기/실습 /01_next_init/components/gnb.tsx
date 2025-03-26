"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../app/styles/gnb.module.css";

export default function Gnb() {
  const pathname = usePathname();
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <Link href="/">루트 경로 화면 {pathname === "/" ? "🤏" : ""} </Link>
        </li>
        <li>
          <Link href="/main">
            홈 메인 화면 {pathname === "/main" ? "🤏" : ""}
          </Link>
        </li>
      </ul>
    </div>
  );
}
