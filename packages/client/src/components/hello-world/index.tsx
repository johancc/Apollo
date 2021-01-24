import React from 'react';
import styles from './hello-world.css';

const HelloWorld = ({ title }: { title: string }) => (
  <div className={styles['hello-world']}>{title}</div>
);

export default HelloWorld;
