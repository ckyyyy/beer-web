import { FC, useEffect, useState } from 'react';
import Beer from '../../component/Beer';
import InfiniteScroll from 'react-infinite-scroller';

const Inventory: FC = () => {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);

  const fetchBeers = () => {
    let url = `https://api.punkapi.com/v2/beers?page=${page}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBeers([...beers, ...data]);
        setPage(page + 1);
      });
  };

  useEffect(() => {
    fetchBeers();
  }, []);

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
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchBeers}
        hasMore={true || false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        {beers.map((beer) => (
          <Beer beer={beer} key={beer.id} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default Inventory;
