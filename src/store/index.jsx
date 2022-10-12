import { configureStore } from "@reduxjs/toolkit";
import AllDataApartment from "./slice/AllDataApartment";

const store = configureStore({
  reducer: {
    allapartmnet: AllDataApartment.reducer,
  },
});
export default store;
