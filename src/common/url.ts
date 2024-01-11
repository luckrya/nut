export function cleanResolvePath(_path: string) {
  return _path.replaceAll("//", "/");
}
