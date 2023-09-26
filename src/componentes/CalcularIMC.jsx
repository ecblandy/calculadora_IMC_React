import React from 'react';
import corpoHumanoImage from '../img/corpo_humano.png'
import './CalcularIMC.css';

const CalcularIMC = () => {
    function clickButtonIMC() {
        let altura = document.getElementById('altura')
        let peso = document.getElementById('peso')
        altura = Number(altura.value)
        peso = Number(peso.value)
        
        let IMC = peso / (altura * altura)
        IMC = IMC.toFixed(1)

        const elementosAtivos = document.querySelectorAll('.is--active')
        elementosAtivos.forEach(elemento => elemento.classList.remove('is--active'))

        if(IMC <= 16.9){
            const muitoAbaixoPeso = document.querySelectorAll('.muitoAbaixoPeso')
           muitoAbaixoPeso.forEach(elemento => elemento.classList.add('is--active'))
        } else if (IMC <= 18.4){
            const abaixoPeso = document.querySelectorAll('.abaixoPeso')
            abaixoPeso.forEach(elemento => elemento.classList.add('is--active'))
        } else if (IMC <= 24.9){
            const pesoNormal = document.querySelectorAll('.pesoNormal')
            pesoNormal.forEach(elemento => elemento.classList.add('is--active'))
        } else if (IMC <= 29.9){
            const acimaPeso = document.querySelectorAll('.acimaPeso')
            acimaPeso.forEach(elemento => elemento.classList.add('is--active'))
        }
        else if (IMC <= 34.9){
            const obesidadeGrau1 = document.querySelectorAll('.obesidadeGrau1')
            obesidadeGrau1.forEach(elemento => elemento.classList.add('is--active'))
        } else if (IMC <= 40){
            const obesidadeGrau2 = document.querySelectorAll('.obesidadeGrau2')
            obesidadeGrau2.forEach(elemento => elemento.classList.add('is--active'))
        } else if (IMC > 40){
            const obesidadeGrau3 = document.querySelectorAll('.obesidadeGrau3')
            obesidadeGrau3.forEach(elemento => elemento.classList.add('is--active'))
        }
        
        document.getElementById('respostaIMC').value = IMC
        document.getElementById('altura').value = '';
        document.getElementById('peso').value = '';
    }



    return (
        <div className="body">
            <div className="container">
                <div className="container__form">
                    <h1>Imc</h1>
                    <p>Índice de massa corporal</p>
                    <form>
                        <div>
                            <input maxLength="4" autoComplete="off" required type="text" id="altura" className="desabilitaPontoVirgula" placeholder="Digite sua altura(ex: 1.75)" />
                        </div>
                        <div>
                            <input maxLength="3" autoComplete="off" required type="text" id="peso" className="desabilitaPontoVirgula" placeholder="Digite seu peso (sem KG)" />
                        </div>
                        <div>
                            <button onClick={clickButtonIMC} type="button" id="buttonCalcular">Calcular IMC</button>
                        </div>
                        <div>
                            <input readOnly type="text" id="respostaIMC" placeholder="Resultado do seu IMC" />
                        </div>
                    </form>
                </div>
                <div className="container__tabela">
                    <img src={corpoHumanoImage} alt="" />
                    <table cellSpacing="0" cellPadding="0">
                        <thead>
                            <tr>
                                <th>IMC</th>
                                <th>Classificação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="muitoAbaixoPeso">Menor que 16,9</td>
                                <td className="muitoAbaixoPeso">Muito abaixo do peso</td>
                            </tr>
                            <tr>
                                <td className="abaixoPeso">17 a 18,4</td>
                                <td className="abaixoPeso">Abaixo do peso</td>
                            </tr>
                            <tr>
                                <td className="pesoNormal">18,5 a 24,9</td>
                                <td className="pesoNormal">Peso normal</td>
                            </tr>
                            <tr>
                                <td className="acimaPeso">25 a 29,9</td>
                                <td className="acimaPeso">Acima do peso</td>
                            </tr>
                            <tr>
                                <td className="obesidadeGrau1">30 a 34,9</td>
                                <td className="obesidadeGrau1">Obesidade 1º grau</td>
                            </tr>
                            <tr>
                                <td className="obesidadeGrau2">35 a 40</td>
                                <td className="obesidadeGrau2">Obesidade 2º grau</td>
                            </tr>
                            <tr>
                                <td className="obesidadeGrau3">Maior que 40</td>
                                <td className="obesidadeGrau3">Obesidade 3º grau</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CalcularIMC;
