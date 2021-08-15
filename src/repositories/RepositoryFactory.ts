import { Repository } from './Repository';
import { UserRepository } from './UserRepository';

const repositories: {
    [ alias: string ]: { new( ...args: any[] ): Repository };
} = {
    user: UserRepository,
};

export const RepositoryFactory = {
    get: ( name: string ) => new repositories[ name ],
};
