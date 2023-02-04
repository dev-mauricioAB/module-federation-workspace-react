export interface HeaderProps {
  title: string;
  actionLinks?: ActionLinkProps[];
  clickLogo?: () => void;
}

interface ActionLinkProps {
  label: string;
  enabled: boolean;
  onClick?: () => any;
}
