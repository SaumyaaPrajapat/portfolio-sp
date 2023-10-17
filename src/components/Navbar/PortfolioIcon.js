import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const PortfolioIcon = styled(FaGithub)`
  font-size: 3rem;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.white};
  }
`;

export default PortfolioIcon;
