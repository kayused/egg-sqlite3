/// <reference types="helper" />
/// <reference types="egg" />
import { helper } from 'helper';

interface ClientConfig {
    file: string;
}

interface SingleSqliteConfig {
    client: ClientConfig;
    app: Boolean;
    agent: Boolean;
}

declare module 'egg' {
    interface Application {
        sqlite3: Singleton<helper> | helper;
    }
    interface Singleton<T> {
        get(id: string): T;
    }
    interface EggAppConfig {
        sqlite3: SingleSqliteConfig;
    }
}