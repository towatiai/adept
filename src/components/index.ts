const componentsSvelte = import.meta.glob('./ui/**/*.svelte', { as: 'raw' });
const componentsTs = import.meta.glob('./ui/**/*.svelte', { as: 'raw' });

export async function getComponentFiles(files: string[]) {
    if (!files?.length) {
        return [];
    }

    return Promise.all(files.map(async file => ({
        file: file.split('/').at(-1), 
        content: file.endsWith('.svelte') 
            ? await componentsSvelte[`./ui/${file}`]?.()
            : await componentsTs[`./ui/${file}`]?.()
    })));
}