import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { logout } from '../store/authSlice';
import HeaderComponent from './HeaderComponent';
import DealComponent, {IDealComponent} from './DealComponents';
import {getDeals} from '../api/auth'
import './css/Home.css'


const Home: React.FC = () => {
  const auth = useSelector((state: RootState) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const [deals, setDeals] = useState<IDealComponent[]>([]);

  useEffect(() => {
    getDeals().then((result)=>{
      setDeals(result)
    }).catch(()=>{console.log('Server error')})
  },[])

  const handleLogout = () => {
    dispatch(logout());
    };

  
  const dealExample =  
    {imageUrl: "https://media.istockphoto.com/id/511061090/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81-%D0%BE%D1%84%D0%B8%D1%81-%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-%D0%BB%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD%D0%B5-%D0%B0%D0%BD%D0%B3%D0%BB%D0%B8%D1%8F.jpg?s=2048x2048&w=is&k=20&c=ibAjRHPRvsQeYbUd4y5_fuZ2Vqh60G5Ts-vqrpevm3Q=",
      name: "The Marina Torch",
      price: 6_500_000,
      tiket: 60_000,
      yield: "9.25",
      days: 150,
      sold: "75"};

  return (
    <div>
      <HeaderComponent auth={auth} logOut={handleLogout}/>
      <main>
        <div className='preview'>
          <div className='preview__title'> The chemical  negatively charged </div>
          <div className='preview__text'> Numerous calculations predict, and experiments confirm, that the force field reflects the beam, while the mass defect is not formed. The chemical compound is negatively charged. Twhile the mass defect is </div>
          <button className='preview__btn'> Get Started </button>
        </div>
        <div className='deals'>
          <p>Open Deals</p>
          <div className='items'>
          {deals.map((deal) => (
            <DealComponent 
              imageUrl={deal.imageUrl} 
              name={deal.name}
                price={deal.price}
                tiket={deal.tiket}
                yieldData={deal.yieldData}
                days={deal.days}
                sold={deal.sold}/>
          ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
