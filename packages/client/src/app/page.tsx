import styles from "./page.module.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Records } from "@/components/records/records";

export default function Home() {
  return (
    <main className={styles.main}>
      <Analytics />
      <SpeedInsights />
      <Records/>
    </main>
  );
}
