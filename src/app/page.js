import Calculadora from "./calculadora/page";
import styles from "./page.module.css";
import BandeiraPolonia from "@/components/bandeira_polonia/bandeira_polonia";

export default function Home() {


  return (
    <div className={styles.page}>
      
      <Calculadora/>

    </div>
  );
}
