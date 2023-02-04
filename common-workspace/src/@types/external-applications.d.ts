declare module "ApplicationA/AppA" {
  interface AppBProps {
    clickLogo: () => void;
  }
  const AppA: React.FC<AppBProps>;

  export { AppA };
}
declare module "ApplicationB/AppB" {
  interface AppBProps {
    clickLogo: () => void;
  }
  const AppB: React.FC<AppBProps>;

  export { AppB };
}
