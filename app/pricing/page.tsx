import Plancard from '@/components/Plancard'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center bg-feature-bg  py-10 lg:min-h-[900px]">
      <div className='mb-2 mt-8 text-center'>
        <h1 className='font-bold text-5xl mb-5'>Pricing</h1>
        <p className='text-lg'>Choose the right Pricing and get started</p>
      </div>
      <div className='flex flex-col gap-8 p-10 lg:flex-row'>
        <Plancard
          name="Basic Plan"
          description="Get started with the Basic Plan"
          price="9.99"
          features={["Real Offline Maps", "Basic Scheduling"]}
          color="#74c476"
        />
        <Plancard
          name="Premium Plan"
          description="Access all premium features with the Premium Plan"
          price="29.99"
          features={["Real Offline Maps", "Advanced Scheduling", "AR Experiences", "Premium Support"]}
          color="#006d2c"
        />
        <Plancard
          name="Pro Plan"
          description="Unlock more features with the Pro Plan"
          price="19.99"
          features={["Real Offline Maps", "Advanced Scheduling", "AR Experiences"]}
          color="#31a354"
        />

      </div>
    </div>
  )
}

export default page
