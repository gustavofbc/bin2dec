import { Container } from "./styles";
import coffee from '../../assets/coffee.svg';

export function Footer() {
    return (
        <Container>
            <p>
                Desenvolvido com ajuda de
                <img src={coffee} alt="Icon coffee" />
                por
                <a href="https://gustavofbc.github.io/" target="_blank" rel="noreferrer">Gustavo Felipe
                </a>
            </p>
        </Container>
    )
}