import './App.css';
import CarList from './Features/Cars/CarList';
import { Routes, Route } from 'react-router-dom';
import AddCar from './Features/Cars/AddCar';
import EditCar from './Features/Cars/EditCar';

function App() {
  return (
    <div className="  mx-auto px-2 max-w-7xl pt-10 md:pt-32">
      <h3 className='text-center font-bold text-5xl text-gray-700'>
        Cadastro de carros com Redux Toolkit
      </h3>
      <Routes>
        <Route path='/' element={<CarList/>}/>
        <Route path='/add-car' element={<AddCar/>}/>
        <Route path='/edit-car/:id' element={<EditCar/>}/>
      </Routes>
    </div>
  );
}

export default App;