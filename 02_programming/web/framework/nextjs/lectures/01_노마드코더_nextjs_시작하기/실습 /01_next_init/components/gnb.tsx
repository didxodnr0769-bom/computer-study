"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Gnb() {
  const pathname = usePathname();
  return (
    <div>
      <ul>
        <li>
          <Link href="/">루트 경로 화면 {pathname === "/" ? "🤏" : ""} </Link>
        </li>
        <li>
          <Link href="/main">
            홈 메인 화면 {pathname === "/main" ? "🤏" : ""}
          </Link>
        </li>
        <li>
          <Link href="/main/mode-edit">
            모드 편집 {pathname === "/main/mode-edit" ? "🤏" : ""}
          </Link>
        </li>
      </ul>
    </div>
  );
}
