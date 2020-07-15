import Axios from 'axios';
import {CONFIG} from './Config';

export const GetListCharacter = async (nextPage: number) => {
  const link = `${CONFIG.baseLink}${CONFIG.contextApi}/?page=${nextPage}`;
  return Axios.get(link);
};
