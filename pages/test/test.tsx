import { ComponentProps } from 'react';
import styles from './test.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type BProps = {
  children: React.ReactNode;
  variant?: 'red' | 'sky' | 'default';
  size?: 'sm' | 'lg';
  className?: React.ReactNode;
};

type ButtonProps = ComponentProps<'button'> & BProps;

export const Button = ({ children, variant, size, className, ...props }: ButtonProps) => {
  const buttonClass = cx(
    'button',
    {
      red: variant === 'red',
      sky: variant === 'sky',
      sm: size === 'sm',
      lg: size === 'lg',
    }
  );

  const classes = `${buttonClass} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};