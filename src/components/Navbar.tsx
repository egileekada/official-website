import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo.png'

export default function (props: any) {

  const [tab, setTab] = React.useState('')
  const [color, setColor] = React.useState('')
  const navigate = useNavigate();

  React.useEffect(() => { 
    if(tab !== ''){
      localStorage.setItem('color', 'dark')
      setColor('dark')
    }else { 
      localStorage.setItem('color', '')
      setColor('')
    } 

    if(tab === "faq"){
      localStorage.setItem('color', '')
      setColor('')
    }

    if(tab === ''){ 
        navigate('/'+tab) 
    } else if(tab === 'rider'){
        navigate('/'+tab)
    } else if(tab === 'driver'){  
        navigate('/'+tab)
    } else if(tab === 'faq'){  
      navigate('/'+tab)
    } else if(tab === 'subscription'){  
      navigate('/'+tab)
    }   
    localStorage.setItem('index', tab)
  }, [tab, color])

  React.useEffect(() => {
    if(localStorage.getItem('tab')){ 
      setTab(localStorage.getItem('tab')+'')
    } 
  }, []) 

  const ClickHandler =(item: any)=>{  
    setTab(item)
  }

  return (
    <div style={color === 'dark' ? {backgroundColor: 'rgba(2, 4, 5, 0.7)', height: '80px'} : {backgroundColor: '#FFFFFF', height: '80px'}} className='w-full flex items-center px-6 lg:px-12' >
      <div className='flex cursor-pointer item-center' >
      <svg onClick={()=> props.open()} className='mr-4 lg:hidden' height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg" >
        <path className='fill-current text-[#1084FA]' d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
      </svg>
        <img onClick={()=> ClickHandler('')} src={Logo} alt='logo' className=' h-8 cursor-pointer ' />
        <p onClick={()=> ClickHandler('')}  className={color === 'dark' ? 'ml-4 lg:flex hidden font-CircularStd-Regular lg:text-3xl text-white text-xl' : 'ml-4 lg:flex hidden font-CircularStd-Regular text-xl lg:text-3xl'} >Everest</p>
      </div>
      <div className='mx-auto hidden lg:flex item-center mt-2' >
        {/* <Link to='/rider' > */}
          <p onClick={()=> ClickHandler('rider')} style={color === 'dark' ? {color: '#FFFFFF'}: {color: '#727272'}} className={tab === 'rider' ? 'font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 ' : 'font-CircularStd-Regular cursor-pointer mx-6 pb-2 '} >Rider</p>
          {/* </Link>  */}
        {/* <Link to='/driver'   > */}
          <p onClick={()=> ClickHandler('driver')} style={color === 'dark' ? {color: '#FFFFFF'} : {color: '#727272'}} className={tab === 'driver' ? 'font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 ' : 'font-CircularStd-Regular cursor-pointer mx-6 pb-2 '} >Driver</p>
          {/* </Link> */}
        {/* <Link to='/faq'  > */}
          <p onClick={()=> ClickHandler('faq')} style={color === 'dark' ? {color: '#FFFFFF'} : {color: '#727272', borderColor: '#727272'}} className={tab === 'faq' ? 'font-CircularStd-Regular border-b cursor-pointer mx-6 pb-2 ' : 'font-CircularStd-Regular cursor-pointer mx-6 pb-2 '} >FAQ</p>
          {/* </Link> */}
        {/* <Link to='/subscription'  > */}
          <p onClick={()=> ClickHandler('subscription')} style={color === 'dark' ? {color: '#FFFFFF'} : {color: '#727272'}} className={tab === 'subscription' ? 'font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 ' : 'font-CircularStd-Regular cursor-pointer mx-6 pb-2 '} >Subscription</p>
          {/* </Link> */}
        {/* // <Link to='/rider'  > */}
          <p onClick={()=> ClickHandler('rider')} style={color === 'dark' ? {color: '#FFFFFF'} : {color: '#727272'}} className={tab === '' ? 'font-CircularStd-Regular border-b border-white cursor-pointer mx-6 pb-2 ' : 'font-CircularStd-Regular cursor-pointer mx-6 pb-2 '} >White paper</p>
          {/* // </Link> */}
      </div>
      <button style={color === 'dark' ? {backgroundColor: '#FFF', color: '#222222'} : {backgroundColor: '#0B85FD', color: '#FFF'}} className='rounded-xl w-auto px-5 lg:px-0 lg:w-36 text-sm ml-auto lg:ml-0 h-12' >Buy $EVR</button>
    </div>
  )
}
