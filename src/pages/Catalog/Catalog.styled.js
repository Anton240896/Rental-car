import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CarList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 80px;
  margin: 274px 100px 80px 197px;
`;

export const CarCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 29px;
`;

export const Img = styled.img`
  object-fit: cover;
  width: 268px;
  height: 274px;
  border-radius: 14px;
`;

export const Description = styled.div`
  padding-top: 14px;
`;

export const NamePriceYear = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  gap: 50px;

  font-family: 'Manrope', sans-serif;
`;

export const Name = styled.h3`
  padding-bottom: 8px;
`;

export const TextDescription = styled.p`
  padding-bottom: 8px;
  width: 244px;
  font-size: 10px;

  font-family: 'Manrope', sans-serif;
`;

export const Price = styled.span`
  padding-left: 40px;
`;

export const LearnMore = styled.button`
  width: 274px;
  height: 44px;
  border-radius: 12px;
  margin-top: 18px;
  border: none;
  background-color: #3470ff;
  color: white;
  cursor: pointer;

  font-family: 'Manrope', sans-serif;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: blue;
  }
`;

export const Address = styled.span`
  color: #12141773;
  font-size: 12px;
`;

export const Blue = styled.span`
  color: #3470ff;
  font-size: 12px;
`;

export const LoadMore = styled.button`
  width: 145px;
  height: 44px;
  border-radius: 12px;
  margin-top: 18px;
  border: none;
  background-color: #3470ff;
  color: white;
  cursor: pointer;
  margin: 50px 0 50px 50%;

  font-family: 'Manrope', sans sans-serif;

  &:hover {
    background-color: blue;
  }
`;

export const Desc = styled.span`
  display: none;
`;

export const BackHome = styled.button`
  width: 145px;
  height: 44px;
  border-radius: 12px;
  margin-top: 18px;
  border: none;
  background-color: #3470ff;
  cursor: pointer;
  margin: 50px 0 50px 50%;

  &:hover {
    background-color: blue;
  }
`;

export const BackHomeLink = styled(Link)`
  color: white;
  padding-left: 5px;
`;
