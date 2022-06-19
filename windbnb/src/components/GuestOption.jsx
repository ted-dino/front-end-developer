import { FaPlus, FaMinus } from "react-icons/fa";
import { useContext, useState, useEffect } from "react";
import FilterContext from "../context/FilterContext";

const GuestOption = () => {
  const { showGuest, setGuest } = useContext(FilterContext);
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  useEffect(() => {
    setGuest(adultCount + childCount);
  }, [adultCount, childCount]);

  const increaseAdult = () => {
    setAdultCount((prevState) => prevState + 1);
  };
  const increaseChild = () => {
    setChildCount((prevState) => prevState + 1);
  };
  const decreaseAdult = () => {
    if (adultCount === 0) {
      return;
    } else {
      setAdultCount((prevState) => prevState - 1);
    }
  };

  const decreaseChild = () => {
    if (childCount === 0) {
      return;
    } else {
      setChildCount((prevState) => prevState - 1);
    }
  };

  return (
    <div
      className={
        showGuest
          ? "mt-7 ml-5 sm:w-1/3 flex flex-col gap-3 "
          : "sm:w-1/3 invisible"
      }
    >
      <div className="adult">
        <h4 className="font-bold">Adults</h4>
        <span className="text-accent md:mb-12">Ages 13 or above</span>
        <div className="flex items-center gap-3">
          <div className="cursor-pointer" onClick={decreaseAdult}>
            <FaMinus />
          </div>
          <span>{adultCount}</span>
          <div className="cursor-pointer" onClick={increaseAdult}>
            <FaPlus />
          </div>
        </div>
      </div>
      <div className="children">
        <h4 className="font-bold">Children</h4>
        <span className="text-accent md:mb-12">Ages 2-12</span>
        <div className="flex items-center gap-3">
          <div className="cursor-pointer" onClick={decreaseChild}>
            <FaMinus />
          </div>
          <span>{childCount}</span>
          <div className="cursor-pointer" onClick={increaseChild}>
            <FaPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestOption;
