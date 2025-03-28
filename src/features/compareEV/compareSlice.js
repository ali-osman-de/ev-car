import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: [],
};

export const compareSlice = createSlice({
    name: 'compare',
    initialState,
    reducers: {
        addCar: (state, action) => {
            if (!state.cars) {
                state.cars = []; 
            }
            if (state.cars.length < 2 && !state.cars.some(car => car.id === action.payload.id)) {
                state.cars.push(action.payload);
            }
        },
        removeCar: (state, action) => {

            state.cars = state.cars.filter(car => car.id !== action.payload.id);
        },
        removeAllCars: (state) => {

            state.cars = [];
        },
    },
});

export const { addCar, removeCar, removeAllCars } = compareSlice.actions;

export default compareSlice.reducer;
