export async function getContent(file: string) {
    try {
        return await import(`./markdown/${file}.md`);
    } catch {
        return null;
    }
}