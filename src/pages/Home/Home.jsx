import { Link, useLocation } from 'react-router-dom';
import { ContainerHome, Welcome, ArrowNextPage, Img } from './Home.styled';

import ImageRental from '../../Images/Rent-a-car.avif';

export default function Home() {
  const location = useLocation();

  return (
    <ContainerHome>
      <Img src={ImageRental} alt="Car Rental Service" />
      <Welcome>
        <b>
          Welcome to car rental services in Ukraine 💙💛. Here you will find the
          best cars for rent in Ukraine, go to the second page and you will see
          for yourself →
        </b>
      </Welcome>
      <Link to={location.state?.from ?? '/catalog'}>
        <ArrowNextPage size={150} />
      </Link>
    </ContainerHome>
  );
}
