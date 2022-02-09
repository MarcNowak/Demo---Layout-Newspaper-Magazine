import React from 'react';
import ReactPlayer from 'react-player';

import styles from './Video.module.scss';

class ResponsivePlayer extends React.Component {
  render () {
    return (
      <div className={styles.playerWrapper}>
        <ReactPlayer
          className={styles.reactPlayer}
          url='https://www.youtube.com/watch?v=rHvPqAqy-ww'
          width='100%'
          height='100%'
        />
      </div>
    );
  }
}

export default ResponsivePlayer;
