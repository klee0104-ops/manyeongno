/** Runtime URLs must follow the same base directory as Vite's compiled CSS. */
export function assetPath(path: string, base = import.meta.env.BASE_URL): string {
  return `${base.replace(/\/?$/, '/')}${path.replace(/^\/+/, '')}`;
}
