import { FC, useEffect, useState } from 'react';
import Beer from '../../component/Beer';
import InfiniteScroll from 'react-infinite-scroller';
import { Row, Col } from 'antd';

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
        <Row gutter={16}>
          {beers.map((beer, index) => (
            <Col span={6} key={index}>
              <Beer beer={beer} key={index} />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </>
  );
};

export default Inventory;
