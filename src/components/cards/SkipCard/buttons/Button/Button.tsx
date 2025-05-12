import styles from './Button.module.scss';

type ButtonProps = {
  text: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  isDisabled?: boolean;
}

export function Button({ text, onClick, type = 'button', isDisabled = false }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick} type={type} disabled={isDisabled}>
      {text}
    </button>
  );
}