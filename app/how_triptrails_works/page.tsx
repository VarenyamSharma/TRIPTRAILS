import FAQ from '@/components/FAQ';
import React from 'react';


const Page = () => {
  return (
    <div className='flex flex-col container  bg-feature-bg bg-no-repeat py-10 lg:min-h-[650px]'>
      <h1 className='font-bold text-2xl mb-3 text-center'>How Trip Trails Work?</h1>
      
      
      <p className='mt-6 ml-20 pr-20'>
        {/* Render FAQ component here wrapped in a <p> tag */}
        <FAQ />
      </p>
    </div>
  );
};

export default Page;

