import FilterOptions from "./FilterOptions";
import DrawerContext from "../context/DrawerContext";
import { useContext, useEffect } from "react";

const StayList = () => {
  const { state } = useContext(DrawerContext);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};

export default StayList;
