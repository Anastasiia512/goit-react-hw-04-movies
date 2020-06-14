import queryString from 'query-string';

export const options = [
  { value: 'cast', label: 'Cast' },
  { value: 'reviews', label: 'Revievs' },
];

export const getOptionWithWalue = (allOptions, value) =>
  allOptions.find(opt => opt.value === value);

export const getCategoryFromLocation = location =>
  queryString.parse(location.search).category;
