const Filter = () => {
  const onCheck = (e) => {
    console.log(e.target.checked);
  };
  return (
    <div className="min-w-[380px]">
      <div className="flex items-center gap-3 mb-5">
        <input
          type="checkbox"
          id="fulltime"
          name="fulltime"
          value="fulltime"
          className="cursor-pointer w-5 h-5"
          onChange={onCheck}
        />
        <label
          htmlFor="fulltime"
          className="cursor-pointer text-primary font-poppins font-medium"
        >
          Full time
        </label>
      </div>
      <div className="flex flex-col gap-2">
        <span className="uppercase font-poppins font-bold text-accent">
          Location
        </span>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-3 text-primary font-poppins font-medium">
            <input
              type="radio"
              name="location"
              id="worldwide"
              className="w-5 h-5"
            />
            <label htmlFor="worldwide">Worldwide</label>
          </li>
          <li className="flex items-center gap-3 text-primary font-poppins font-medium">
            <input type="radio" name="location" id="usa" className="w-5 h-5" />
            <label htmlFor="usa">USA Only</label>
          </li>
          <li className="flex items-center gap-3 text-primary font-poppins font-medium">
            <input
              type="radio"
              name="location"
              id="other"
              className="w-5 h-5"
            />
            <label htmlFor="other">Other Location</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
