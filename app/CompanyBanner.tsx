import Image from "next/image";
import styles from "./CompanyBanner.module.css";

const companies = [
  { src: "/vercel.svg", alt: "Vercel" },
  { src: "/next.svg", alt: "Next.js" },
  { src: "/globe.svg", alt: "Globe" },
  { src: "/window.svg", alt: "Window" },
  { src: "/file.svg", alt: "File" },
];

export default function CompanyBanner() {
  return (
    <div className={styles.banner}>
      <div className={styles.slider}>
        {companies.map((company, idx) => (
          <div className={styles.logo} key={idx}>
            <Image src={company.src} alt={company.alt} width={60} height={60} />
          </div>
        ))}
        {/* Dupliziere für Endlos-Effekt */}
        {companies.map((company, idx) => (
          <div className={styles.logo} key={"dup-"+idx}>
            <Image src={company.src} alt={company.alt} width={60} height={60} />
          </div>
        ))}
      </div>
    </div>
  );
}
