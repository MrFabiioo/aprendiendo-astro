import rss from '@astrojs/rss'
import type { APIRoute } from "astro";
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ params, request, site }) => {
   const blogPost = await getCollection('blog');
 return rss({
    //stylesheet: '/styles/styles.xsl',
    // `<title>` field in output xml
    title: 'Buzz’s Blog',
    // `<description>` field in output xml
    description: 'A humble Astronaut’s guide to the stars',
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: site ?? "",
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blogPost.map((post)=>({
      title: post.data.title,
      description: post.data.description,
      link:post.slug,
      pubDate:post.data.date

    })),
    // (optional) inject custom xml
    customData: `<language>es-co</language>`,
  });
};