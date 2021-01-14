import { FC } from 'react';

type Props = {
  beer: any;
};

const Beer: FC<Props> = ({ beer }) => {
  return (
    <div key={beer.id}>
      <h4>{beer.name}</h4>
      <img
        src={beer.image_url}
        alt=""
        style={{
          width: '30px',
        }}
      />
      <p>{beer.tagline}</p>
    </div>
  );
};

export default Beer;
