export type FileResult = {
    name: string;
    isDirectory: boolean;
    path: string;
    ext?: string;
    size?: Number;
    creationDate?: Date;
    permissions?: any;
}