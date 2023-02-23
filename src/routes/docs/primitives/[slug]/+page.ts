import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getContent } from '@/content';
import { getCode } from "@/examples";
import { getComponentFiles } from '@/components';

export const load = (async ({ params }) => {

    const docs = await getContent(params.slug);
    
    if (!docs) {
        throw error(404, 'Not found');
    }

    return {
        ...docs,
        lazy: {
            source: getCode(docs.attributes.example),
            files: getComponentFiles(docs.attributes.files, docs.attributes.baseDir)
        }
    };
 
  
}) satisfies PageLoad;