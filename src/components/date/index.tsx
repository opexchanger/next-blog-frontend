import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './date.module.scss';

export interface dateProps {
  children: string;
}

export default function FormattedDate({ children }: dateProps) {
  const date = parseISO(children);

  return (
    <time dateTime={children} className={styles.date}>
      {format(date, `d 'de' MMMM 'de' yyyy`, { locale: ptBR })}
    </time>
  );
}
