import Link from 'next/link';
import styles from './page.module.css';

export default function Logins() {
    return(
        <div className={styles.conteiner}>
            <h1>Login</h1>
            <span>E-mail</span>
            <input />
            <span>Senha</span>
            <input />
            <br />
            <p><Link href={'/'}>Voltar</Link></p>
        </div>
    )
}