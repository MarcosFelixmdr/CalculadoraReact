'use client';
import { useState } from 'react';
export default function Calculadora () {

    // let resultado = '1000';
    const [resultado, setResultado] = useState(1000);

    function handleClick () {
        // resultado++;
        setResultado(resultado + 1);
        console.log(resultado);
    }

    return (
        <div className='calculadora'>
            <div className='visor'>
                <p className='numero'>{resultado}</p>
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