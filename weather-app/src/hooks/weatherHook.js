import create from "zustand";

const API_KEY = "YOUR_API_KEY";

const useStore = create((set, get) => ({
  locationWeather: [],
  isLoading: false,
  unitGroup: "metric",
  city: "England",
  isError: "",
  searchList: [],
  fetchData: async () => {
    try {
      set((state) => ({ isLoading: (state.isLoading = true) }));
      const unit = get().unitGroup;
      let city = get().city;
      const query = typeof city === "string" ? city : `${city[0]},${city[1]}`;
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=${unit}&include=current%2Cdays&key=${API_KEY}&contentType=json`
      );
      set({ locationWeather: await response.json() });
      set((state) => ({ isLoading: (state.isLoading = false) }));
    } catch (error) {
      set((state) => ({ isError: (state.isError = error) }));
    }
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
  changeUnit: (unit) => {
    set({ unitGroup: unit });
  },
  changeCity: (city) => {
    set({ city: city });
  },
}));

export default useStore;
