import styled from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = () => <Title>Hello, world!</Title>;

export default Home;
