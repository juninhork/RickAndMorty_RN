import Axios from 'axios';
import {CONFIG} from './Config';

export const GetCharacter = async (ID: number) => {
  const link = `${CONFIG.baseLink}${CONFIG.contextApi}/${ID}`;
  return Axios.get(link);
};
