import { Storage as IStorage } from './contracts/storage';

class Storage<T> implements IStorage<T> {

    constructor() {
        throw new Error('Cannot create an instance of the abstract class Storage');
    }

    get(key: string): Promise<T> {
        throw new Error('Can not call method on abstract class');
    }

    set(key: string, value: T): Promise<void> {
        throw new Error('Can not call method on abstract class');
    }

    remove(key: string): Promise<void> {
        throw new Error('Can not call method on abstract class');
    }

}

export default Storage;
export { Storage };
