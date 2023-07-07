import React from 'react';
import { IoCaretBackOutline } from 'react-icons/io5';

const Support = () => {
  return (
    <div className='max-w-[790px] mt-[20px] w-full h-screen mx-auto flex flex-col justify-center'>
      <div className='flex justify-start items-center mb-6'>
        <a href="/">
          <IoCaretBackOutline className='text-2xl' />
        </a>
      </div>
      <div>
        <div className='text-4xl my-4 font-bold'>
          Question
        </div>
        <div className='text-3xl font-bold'>
          How to get the key:
          <br />
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/tnSNdHDzrvg'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            style={{ margin: '20px 0' }}
          ></iframe>
        </div>
        <div className='text-3xl mt-6 font-bold'>
          Find a bug/issue:
        </div>
        <div className='text-2xl pl-4'>
          <ul className='list-disc'>
            <li>
              Report it in the channel <strong>🔧┇report-bug</strong>
            </li>
          </ul>
        </div>
        <div className='text-3xl mt-6 font-bold'>
          Need help:
        </div>
        <div className='text-2xl pl-4'>
          <ul className='list-disc'>
            <li>
              Ask Helper Bot using <strong>/help</strong>
            </li>
            <li>
              If the bot doesn't provide a satisfying answer, type in the general chat and ask for help from helpers or other users who might have an answer for you.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Support;
