import Cart from "./components/cart";
import Products from "./components/products";
import { useEffect } from "react";
import Add from "./components/add";
import List from "./components/list";
import { fetchPerson } from "./store/features/personSlice";
import { useAppDispatch } from "./store/store";

function App() {
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchPerson());
  // });
  return (
    <div>
      <Add />
      <List />
      <Products />
      <Cart />
    </div>
  );
}

export default App;