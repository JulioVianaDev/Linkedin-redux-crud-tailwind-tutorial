import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import { addCar } from './CarSlice'
import { v4 as uuidv4 } from 'uuid';
function AddCar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [carValues,setCarValues] = useState({name:'', cor: '', ano: '' , })
  function handleSubmit(){
    setCarValues({name:'',cor:'',ano: ''})
    dispatch(addCar({
      id: uuidv4(),
      name: carValues.name,
      ano: carValues.ano,
      cor: carValues.cor
    }))
    navigate('/')
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

      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

export default AddCar