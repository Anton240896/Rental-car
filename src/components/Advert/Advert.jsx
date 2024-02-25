import {
  //   CarList,
  Img,
  //   Description,
  //   CarCard,
  //   NamePriceYear,
  //   Name,
  //   TextDeskription,
  Year,
  //   YearPrice,
  //   Price,
  //   Address,
  //   LearnMore,
  //   BlueModel,
  //   LoadMore,
} from '../../pages/Catalog/Catalog.styled';

const AdvertCar = ({ carInfo, onClose }) => {
  return (
    <div>
      {carInfo && (
        <div>
          <Img
            src={carInfo.img}
            alt={carInfo.make}
            style={{ maxWidth: '100%' }}
          />
          <h2>{carInfo.make}</h2>
          <Year>Year: {carInfo.year}</Year>
          <p>Model: {carInfo.model}</p>
          <p>Rental Price: {carInfo.rentalPrice}</p>
          <p>Address: {carInfo.address}</p>
          <p>Rental Company: {carInfo.rentalCompany}</p>
          <p>Type: {carInfo.type}</p>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default AdvertCar;
