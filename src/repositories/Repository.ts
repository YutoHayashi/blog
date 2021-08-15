import axios, { AxiosInstance, } from 'axios';

const instance = axios.create( {
    baseURL: `${ process.env.GATSBY_WP_URL }`,
    timeout: 1000,
    responseType: 'json',
} );

export class Repository {
    public _instance: AxiosInstance;
    public constructor(  ) {
        this._instance = instance;
    }
}
