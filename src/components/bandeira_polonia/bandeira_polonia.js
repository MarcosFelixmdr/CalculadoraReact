import styles from './bandeira_polonia.module.css';

export default function BandeiraPolonia() {
  // Bloco lógico vazio
  function click() {
    // Ação do botão
    console.log('Botão clicadona bandeira da Polonia!');
  }

  return (
    <div>
      <div className={styles.bandeira}>
        <div className={styles.faixaBranca}></div>
        <div className={styles.faixaVermelha}></div>
      </div>

      <button onClick={click()}>Clique aqui</button>
    </div>
  );
}
