declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.module.scss" {
  const classes: { readonly [key: string]: string };
  export default classes;
}
