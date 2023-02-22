export async function getContent(file: string) {
    try {
        return await import(`./markdown/${file}.md`);
    } catch {
        return null;
    }
}

export async function getContents() {
    return import.meta.glob('./markdown/*.md');
}