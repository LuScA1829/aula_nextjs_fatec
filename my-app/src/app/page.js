import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World!</h1>
      <h2>Subtitulo</h2>
      <p>Um paragrafo de texto</p>
      <p>Outro paragrafo de texto</p>
      <br />
      <p>Mais outro paragrafo de texto</p>
      <div>
        <h2>Outro subtitulo</h2>
      </div>
      <p><Link href={'/login'}>Login</Link></p>
      <p><Link href={'/produtos'}>Produtos</Link></p>
    </main>
  );
}
