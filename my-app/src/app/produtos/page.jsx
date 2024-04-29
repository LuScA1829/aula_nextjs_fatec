import Link from 'next/link';
import styles from './page.module.css';

export default function Produtos() {
    return(
        <div className={styles.conteiner}>
            <h1>Lista de Produtos</h1>
            <div>
                Produto: Processador I3
                Modelo: 15001
                Marca: Intel
                Preço: 3000,00
            </div>
            <div>
                Produto: Processador I3
                Modelo: 14001
                Marca: Intel
                Preço: 2500,00
            </div>
            <br />
            <p><Link href={'/'}>Voltar</Link></p>
        </div>
    )
}