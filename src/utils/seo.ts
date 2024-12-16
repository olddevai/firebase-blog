import type { MetaData } from '../types/ui';

export function generateMetaTags(metadata: MetaData): Record<string, string> {
  return {
    title: metadata.title,
    'og:title': metadata.title,
    description: metadata.description,
    'og:description': metadata.description,
    'og:type': metadata.type,
    'og:url': metadata.url,
    ...(metadata.image && { 'og:image': metadata.image }),
  };
}