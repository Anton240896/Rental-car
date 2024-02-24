import styled from 'styled-components';
import { FaLongArrowAltRight } from 'react-icons/fa';

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
`;

export const Welcome = styled.p`
  width: 309px;
  font-size: 25px;
  text-align: left;
`;

export const ArrowNextPage = styled(FaLongArrowAltRight)`
  cursor: pointer;
`;

export const Img = styled.img`
  width: 700px;
`;
