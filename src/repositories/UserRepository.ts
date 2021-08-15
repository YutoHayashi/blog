import { AxiosResponse } from 'axios';
import { Repository } from './Repository';

const namespace = '/user';

export class UserRepository extends Repository {

    public async register( payload: {
        [ Key: string ]: string | number | boolean
    } ) {
        return await this._instance.post( namespace, payload, ).then( ( response: AxiosResponse<{ data: {  } }> ) => response.data );
    }

}
