export default function checkFileSize(file: any): boolean {
  if (!file) return false;

  const size = file.size / 1024 / 1024;

  return !(size >= 5);
}
