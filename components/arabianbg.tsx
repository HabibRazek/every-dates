import Image from 'next/image'
import React from 'react'

const Arabian = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-transparent z-0"></div>
      <Image
        src="/assets/arabianbg.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="pointer-events-none z-[-1] opacity-20"
      />
    </div>
  )
}

export default Arabian
