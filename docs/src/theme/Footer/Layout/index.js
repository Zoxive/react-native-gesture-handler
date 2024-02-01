import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Moon from '@site/src/components/Moon'
import usePageType from '@site/src/hooks/usePageType';


export default function FooterLayout({ style, links, logo, copyright }) {
  const { isLanding } = usePageType();

  return (
    <footer
      className={clsx('footer', isLanding && styles.footerLanding, {
        'footer--dark': style === 'dark',
      })}>
        {isLanding && <div className={styles.sponsorsBackground}> <Moon/> </div>}
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
