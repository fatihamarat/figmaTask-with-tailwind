import React from 'react';
import logo1 from "/home/fatih/app/src/components/opener/MAIN.png"
import logo2 from "/home/fatih/app/src/components/opener/WHITE_BLUR.png"

function Opener() {
  return (
    <div className='w-9/12 h-492px m-auto grid justify-items-stretch'>
      <div className='w-392px h-492px grid justify-items-stretch justify-self-end max-w-fit'>
        <img className="w-387.83px h-487.85px justify-self-end z-10"
            src={logo1}
            alt="mainlogo" />
        <img className="w-387.83px h-487.85px absolute inset-y-20 right-0 white"
            src={logo2}
            alt="blurlogo" />
      </div>
     

    </div>
  )
}

export default Opener;