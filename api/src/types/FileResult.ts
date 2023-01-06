export type FileResult = {
    name: string;
    isDirectory: boolean;
    path: string;
    ext?: string;
    size?: number;
    creationDate?: Date;
    permissions?: any;
}