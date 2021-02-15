import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { FC } from 'react';

const Home: FC = () => <div />;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  context.res.writeHead(301, {
    Location: `/beer`,
  });
  context.res.end();

  return { props: {} };
};

export default Home;
