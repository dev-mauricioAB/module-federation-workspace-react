declare module "componentsLibrary/Header" {
  interface HeaderProps {
    title: string;
    clickLogo?: () => void;
  }
  const Header: React.FC<HeaderProps>;

  export { Header };
}
declare module "componentsLibrary/Footer" {
  interface FooterProps {
    title: string;
  }
  const Footer: React.FC<FooterProps>;

  export { Footer };
}
