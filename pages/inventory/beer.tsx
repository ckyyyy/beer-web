import { FC, useEffect, useState } from 'react';

const Inventory: FC = () => {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(true);

  const fetchBeers = () => {
    let url = `https://api.punkapi.com/v2/beers?page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBeers([...beers, ...data]);
        setPage(page + 1);
        setIsFetching(false);
      });
  };

  const handleScrolling = () => {
    // check if reach to the bottom of the page
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }
    setIsFetching(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrolling);
    return () => window.removeEventListener('scroll', handleScrolling);
  }, []);

  useEffect(() => {
    if (isFetching) {
      fetchBeers();
    }
  }, [isFetching]);

  if (beers.length == 0) {
    return (
      <>
        <h1>Beer Page</h1> <h4>Loading...</h4>
      </>
    );
  }

  return (
    <>
      <h1>Beer Page</h1>
      <div>
        {beers.map((beer, key) => (
          <h4 key={key}>{beer.name}</h4>
        ))}
      </div>
    </>
  );
};

export default Inventory;
