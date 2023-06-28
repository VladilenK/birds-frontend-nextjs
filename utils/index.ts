import { BirdProps, FilterProps } from "@/types";


export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};


export async function fetchBirds(filters: FilterProps) {
  const { name } = filters;

  console.log("fetchBirds param:", name)

  // Set the required headers for the API request
  // const response = await fetch(
  //   `http://127.0.0.1:8000/birds/pictures/?name=${name}`
  // );

  const response = await fetch(
    `http://52.91.20.43/birds/pictures/?name=${name}`
  );
  // Parse the response as JSON
  const result = await response.json();

  return result;
}
