import create from "zustand";

const API_KEY = "CSKW65FQSTGUR8YJC5JMM7MMA";

const useStore = create((set, get) => ({
  locationWeather: [],
  isLoading: false,
  unitGroup: "metric",
  searchList: [],
  fetchData: async (city) => {
    set((state) => ({ isLoading: (state.isLoading = true) }));
    const unit = get().unitGroup;
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&include=current%2Cdays&key=${API_KEY}&contentType=json`
    );
    set({ locationWeather: await response.json() });
    set((state) => ({ isLoading: (state.isLoading = false) }));
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
}));

export default useStore;
