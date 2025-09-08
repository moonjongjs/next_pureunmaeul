'use client';
import { useRouter } from "next/navigation";

export default function useCustomHook() {
  const router = useRouter();

  const onClickLink = (e, pathName, data) => {
    e.preventDefault();

    if (!pathName || /^\//.test(pathName)===false) return;

    // 1. 외부 링크
    if (/^https?:\/\//.test(pathName)) {
      window.open(pathName);
      return;
    }

    // 2. 쿼리스트링 처리
    if (data && typeof data === "object") {
      const query = new URLSearchParams(data).toString();
      router.push(`${pathName}?${query}`);
    } else {
      router.push(pathName);
    }

    // 3. 해시 처리
    const hasHash = pathName.includes("#");
    if (!hasHash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    } else {
      const hash = pathName.split("#")[1];
      const el = document.getElementById(hash);
      el.scrollIntoView({ behavior: "smooth" });
      // setTimeout(() => {       
      //   if (el) el.scrollIntoView({ behavior: "smooth" });
      // }, 1000);
    }
  };

  return { onClickLink };
}
