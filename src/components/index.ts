const componentsSvelte = import.meta.glob('./ui/**/*.svelte', { as: 'raw' });
const componentsTs = import.meta.glob('./ui/**/*.ts', { as: 'raw' });

export async function getComponentFiles(files: string[], baseDir: string = "") {
    if (!files?.length) {
        return [];
    }

    return Promise.all(files.map(async file => ({
        file: file.split('/').at(-1), 
        content: file.endsWith('.svelte') 
            ? await componentsSvelte[`./ui/${baseDir ? baseDir + '/' : ''}${file}`]?.()
            : await componentsTs[`./ui/${baseDir ? baseDir + '/' : ''}${file}`]?.()
    })));
}