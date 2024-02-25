import ReactModal from 'react-modal';
import { Name } from '../../pages/Catalog/Catalog.styled';

import {
  OverlayModal,
  ImgAdvert,
  Description,
  Blue,
  ContDescCar,
  YearModal,
  TextDescription,
  AddressModal,
  IndentureCar,
  Indenture,
  Accesories,
  RentalCar,
} from './Modal.styled';

ReactModal.setAppElement('#root');

export const CarModal = ({ isOpen, onRequestClose, car }) => {
  if (!car) {
    return null;
  }

  return (
    <OverlayModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Description>
        <ImgAdvert src={car.img} alt={`${car.make} ${car.model}`} />

        <ContDescCar>
          <Name>{car.make}</Name>
          <Blue> {car.model}, </Blue>
          <YearModal>{car.year}</YearModal>
        </ContDescCar>

        <Indenture>
          <AddressModal>{car.address} |</AddressModal>
          <IndentureCar> id: {car.id} |</IndentureCar>
          <IndentureCar> year: {car.year} | </IndentureCar>
          <IndentureCar> type: {car.type} </IndentureCar>
          <AddressModal>fuelConsumption: {car.fuelConsumption} |</AddressModal>
          <IndentureCar>Engine Size: {car.engineSize}</IndentureCar>
        </Indenture>

        <TextDescription>{car.description}</TextDescription>

        <TextDescription>
          <strong>Accessories and functionalities:</strong>
        </TextDescription>

        <Accesories> {car.accessories}</Accesories>

        <TextDescription>
          <strong>Rental Conditions:</strong>
        </TextDescription>

        <TextDescription> {car.rentalConditions} </TextDescription>

        <TextDescription> Mileage: {car.mileage} </TextDescription>

        <RentalCar>Rental Car</RentalCar>
      </Description>
    </OverlayModal>
  );
};

// export default CarModal;
