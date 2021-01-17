import { FC, useState } from 'react';
import { Button, Modal, Descriptions } from 'antd';

type Props = {
  beer: any;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const BeerDetails: FC<Props> = ({ beer, visible, setVisible }) => {
  return (
    <Modal
      visible={visible}
      onCancel={() => setVisible(false)}
      footer={null}
      width={1000}
    >
      <Descriptions title={beer.name} bordered>
        <Descriptions.Item label="First Brewed" span={3}>
          {beer.first_brewed}
        </Descriptions.Item>
        <Descriptions.Item label="Description" span={3}>
          {beer.description}
        </Descriptions.Item>

        <Descriptions.Item label="Alcohol Facts" span={3}>
          <ul>
            <li>ABV: {beer.abv}%</li>
            <li>IBU: {beer.ibu}</li>
            <li>EBC: {beer.ebc}</li>
            <li>SRM: {beer.srm}</li>
            <li>pH: {beer.ph}</li>
          </ul>
          <ul>
            <li>Original Gravity: {beer.target_og}g</li>
            <li>Final Gravity: {beer.target_fg}g</li>
            <li>Attenuation: {beer.attenuation_level}</li>
            <li>
              Volume: {beer.volume.value} {beer.volume.unit}
            </li>
            <li>
              Boil Vol.: {beer.boil_volume.value} {beer.boil_volume.unit}
            </li>
          </ul>
        </Descriptions.Item>
        <Descriptions.Item label="Ingredients" span={3}>
          <ul>
            <li>
              Malt:
              <ul>
                {beer.ingredients.malt.map((maltIng, idx) => {
                  return (
                    <li key={maltIng.name + idx}>
                      <b>{maltIng.name}</b>:
                      <span style={{ fontSize: '10pt' }}>
                        {maltIng.amount.value} {maltIng.amount.unit}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              Hops:
              <ul>
                {beer.ingredients.hops.map((hopsIng, idx) => {
                  return (
                    <li key={hopsIng.name + idx}>
                      <b>{hopsIng.name}</b>:
                      <span style={{ fontSize: '10pt' }}>
                        {hopsIng.amount.value} {hopsIng.amount.unit} (add at:
                        {hopsIng.add} attribute: {hopsIng.attribute})
                      </span>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              Yeast:
              <ul>
                <li>
                  <b>{beer.ingredients.yeast}</b>
                </li>
              </ul>
            </li>
          </ul>
        </Descriptions.Item>
        <Descriptions.Item label="Brewing Method" span={3}>
          <ul>
            <li>
              Mash:
              <ul>
                {beer.method.mash_temp.map((mash, idx) => {
                  return (
                    <li key={idx}>
                      {mash.temp.value}° {mash.temp.unit} for {mash.duration}
                      minutes
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              Fermentation:
              <ul>
                <li key={new Date().getTime()}>
                  {beer.method.fermentation.temp.value}°
                  {beer.method.fermentation.temp.unit}
                </li>
              </ul>
            </li>
            {beer.method.twist && (
              <li>
                Twist:
                <ul>
                  <li key={beer.id}>{beer.method.twist}</li>
                </ul>
              </li>
            )}
          </ul>
        </Descriptions.Item>
        <Descriptions.Item label="Food Pairing" span={3}>
          <ul style={{ marginLeft: '10px', marginBottom: '10px' }}>
            {beer.food_pairing.map((foodPairing, idx) => {
              return (
                <li style={{ marginBottom: '5px' }} key={idx}>
                  {foodPairing}
                </li>
              );
            })}
          </ul>
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default BeerDetails;
