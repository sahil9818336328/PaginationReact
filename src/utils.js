// function that returns an array with 10 items = array , each consisting of 10 objects

const paginate = (data) => {
  const itemsPerPage = 10;
  //iterate length times
  const newData = Array.from({ length: itemsPerPage }, (_, index) => {
    const startPosition = index * itemsPerPage;
    return data.slice(startPosition, startPosition + itemsPerPage); //wrapping 10 objects in an array and returning it.
  });

  return newData;
};

export default paginate;
