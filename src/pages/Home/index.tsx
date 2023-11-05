import React from 'react';
import img from '@/asset/img/1.jpg'
import styles from './index.module.less';

interface IProps {
  // staticContext?: StaticRouterProps['context']
}

const Home: React.FC<IProps> = (props) => {
  // props.staticContext && (props.staticContext.url = '/about');

  return (
    <div>
      <h1>Home</h1>
      <div
        className={styles.imgWrapper}
      >
        <img src={img} alt="" />
      </div>
      <button onClick={() => {
        alert(123666)
      }} >alert</button>
    </div>
  )
}

export default Home;
