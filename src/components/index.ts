export async function getComponentFiles(files: string[]) {
    return Promise.all(files.map(async file => ({
        file: file.split('/').at(-1), 
        content: (await import(`./ui/${file}?raw`)).default
    })));
}