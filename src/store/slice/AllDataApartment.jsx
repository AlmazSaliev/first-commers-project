import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  apartment: [],
};
const AllDataApartment = createSlice({
  name: "apartment",
  initialState,
  reducers: {
    opendb: () => {
    },
    getapartment: (state) => {
      state.apartment = []
    },
  },
});
export const getAllApartmentActions = AllDataApartment.actions;
export default AllDataApartment;
