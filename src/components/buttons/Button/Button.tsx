import styles from './Button.module.scss';

type ButtonProps = {
  text: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
  className?: string;
}

export function Button(
  {
    text,
    onClick,
    type = 'button',
    isDisabled = false,
    className
  }: ButtonProps
) {

  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      type={type}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}