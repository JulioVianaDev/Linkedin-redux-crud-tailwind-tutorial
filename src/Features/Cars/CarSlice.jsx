import { createSlice } from "@reduxjs/toolkit";

const initialState=[
  {    id:1,    name:"Corola",    cor: "preto"  , ano: "2012"},
  {    id:2,    name:"Camaro",    cor: "amarelo"  , ano: "2016"},
  {    id:3,    name:"Fusca",    cor: "azul"  , ano: "1996"}
];

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers:{
    addCar: (state,action)=>{
      state.push(action.payload)
    },
    editCar: (state,action)=>{
      const {id,name, cor, ano } = action.payload;
      const existingCar = state.find(car=>car.id === id);
      if (existingCar){
        existingCar.name = name;
        existingCar.cor = cor;
        existingCar.ano = ano;
      }
    },
    deleteCar:(state,action)=>{
      const {id} = action.payload;
      const existingCar = state.find(car=>car.id === id);
      if (existingCar){
        return state.filter(car=>car.id !== id)
      } 
    }
  }
})

export const {addCar,editCar, deleteCar} = carSlice.actions;

export default carSlice.reducer;