import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>('../assets/images/*', {
  eager: true,
});

const images = new Map(
  Object.entries(modules).map(([path, module]) => [path.split('/').pop()!, module.default]),
);

export function getLocalImage(filename: string): ImageMetadata {
  const image = images.get(filename);

  if (!image) {
    throw new Error(`Unknown local image: ${filename}`);
  }

  return image;
}
