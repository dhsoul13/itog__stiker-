import React from 'react';
import AddAdvertisementPage from '../../component/Page/AddAdvertisementPage';
import { useSelectorGet } from '../../hooks/useDateAdd';

const AddAdvertisementContainer = () => {
  const data = useSelectorGet('Data', 'Data');
  return <AddAdvertisementPage data={data} />;
};

export default AddAdvertisementContainer;
