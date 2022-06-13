export const exerciseOptions = {
  method: 'GET',
  headers: {},
};

export const youtubeOptions = {
  method: 'GET',
  headers: {},
};

// abstration of function to extract data
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
