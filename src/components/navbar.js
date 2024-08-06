'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
function Navbar() {
  const isMounter = useRef();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1) {
        if (!isMounter.current) {
          isMounter.current = true;
        }
      } else {
        if (isMounter.current) {
          isMounter.current = false;
        }
      }
    });
    return () => window.removeEventListener('scroll', null);
  }, []);

  useEffect(() => {
    const scrollFunction = () => {
      let isShow = false;
      if (
        document.body.scrollTop > 600 ||
        document.documentElement.scrollTop > 600
      ) {
        isShow = true;
      } else {
        isShow = false;
      }
      if (isShow !== check) {
        check = isShow;
      }
    };
    window.addEventListener('scroll', scrollFunction);
    return () => window.removeEventListener('scroll', scrollFunction);
  }, []);

  const menus = [
    { label: 'ABOUT US', id: 'about' },
    { label: 'PRICING', id: 'pricing' },
    { label: 'CONTACT', id: 'contact' },
    { label: 'FAQ', id: 'faq' },
    { label: 'TERM OF SERVICE', id: 'tos' },
  ];
  function onClickMenu(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  function onClickLogo(id) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <div
      className='fixed top-0 h-[80px]  right-0 left-0 z-[100] bg-white'
      id='nav'>
      <div className='flex justify-between items-center h-full px-[100px] border-b-1 w-full box-shadow'>
        <div>
          <Image
            src='/img-logo.png'
            alt='Vercel Logo'
            width={134}
            height={100}
            className='hover:scale-105 duration-75 cursor-pointer active:scale-95'
            onClick={() => {
              onClickLogo();
            }}
          />
        </div>
        <button
          onClick={() => {
            console.log('vidu');
          }}></button>
        <div className='flex items-center  text-[#424242] font-bold text-xl'>
          {menus.map((item, index) => {
            return (
              <button
                key={item.index}
                className='ml-[40px] cursor-pointer hover:scale-105 duration-75 active:scale-95'
                onClick={() => {
                  onClickMenu(item.id);
                }}>
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
const logo = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='120'
    height='43'
    viewBox='0 0 120 43'
    fill='none'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M43.4599 -6.1499H-10.3779V49.7785H35.0273V52.92H123.892V24.6416H43.4599V-6.1499Z'
      fill='#09A4DD'
    />
  </svg>
);
