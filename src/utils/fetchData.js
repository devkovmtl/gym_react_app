export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_X_RADPIAPI_HOST,
  },
};

// abstration of function to extract data
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
