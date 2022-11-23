import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { deleteCar } from './CarSlice';
import { RenderCard } from './RenderCars';
function CarList() {
  const dispatch = useDispatch()
  const cars = useSelector(store=>store.cars)
  function handleRemoveCar(id){
    dispatch(deleteCar({id: id})); 
  }
  return (
    <div>
      <Link to="/add-car">
        <Button>Add car</Button> 
      </Link>
      <div className='grid gap-5 md:grid-cols-3 '>
        {cars.length 
            ? 
              <RenderCard handleRemoveCar={handleRemoveCar} cars={cars}/>
            :
              <p>No car</p>
        }
      </div>
    </div>
  )
}

export default CarList