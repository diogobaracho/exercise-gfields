import { Link } from "react-router-dom"
import logoImg from "../../logo.svg"
import { Container, Content } from "./styles"

export function Header() {
    return (
        <Container>
            <Content>
                <h1>
                    <Link to="/">
                        GFields
                        <img src={logoImg} alt="gfields" height="24px" />
                    </Link>
                </h1>
            </Content>
        </Container>
    )
}
