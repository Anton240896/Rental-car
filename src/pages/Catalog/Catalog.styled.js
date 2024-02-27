import styled from 'styled-components';

export const CarList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  justify-content: space-between;
  margin: 274px 129px 100px 115px;

  @media screen and (max-width: 992px) {
    justify-content: flex-start;
  }
`;

export const CarCard = styled.div`
  width: calc(25% - 29px);
  margin-bottom: 29px;

  @media screen and (max-width: 1200px) {
    width: calc(33.33% - 29px);
  }

  @media screen and (max-width: 768px) {
    width: calc(50% - 29px);
  }

  @media screen and (max-width: 576px) {
    width: 100%;
  }
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
  width: 100%;

  font-family: 'Manrope', sans-serif;
`;

export const Name = styled.h3`
  padding-bottom: 8px;
`;

export const TextDescription = styled.p`
  padding-bottom: 8px;
  width: 263px;

  font-family: 'Manrope', sans-serif;
`;

export const Price = styled.span`
  padding-left: 40px;
`;

export const LearnMore = styled.button`
  width: 145px;
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

  @media (min-width: 1220px) {
    width: 250px;
  }

  @media (min-width: 1440px) {
    width: 274px;
  }
`;

export const Address = styled.span`
  color: #12141773;
  font-size: 12px;
`;

export const YearPrice = styled.div`
  display: flex;
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

export const ContBtn = styled.div`
  display: flex;
`;
