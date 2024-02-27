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
  ContBtn,
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
      visibleCars.length + 13
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
        {visibleCars.map((car, index) => (
          <CarCard key={`${car.id}_${index}`}>
            <Img src={car.img} alt={`${car.make}`} />
            <Description>
              <NamePriceYear>
                <Name>{car.make}</Name>

                <YearPrice>
                  <strong>
                    <Blue>{car.year}</Blue>
                  </strong>
                  <Price>{car.rentalPrice}</Price>
                </YearPrice>
              </NamePriceYear>

              <TextDescription>
                <Address>{car.address} | </Address>
                <Address>{car.rentalCompany} | </Address>
                <Address>{car.type} | </Address>
                <strong>
                  <Blue>{car.model} | </Blue>
                </strong>
                <Address>{car.id} | </Address>
                <Address>{car.rentalCompany} </Address>
                <Desc>{car.description}</Desc>
              </TextDescription>

              <ContBtn>
                <LearnMore onClick={() => openModal(car)}>Learn more</LearnMore>
              </ContBtn>
            </Description>
          </CarCard>
        ))}
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
