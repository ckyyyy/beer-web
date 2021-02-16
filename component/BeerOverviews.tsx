import { FC, useState } from 'react';
import { Card, Button } from 'antd';
import BeerDetails from './BeerDetails';
import { Beer } from '../types/Beer';

type Props = {
  beer: Beer;
};

const BeerOverviews: FC<Props> = ({ beer }) => {
  const [detailsVisible, setDetailsVisible] = useState(false);
  return (
    <>
      <p>{beer.tagline}</p>
      <Button type="primary" onClick={() => setDetailsVisible(true)}>
        Details
      </Button>

      <BeerDetails
        beer={beer}
        visible={detailsVisible}
        setVisible={setDetailsVisible}
      />
    </>
  );
};

export default BeerOverviews;
