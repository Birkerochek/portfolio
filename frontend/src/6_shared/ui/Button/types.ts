export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primaryOutline' | 'primary' | 'black';
  label?: React.ReactNode;
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}
