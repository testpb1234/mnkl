import classNames from 'classnames';
import styles from './mkln.module.scss';

export interface MklnProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Mkln = ({ className }: MklnProps) => {
    return <div className={classNames(styles.root, className)}>Mkln</div>;
};
