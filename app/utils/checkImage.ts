export default function checkImage(file: any): boolean {
  if (!file) return false;
  console.log(file);
  return ["image/jpg", "image/jpeg", "image/png"].includes(file.type);
}
