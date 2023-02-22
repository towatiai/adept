import { getContents } from '@/content';
import type { LayoutLoad } from './$types';

async function loadComponentNames() {
    const components = await getContents();
    return Object.keys(components).map(c => c.split('.')[1].split('/').at(-1)).sort()
}

export const load = (async ({ params }) => {
    return {
        lazy: {
            components: loadComponentNames()
        }
    };
    
}) satisfies LayoutLoad;