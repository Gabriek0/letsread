import logoImg from '../assets/blogger.png';
import { Container, Content } from './styles';

interface HeaderProps {
    openNewPostModal: () => void;
};

export function Header({ openNewPostModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <h1>
                    <img src={logoImg} alt="icon blog" />
                    Let's
                    <span>Read</span>
                </h1>
                <button onClick={openNewPostModal}>
                    Nova postagem
                </button>
            </Content>
        </Container>
    )
}