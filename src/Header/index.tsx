import logoImg from '../assets/blogger.png';
import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <h1>
                    <img src={logoImg} alt="icon blog" />
                    Let's
                    <span>Read</span>
                </h1>
                <button>
                    Nova postagem
                </button>
            </Content>
        </Container>
    )
}