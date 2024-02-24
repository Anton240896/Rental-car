import styled from 'styled-components';

export const CarList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  justify-content: space-between;
  margin: 274px 129px 274px 115px;

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
  gap: 3px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  justify-content: flex-start;

  font-family: 'Manrope', sans-serif;
`;

export const Name = styled.h3`
  padding-bottom: 8px;
`;

export const TextDeskription = styled.p`
  padding-bottom: 8px;

  font-family: 'Manrope', sans-serif;
`;

export const Year = styled.span`
  padding-left: 10px;
  color: #3470ff;
`;

export const Model = styled.span`
  color: #3470ff;
`;

export const Price = styled.span`
  padding-left: 40px;
`;

export const LearMore = styled.button`
  width: 274px;
  height: 44px;
  border-radius: 12px;
  margin-top: 28px;
  border: none;
  background-color: #3470ff;
  color: white;
  cursor: pointer;

  font-family: 'Manrope', sans-serif;
`;

export const Address = styled.span`
  color: #12141773;
  font-size: 12px;
`;

export const YearPrice = styled.div`
  display: flex;
`;

export const BlueModel = styled.span`
  color: #12141773;
  font-size: 12px;
  color: blue;
`;
