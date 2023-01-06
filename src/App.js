import React, { useState } from 'react';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import { BsDot } from 'react-icons/bs';
import { useEffect } from 'react';
import Switch from './Switch';

function App() {
  const slidesUrl = [
    {
      url: 'https://images.unsplash.com/photo-1496564203457-11bb12075d90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2150&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];

  //state for Slider
  const [index, setIndex] = useState(0);
  //state, useEffect and handler for Dark Mode
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  const themeSwitchHandler = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  //buttons
  const prevSlide = () => {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? slidesUrl.length - 1 : index - 1;
    setIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = index === slidesUrl.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  };
  // dots
  const toSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  //
  const sliderStyles =
    'hidden group-hover:block absolute top-[60%] -translate-x-0 -translate-y-[50%] text-2xl text-white cursor-pointer bg-black/30 rounded-full transition ease-in-out delay-500';
  return (
    <div className='dark:bg-gray-900 bg-white h-screen w-screen transition-colors duration-500'>
      <div className='max-w-[1500px] h-[800px] w-full m-auto py-16 px-4 relative group '>
        <div className='flex justify-center '>
          <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white '>
            Tailwind CSS Slider
          </h1>
          <div className='absolute right-1 top-2 justify-center items-center dark:bg-gray-900 bg-white rounded-full darkswitch'>
            {/* <button
              className='dark:bg-white flex bg-gray-900 text-white dark:text-gray-900 shadow dark:shadow-yellow-500 shadow-indigo-500/40 p-4 rounded-3xl darkswitch'
              onClick={themeSwitchHandler}
            >
              <ImSwitch />
            </button> */}
            <div className='' onClick={themeSwitchHandler}>
              <Switch />
            </div>
          </div>
        </div>
        <div
          className='w-full h-full rounded-2xl bg-center bg-cover duration-500 '
          style={{ backgroundImage: `url(${slidesUrl[index].url})` }}
        >
          {/* Arrows */}
          <div
            onClick={prevSlide}
            // className='hidden group-hover:block absolute top-[60%] left-5 -translate-x-0 -translate-y-[50%] text-2xl text-white cursor-pointer bg-black/30 rounded-full transition ease-in-out delay-150'
            className={`right-5 + ${sliderStyles}`}
          >
            <VscChevronRight size={50} />
          </div>
          <div
            onClick={nextSlide}
            // className='hidden group-hover:block absolute top-[60%] right-5 -translate-x-0 -translate-y-[50%] text-2xl text-white cursor-pointer bg-black/30 rounded-full transition ease-in-out delay-150'
            className={`left-5 ${sliderStyles}`}
          >
            <VscChevronLeft size={50} />
          </div>
        </div>
        {/* Dots */}
        <div className='flex top-2 justify-center py-2'>
          {slidesUrl.map((slide, slideIndex) => (
            <div
              onClick={() => toSlide(slideIndex)}
              key={slideIndex}
              className='text-xl cursor-pointer dark:text-white text-gray-900 '
            >
              <BsDot />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
