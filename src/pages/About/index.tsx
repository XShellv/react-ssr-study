import React, { useEffect } from 'react';
import img from '@/asset/img/1.jpg'
import styles from './index.module.less';
import { createRoot, hydrateRoot } from 'react-dom/client';
import Test from './test';

function About() {

  useEffect(() => {
    createRoot(document.getElementById('about')!).render(<Test />)
    // 这里不能使用hydrateRoot，因为服务端渲染没有Test组件中的元素
    // hydrateRoot(document.getElementById('about')!, <Test />)
  }, [])

  return (
    <div>
      <h1>About</h1>
      <div id='about'></div>
    </div>
  )
}

export default About;
