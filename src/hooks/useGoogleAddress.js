import { useEffect, useState } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.REACT_APP_GOOGLE_ID}`;

  useEffect(async () => {
    try {
      const response = await axios.get(API);
      setMap(response.data.result[0].geometry.location);
      console.log(response.data.status);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return map;
};

export default useGoogleAddress;