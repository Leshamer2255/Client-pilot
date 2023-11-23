import React from 'react';
import styles from './ReadyBlock.module.css';

const ReadyBlock = () => {
  return (
    <div className={styles.ReadyBlockContainer}>
      <h2>Are you ready to begin?</h2>
      <p>Sing up now or contact for question.</p>
      <button>GET STARTED</button>
      <button>CONTACT SALES</button>
    </div>
  );
};

export default ReadyBlock;