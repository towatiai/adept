import { getContents } from '@/content/server';
import type { LayoutServerLoad } from './$types';

const folder = "./components"

export const load = (async ({ params }) => {
    const components = await getContents();

    return {
        components: components.map(c => c.split('.')[0]).sort()
    };
    
}) satisfies LayoutServerLoad;