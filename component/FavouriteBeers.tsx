import { FC } from 'react';
import { Modal, Row, Col, Card, Button } from 'antd';
import { Beer } from '../types/Beer';

type Props = {
  beers: Beer[];
  setBeers: (beers: Beer[]) => void;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const BeerDetails: FC<Props> = ({ beers, setBeers, visible, setVisible }) => {
  const removeFavourite = (removeBeer) => {
    let newFavBeers = [...beers];
    const removeIndex = beers.indexOf(removeBeer);
    if (removeIndex !== -1) {
      newFavBeers.splice(removeIndex, 1);
      setBeers(newFavBeers);
    }
  };

  return (
    <>
      <Button onClick={() => setVisible(!visible)}>My Favourite Beers</Button>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        width={1000}
        title={'My Favourite Beers'}
      >
        <Row gutter={16}>
          {beers.map((beer, index) => (
            <Col span={6} key={index}>
              <Card
                key={beer.id}
                style={{ height: 220, backgroundColor: 'floralwhite' }}
              >
                <h4>{beer.name}</h4>
                <img
                  src={beer.image_url}
                  alt=""
                  style={{
                    width: '30px',
                  }}
                />
                <Button
                  type="dashed"
                  style={{ display: 'flex' }}
                  onClick={() => removeFavourite(beer)}
                >
                  Remove
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Modal>
    </>
  );
};

export default BeerDetails;
