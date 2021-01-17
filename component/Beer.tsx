import { FC, useState } from 'react';
import { Card, Button } from 'antd';
import BeerDetails from './BeerDetails';

type Props = {
  beer: any;
};

const Beer: FC<Props> = ({ beer }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  return (
    <>
      <Card key={beer.id}>
        <h4>{beer.name}</h4>
        <img
          src={beer.image_url}
          alt=""
          style={{
            width: '30px',
          }}
        />
        <p>{beer.tagline}</p>
        <Button type="primary" onClick={() => setDetailsVisible(true)}>
          Details
        </Button>
      </Card>
      <BeerDetails
        beer={beer}
        visible={detailsVisible}
        setVisible={setDetailsVisible}
      />
    </>
  );
};

export default Beer;
