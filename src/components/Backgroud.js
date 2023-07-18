import React from 'react';
import Spline from '@splinetool/react-spline';
import './Background.css';

export default function Background() {
  const spline_url = "https://prod.spline.design/Z-pKguv2uhkuchiv/scene.splinecode"
  return (
    <div className="spline-container">
      <div className="gradient-overlay"></div>
      <Spline scene={spline_url} />
    </div>
  );
}
