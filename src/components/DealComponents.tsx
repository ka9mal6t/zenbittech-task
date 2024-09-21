import {FC} from 'react';
import './css/Deal.css'



interface IDealComponent{
  imageUrl: string,
  name: string,
  price: number,
  tiket: number,
  yieldData: string,
  days: number,
  sold: string
}
const DealComponent: FC<IDealComponent> = ({imageUrl, name, price, tiket, yieldData, days, sold}) => {

   
  return (
    <div className='item'>
      <img src={imageUrl} alt="" />
        <div className='item__overlay'>
          <span className='item__title'>{name}</span>
          <div className='item__text' >
          
            <div className='param__1'>
              <span className='item__param'>{price} Dhs</span>
              <span className='item__param'>Tiket - {tiket} Dhs</span>
            </div>
            <div className='param__2'>
              <span className='item__param'>Yield {yieldData}%</span>
              <span className='item__param'>Days left {days} </span>
            </div>
            <div className='param__3'>
              <span className='item__param'>Sold {sold}%</span>
            </div>
        </div>
      </div>
    </div>
    

  );
};

export default DealComponent;
