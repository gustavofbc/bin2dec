import { FormEvent, useState } from "react";
import { Container, Content } from "./styles";
import logo from "../../../src/assets/logo.svg";

export function FormConvert() {
    function convertBinToDec(event: FormEvent) {
        event.preventDefault();
        let arrayNumbers = valueInput.split("");
        let aux = arrayNumbers.length - 1;
        let decimal = 0;
        for (let i = 0; arrayNumbers.length > i; i++) {
            decimal += Number(arrayNumbers[i]) * 2 ** aux;
            aux--;
        }
        setValueOutput(String(decimal));
    }

    const [valueInput, setValueInput] = useState('');
    const [valueOutput, setValueOutput] = useState('');

    return (
        <Container onSubmit={convertBinToDec}>
            <img src={logo} alt="Bin2Dec logo" />
            <Content>
                <input
                    type='number'
                    value={valueInput}
                    placeholder="Digite o valor em binário (0 e 1):"
                    onChange={(event) => setValueInput(event.target.value)}
                />

                <button type="submit">Converter</button>
                <p>{Number(valueOutput)}</p>

            </Content>
        </Container>
    )
}