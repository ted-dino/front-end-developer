import { useEffect, useState } from "react";

const useImage = (fileName) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(
          `../assets/weather-icons/${fileName}.svg`
        );
        setImage(response.default);
      } catch (err) {
        console.log(err);
      }
    };

    fetchImage();
  }, [fileName]);

  return {
    image,
  };
};

export default useImage;
