import Link from 'next/link';
import Image from 'next/image';

import { FlagBrazil, FlagUsa } from '../../icons';

import styles from './header.module.scss';

const localeOptions = [
  {
    code: 'pt-BR',
    icon: FlagBrazil,
  },
  {
    code: 'en-US',
    icon: FlagUsa,
  },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a>
          <Image src='/logo.svg' alt='Logo' width='100' height='40' />
        </a>
      </Link>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
          <li className={styles.item}>Contato</li>
        </ul>
      </nav>

      <div className={styles.localeSwitcher}>
        <ul>
          {localeOptions.map(({ code, icon: Icon }) => (
            <li key={code}>
              <Icon />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
