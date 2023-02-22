import fs from "fs/promises";

const folder = "./src/content/markdown/";

export const getContents = async () => {
    return await fs.readdir(folder);
}