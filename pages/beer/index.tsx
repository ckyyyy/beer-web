import { FC, useEffect, useState } from 'react';
import BeerOverviews from '../../component/BeerOverviews';
import FavouriteBeers from '../../component/FavouriteBeers';
import InfiniteScroll from 'react-infinite-scroller';
import { Row, Col, Typography, Button, Card } from 'antd';

const { Title } = Typography;

const Beer: FC = () => {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [favBeers, setFavBeers] = useState([]);
  const [favBeersVisible, setFavBeerVisible] = useState(false);

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

  const editFavourite = (editBeer) => {
    let editFavBeers = [...favBeers];
    const editIndex = favBeers.indexOf(editBeer);
    editIndex !== -1
      ? editFavBeers.splice(editIndex, 1)
      : editFavBeers.push(editBeer);
    setFavBeers(editFavBeers);
    console.log(favBeers);
  };

  if (beers.length == 0) {
    return (
      <>
        <Title>Beer Page</Title> <h4>Loading...</h4>
      </>
    );
  }

  return (
    <>
      <Title style={{ alignContent: 'center' }}>Beer Page</Title>
      <FavouriteBeers
        beers={favBeers}
        setVisible={setFavBeerVisible}
        visible={favBeersVisible}
      />
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
              <Card key={beer.id} style={{ height: 250, backgroundColor: "floralwhite" }}>
                <h4>{beer.name}</h4>
                <img
                  src={beer.image_url}
                  alt=""
                  style={{
                    width: '30px',
                  }}
                />
                <BeerOverviews beer={beer} key={index} />
                <Button type="dashed" onClick={() => editFavourite(beer)}>
                  Favourite
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </>
  );
};

export default Beer;
