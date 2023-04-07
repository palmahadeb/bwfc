import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {FaAngleDown} from "react-icons/fa"
const Navbar = () => {
   let [navbarData,setNavbarData] =useState({})
   let [loading,setLoading] = useState(true)


  useEffect(()=>{
    async  function nav(){
        let navbar =await axios.get("https://bwfc-api.vercel.app/navbar")
        setNavbarData(navbar.data)
        setLoading(false)
    }
    nav()
  })

  if(loading){
    return
  }
 
  return (
    <div className='max-w-container mx-auto mt-7'>
        
        <div className='flex justify-between items-center'>
            <div className='w-{10%}'>

            <img src={navbarData.logo}/>

            </div>


            <div className='w-{58%}'>
                    <ul className='flex justify-center gap-x-10 font-man font-normal text-sm '>

                    {navbarData.navItems.map(nitem =>(
                   <li className='transition duration-500 ease-in-out hover:text-primary'>{nitem.item}
                      {nitem.dropDown && 

                            <>
                                <FaAngleDown/>

                                <ul>
                                    <div>{nitem.dropDownItem.map(ditem=>(

                                        <li>{ditem.dropItem} text</li>
                                
                                
                                    ))}</div>
                             </ul>

                            </>
                          }
                    </li>
                     
               
                    ))}

                    </ul>
            </div>

             <div className='w-{34%} flex justify-end gap-x-2.5'>

                        {navbarData.buttonOne.visibility &&
                        <a className='px-9 py-4 inline-block font-man font-semibold text-sm hover:bg-primary rounded-lg hover:text-white transition duration-500 ease-in-out' href>{navbarData.buttonOne.text}</a>
                        }
                        {navbarData.buttonTwo.visibility &&
                        <a className='bg-primary px-9 py-4 inline-block text-white font-man font-semibold text-sm rounded-lg border border-solid border-primary hover:bg-transparent hover:text-primary transition duration-500 ease-in-out' href>{navbarData.buttonTwo.text}</a>
                        }
                        {navbarData.buttonThree.visibility &&
                        <a className='bg-primary px-9 py-4 inline-block text-white font-man font-semibold text-sm rounded-lg border border-solid border-primary hover:bg-transparent hover:text-primary transition duration-500 ease-in-out' href>{navbarData.buttonThree.text}</a>
                        }
            
            </div>

        </div>
       
    </div>
  )
}

export default Navbar