'use client';
import { useState } from 'react';


export default function Calculadora() {
    const [resultado, setResultado] = useState('1000');
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');

    let num1 = '1000';

    function handleClick () {
        setResultado(resultado + '1');
        console.log(resultado);
    }

    return (

        <div className='calculadora'>
            <div className='visor'>
                <p className='resultado'>{resultado}</p>
            </div>
            <div className='teclado'>
                <div className='fila'>
                    <button className='botao' onClick={handleClick}>1</button>
                    <button className='botao'>2</button>
                    <button className='botao'>3</button>
                    <button className='botao'>/</button>
                </div>
                <div className='fila'>
                    <button className='botao'>4</button>
                    <button className='botao'>5</button>
                    <button className='botao'>6</button>
                    <button className='botao'>*</button>
                </div>
                <div className='fila'>
                    <button className='botao'>7</button>
                    <button className='botao'>8</button>
                    <button className='botao'>9</button>
                    <button className='botao'>-</button>
                </div>
                <div className='fila'>
                    <button className='botao'>0</button>
                    <button className='botao'>.</button>
                    <button className='botao'>=</button>
                    <button className='botao'>+</button>
                </div>
            </div>

        </div>

    );
}