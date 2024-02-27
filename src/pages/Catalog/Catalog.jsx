import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Filter } from '../../components/Filter/Filter';
import axios from 'axios';
import {
  CarList,
  Img,
  Description,
  CarCard,
  NamePriceYear,
  Name,
  TextDescription,
  YearPrice,
  Price,
  Address,
  LearnMore,
  Blue,
  LoadMore,
  Desc,
} from './Catalog.styled';

import { CarModal } from '../../components/Modal/Modal';

const Catalog = () => {
  const [loadCars, setLoadCars] = useState([]);
  const [visibleCars, setVisibleCars] = useState([]);
  const [loadMoreVisible, setLoadMoreVisible] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();

  const openModal = car => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      <Filter />
      <CarList>
        {visibleCars.map(
          ({
            id,
            make,
            year,
            model,
            img,
            rentalPrice,
            address,
            rentalCompany,
            type,
            description,
            fuelConsumption,
            engineSize,
            accessories,
            rentalConditions,
            mileage,
          }) => (
            <CarCard key={id}>
              <Img src={img} alt={`${make}`} />
              <Description>
                <NamePriceYear>
                  <Name>{make}</Name>

                  <YearPrice>
                    <Blue>{year}</Blue>
                    <Price>{rentalPrice}</Price>
                  </YearPrice>
                </NamePriceYear>

                <TextDescription>
                  <Address>{address} | </Address>
                  <Address>{rentalCompany} | </Address>
                  <Address>{type} | </Address>
                  <strong>
                    <Blue>{model} | </Blue>
                  </strong>
                  <Address>{id} | </Address>
                  <Address>{rentalCompany} </Address>
                  <Desc>{description}</Desc>
                </TextDescription>

                <LearnMore
                  onClick={() =>
                    openModal({
                      id,
                      make,
                      year,
                      model,
                      img,
                      rentalPrice,
                      address,
                      rentalCompany,
                      type,
                      description,
                      fuelConsumption,
                      engineSize,
                      accessories,
                      rentalConditions,
                      mileage,
                    })
                  }
                >
                  Learn more
                </LearnMore>
              </Description>
            </CarCard>
          )
        )}
      </CarList>
      <CarModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        car={selectedCar}
      />

      {loadMoreVisible && (
        <LoadMore onClick={handleLoadMore}>Load More</LoadMore>
      )}
    </div>
  );
};

export default Catalog;
