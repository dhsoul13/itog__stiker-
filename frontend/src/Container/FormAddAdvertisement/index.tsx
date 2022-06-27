import React from 'react';
import FormAddPage from '../../component/Page/FormAddPage';
import { useSelectorGet } from '../../hooks/useDateAdd';

const FormAddAdvertisement = () => {
  const { isAdmin } = useSelectorGet('Auth', 'Auth');
  return <FormAddPage isAdmin={isAdmin} />;
};

export default FormAddAdvertisement;
