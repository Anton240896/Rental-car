import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import {
  CarList,
  Img,
  Description,
  CarCard,
  NamePriceYear,
  Name,
  TextDeskription,
  Year,
  YearPrice,
  Price,
  Address,
  LearMore,
  BlueModel,
} from './Catalog.styled';

const Catalog = () => {
  const [loadCars, setLoadCars] = useState([]);
  const [visibleCars, setVisibleCars] = useState([]);
  const [loadMoreVisible, setLoadMoreVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(
          'https://65d8a715c96fbb24c1bc0564.mockapi.io/carAdvert/cars'
        );
        setLoadCars(response.data);
        setVisibleCars(response.data.slice(0, 12));
        if (response.data.length > 12) {
          setLoadMoreVisible(true);
        }
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchCars();
  }, []);

  const handleLoadMore = () => {
    const nextCars = loadCars.slice(
      visibleCars.length,
      visibleCars.length + 12
    );
    setVisibleCars(prevCars => [...prevCars, ...nextCars]);
    if (visibleCars.length + nextCars.length === loadCars.length) {
      setLoadMoreVisible(false);
    }
  };

  return (
    <div>
      <Link to={location.state?.from ?? '/'}>Back home</Link>

      <CarList>
        {visibleCars.map(
          ({
            id,
            make,
            year,
            model,
            img,
            // description,
            rentalPrice,
            address,
            rentalCompany,
            type,
            functionalities,
          }) => (
            <CarCard key={id}>
              <Img src={img} alt={`${make}`} />
              <Description>
                <NamePriceYear>
                  <Name>{make}</Name>

                  <YearPrice>
                    <Year>{year},</Year>
                    <Price>{rentalPrice}</Price>
                  </YearPrice>
                </NamePriceYear>

                <TextDeskription>
                  <Address>{address} | </Address>
                  <Address>{rentalCompany} | </Address>
                  <Address>{type} | </Address>
                  <BlueModel>{model} | </BlueModel>
                  <Address>{id} | </Address>
                  <Address>{rentalCompany} | </Address>
                </TextDeskription>

                <LearMore>Learn more</LearMore>
              </Description>
            </CarCard>
          )
        )}
      </CarList>

      {loadMoreVisible && <button onClick={handleLoadMore}>Load More</button>}
    </div>
  );
};

export default Catalog;
