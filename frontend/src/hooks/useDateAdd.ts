import { useSelector } from 'react-redux';

function useSelectorGet(reducer:string, name:string) {
  const data = useSelector((state: any) => state[reducer][name]);
  return data;
}

export { useSelectorGet };
