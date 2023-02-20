import axios, {AxiosResponse, AxiosError} from 'axios';

const http = axios.create({});

export {http};

export type {AxiosResponse , AxiosError};
