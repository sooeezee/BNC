import CategorySlider from '../../components/CategorySlider/CategorySlider';
import { useEffect, useState } from 'react';
import MainSlider from '../../components/MainSlider/MainSlider';
import { Helmet } from 'react-helmet';


export default function Home() {

  useEffect(() => {
      document.title = 'BNC';
    }, []);
  return (
    <>
      <Helmet>BNC</Helmet>
      <MainSlider />
      <CategorySlider />
      
    </>
  );
}
