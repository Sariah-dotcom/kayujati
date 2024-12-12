import React from 'react';
import CarouselCard from './CarouselCard';

export default function Carousel() {


  return (
    <div className='flex'>
        <div className='flex overflow-x-scroll gap-4 p-4'>
            <CarouselCard 
                number='01'
                furnitureImg='/furniture/chair-1.jpg'
                furnitureName='Edelis Chair'
                category='Makeup and Chairs'
            />

            <CarouselCard 
                number='02'
                furnitureImg='/furniture/chair-2.jpg'
                furnitureName='Rumpi Chair'
                category='Makeup and Chairs'
            />

            <CarouselCard 
                number='03'
                furnitureImg='/furniture/couch.jpg'
                furnitureName='Airie Couch'
                category='Couches and Arm Rests'
            />
        </div>
      
    </div>
  );
}
