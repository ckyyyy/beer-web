import { FC } from 'react';
import { Card } from 'antd';

type Props = {
  beer: any;
};

const Beer: FC<Props> = ({ beer }) => {
  return (
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
    </Card>
  );
};

export default Beer;
