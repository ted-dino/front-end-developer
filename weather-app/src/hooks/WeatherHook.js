import create from "zustand";

const API_KEY = "CSKW65FQSTGUR8YJC5JMM7MMA";

const useStore = create((set) => ({
  locationWeather: [],
  unitGroup: "",
  searchList: [],
  fetchData: async (city, unit) => {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&include=current%2Cdays&key=${API_KEY}&contentType=json`
    );
    set({ locationWeather: await response.json() });
  },
  addToSearchList: (query) => {
    set((state) => ({
      searchList: [
        ...state.searchList,
        {
          query,
        },
      ],
    }));
  },
}));

export default useStore;
