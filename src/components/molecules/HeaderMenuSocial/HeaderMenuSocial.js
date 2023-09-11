import React from 'react'

const HeaderMenuSocial = () => {
    return (
       <div className='flex justify-end flex-col align-bottom py-12'>
           <div>
               <p className='text-white' >New Business</p>
               <ul>
                   <li>
                       <a className='text-white' href="">hello@iyo.best</a>
                   </li>
                   <li>
                       <a className='text-white' href="">3124487473</a>
                   </li>
               </ul>
           </div>
           <div className='pt-12 '>
               <p className='text-white'>Visit Us</p>
               <ul>
                   <li>
                       <a className='text-white' href="">Wrocław 10-100</a>
                   </li>
                   <li>
                       <a className='text-white' href="">Sucha 1</a>
                   </li>
               </ul>
           </div>
       </div>

    )
}
export default HeaderMenuSocial
