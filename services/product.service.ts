import { ProductResponse } from '../app-types/product.type';
import {AxiosResponse, http} from './https.service';

export async function getProduct(): Promise<AxiosResponse<ProductResponse>> {
  try {
    const response = await http.get<ProductResponse>(
      'https://api.codingthailand.com/api/course',
    );
    return response;
  } catch (error) {
    throw error;
  }
}
