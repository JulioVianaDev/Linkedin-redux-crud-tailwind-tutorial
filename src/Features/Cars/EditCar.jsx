import React,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TextField from '../../components/TextField'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux';
import { editCar } from './CarSlice';

function EditUser() { 
  const params = useParams();
  const dispatch = useDispatch();
  const cars = useSelector(store => store.cars);
  const navigate = useNavigate();
  const existingCar = cars.filter(car => car.id === params.id);
  const { name, ano,cor } = existingCar[0];
  const [carValues, setCarValues] = useState({
    name,
    ano,
    cor
  });

  function handleEdit(){
    setCarValues({ name: '', ano: '', cor: ''});
    dispatch(editCar({
      id: params.id,
      name: carValues.name,
      cor: carValues.cor,
      ano: carValues.ano,
    }));
    navigate('/');
  }
  return (
    <div className='mt-10 max-w-xl mx-auto'>
     <TextField
        label="Name"
        onChange={(e)=>setCarValues({...carValues,name: e.target.value})}
        value={carValues.name}
        inputProps={{type: "text", placeholder: "Digite o modelo do carro"}}
      />
      <TextField
        label="Cor"
        value={carValues.cor}
        onChange={(e)=>setCarValues({...carValues,cor: e.target.value})}
        inputProps={{type: "text", placeholder: "Digite a cor do carro"}}
      />
      <TextField
        label="Ano"
        value={carValues.ano}
        onChange={(e)=>setCarValues({...carValues,ano: e.target.value})}
        inputProps={{type: "text", placeholder: "Digite o ano do carro"}}
      />
      <Button onClick={handleEdit}>Edit</Button>
    </div>
    )
}

export default EditUser