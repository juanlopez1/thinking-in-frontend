import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import clsx from 'clsx';

type ButtonCardProps = PropsWithChildren & {
    className?: ButtonHTMLAttributes<HTMLButtonElement>['className'];
    title?: string;
    onClick?: () => void;
};

export const ButtonCard: FC<ButtonCardProps> = ({ children, className, title, onClick }) => (
    <button type="button" className={clsx('button-card', className)} onClick={onClick}>
        {title && <span className="button-card__title">{title}</span>}
        {children}
    </button>
);
