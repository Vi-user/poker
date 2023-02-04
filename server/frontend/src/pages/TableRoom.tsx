import React from 'react';
import Chat from '../components/Chat/Chat';
import Table_poker from '../components/Poker-table/Poker_table';
import './TableRoom.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useAppSelector } from '../hooks/hook';

const TableRoom = (): JSX.Element => {
  // const thisPlayer = useSelector((state: RootState) => state.player);
  // console.log('tableRoom thisPlayer', thisPlayer);
  const { player } = useAppSelector((state) => state.player);
  console.log('tableRoom player', player);

  return (
    <>
      <h1>TableRoom</h1>
      <section className='tableroom__table'>
        <Table_poker />
      </section>
      <section className='tableroom__chat'>
        <Chat />
      </section>
    </>
  );
};

export default TableRoom;
