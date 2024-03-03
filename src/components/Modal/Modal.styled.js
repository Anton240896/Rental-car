import styled from 'styled-components';
import ReactModal from 'react-modal';
import { IoIosClose } from 'react-icons/io';

export const OverlayModal = styled(ReactModal)`
  position: relative;
  border-radius: 12px;
  border: 1px solid blue;
  background-color: aliceblue;

  width: 420px;
  height: 640px;
  top: 50%;
  right: auto;
  bottom: auto;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 0%;
  z-index: 1;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 30px;
`;

export const ImgAdvert = styled.img`
  border-radius: 12px;
  margin-left: auto;
  margin-right: auto;

  width: 80%;
  height: 200px;
`;

export const ContDescCar = styled.div`
  display: flex;
  gap: 5px;

  margin-top: 14px;
  margin-left: 41px;
  align-items: baseline;
`;

export const Blue = styled.span`
  color: blue;
`;

export const YearModal = styled.span`
  color: black;
`;

export const TextDescription = styled.p`
  margin-top: 14px;
  margin-left: 41px;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  width: 353px;

  font-family: 'Manrope';
`;

export const TextConditions = styled.p`
  margin-top: 14px;
  padding-left: 10px;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  width: 100px;
  color: black;
  border: 1px solid grey;
  border-radius: 12px;

  font-family: 'Manrope';
`;

export const AddressModal = styled.span`
  color: grey;
  margin-left: 41px;
  font-size: 12px;
`;

export const IndentureCar = styled.span`
  color: grey;
  margin-left: 5px;
  font-size: 12px;
`;

export const Indenture = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const Accesories = styled.p`
  color: grey;
  margin-left: 41px;
  margin-top: 8px;
  font-size: 12px;
  width: 354px;
`;

export const Mileage = styled.div`
  display: flex;
`;

export const RentalCar = styled.button`
  background-color: #3470ff;
  border: none;
  color: white;
  border-radius: 12px;
  width: 168px;
  height: 44px;
  margin-top: -65px;
  margin-left: auto;
  margin-right: 20px;

  &:hover {
    background-color: blue;
  }
`;

export const Close = styled(IoIosClose)`
  position: absolute;
  right: 20px;
  top: 10px;
  cursor: pointer;

  &:hover {
    color: blue;
  }
`;

export const BlueMileagePrice = styled.span`
  color: blue;
  margin-left: 41px;
`;

export const ContRental = styled.div`
  display: flex;
  margin-left: 41px;
  gap: 20px;
`;
