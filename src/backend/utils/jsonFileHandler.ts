import { promises as fs } from "fs";

export const loadJsonFile = async (path: string): Promise<any> => {
    try {
        const data = await fs.readFile(path, 'utf-8');
        return JSON.parse(data);
    } catch(e) {
        throw new Error(`${e.message}, Failed to load file`);
    }
};

export const writeToJsonFile = async (path: string, data: object): Promise<object | void> => {
    try {
        return await fs.writeFile(path, JSON.stringify(data));
    } catch(e) {
        throw new Error(`${e.message}, Failed to write file`);
    }
}
