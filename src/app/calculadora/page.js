'use client';
import { useState } from 'react';
import styles from "./page.module.css"
export default function Calculadora () {

    // let resultado = '1000';
    const [resultado, setResultado] = useState('00');
    const [primeiroOperando, setPrimeiroOperando] = useState(null);
    const [operador, setOperador] = useState(null);
    const [esperandoSegundoOperando, setEsperandoSegundoOperando] = useState(false);


    function handleNumberClick(num) {
    if (esperandoSegundoOperando) {
      // Se estamos esperando o segundo operando, limpa o visor e coloca um novo número
      setResultado(String(num));
      setEsperandoSegundoOperando(false);
    } else {
      // Se o resultado atual for '0', substitui pelo número; caso contrário, concatena.
      setResultado(resultado === '0' ? String(num) : resultado + String(num));
    }
  }

  function handleDecimalClick() {
    // Adiciona o ponto apenas se ele ainda não existir no resultado
    if (!resultado.includes('.')) {
      setResultado(resultado + '.');
    }
  }

  function handleOperatorClick(proximoOperador) {
    const valorAtual = parseFloat(resultado); // Converte o resultado atual para número

    if (primeiroOperando === null) {
      // Se este é o primeiro número e um operador foi clicado, armazena como primeiroOperando
      setPrimeiroOperando(valorAtual);
    } else if (operador) {
      // Se já temos um primeiroOperando e um operador, é hora de calcular o resultado parcial
      const novoResultado = performCalculation[operador](primeiroOperando, valorAtual);
      setResultado(String(novoResultado)); // Atualiza o visor com o resultado parcial
      setPrimeiroOperando(novoResultado); // O resultado parcial se torna o novo primeiroOperando
    }

    // Sempre define o novo operador e indica que estamos esperando o segundo operando
    setEsperandoSegundoOperando(true);
    setOperador(proximoOperador);
  }

  const performCalculation = {
    '/': (primeiroOperando, segundoOperando) => segundoOperando !== 0 ? primeiroOperando / segundoOperando : 'Erro',
    '*': (primeiroOperando, segundoOperando) => primeiroOperando * segundoOperando,
    '-': (primeiroOperando, segundoOperando) => primeiroOperando - segundoOperando,
    '+': (primeiroOperando, segundoOperando) => primeiroOperando + segundoOperando,
  };

  function handleEqualsClick() {
    const valorAtual = parseFloat(resultado);

    if (primeiroOperando !== null && operador !== null) {
      // Se temos um primeiro operando e um operador, calculamos
      const novoResultado = performCalculation[operador](primeiroOperando, valorAtual);
      setResultado(String(novoResultado));
      setPrimeiroOperando(null); // Reseta para uma nova operação
      setOperador(null); // Reseta o operador
      setEsperandoSegundoOperando(false); // Não estamos esperando mais nada
    }
  }

  function handleClearClick() {
    setResultado('0');
    setPrimeiroOperando(null);
    setOperador(null);
    setEsperandoSegundoOperando(false);
  }

    return (
    <div className={styles.calculadora}>
      <div className={styles.visor2}>
      </div>
      <div className={styles.visor}>
        <p className={styles.numero}>{resultado}</p>
      </div>
      <div className={styles.teclado}>
        {/* Fila 1: 7, 8, 9, / */}
        <div className={styles.fila}>
          <button className={styles.botao} onClick={() => handleNumberClick(7)}>7</button>
          <button className={styles.botao} onClick={() => handleNumberClick(8)}>8</button>
          <button className={styles.botao} onClick={() => handleNumberClick(9)}>9</button>
          <button className={styles.botao} onClick={() => handleOperatorClick('/')}>/</button>
        </div>
        {/* Fila 2: 4, 5, 6, * */}
        <div className={styles.fila}>
          <button className={styles.botao} onClick={() => handleNumberClick(4)}>4</button>
          <button className={styles.botao} onClick={() => handleNumberClick(5)}>5</button>
          <button className={styles.botao} onClick={() => handleNumberClick(6)}>6</button>
          <button className={styles.botao} onClick={() => handleOperatorClick('*')}>x</button>
        </div>
        {/* Fila 3: 1, 2, 3, - */}
        <div className={styles.fila}>
          <button className={styles.botao} onClick={() => handleNumberClick(1)}>1</button>
          <button className={styles.botao} onClick={() => handleNumberClick(2)}>2</button>
          <button className={styles.botao} onClick={() => handleNumberClick(3)}>3</button>
          <button className={styles.botao} onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        {/* Fila 4: 0, ., =, + */}
        <div className={styles.fila}>
          <button className={styles.botao} onClick={() => handleNumberClick(0)}>0</button>
          <button className={styles.botao} onClick={handleDecimalClick}>.</button>
          <button className={styles.botao} onClick={handleEqualsClick}>=</button>
          <button className={styles.botao} onClick={() => handleOperatorClick('+')}>+</button>
        </div>
        {/* Adicione um botão para limpar (Clear) */}
        <div className={styles.fila}>
          <button className={styles.clear} onClick={handleClearClick}>C</button>
        </div>
      </div>
    </div>
  );
}
