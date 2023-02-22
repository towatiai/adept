const cache: {[key: string]: { component?: ConstructorOfATypedSvelteComponent, code?: string }} = {};

export async function getExample(file: string) {
    if (cache[file]?.component) return cache[file].component;
    const component = (await import(`./components/${file}.svelte`)).default;
    cache[file] ??= {};
    cache[file].component = component;
    return component;
}

export async function getCode(file: string) {
    if (cache[file]?.code) return cache[file].code;
    const code = (await import(`./components/${file}.svelte?raw`)).default;
    cache[file] ??= {};
    cache[file].code = code;
    return code;
}