import styled from 'styled-components'
import Close from '@/ui/icons/close.svg'
import { useState } from 'react'

const Div = styled.div<any>`
    position: fixed;
    top: 10%;
    color: white;
    right: 10%;
    left: 10%;
    bottom: 10%;
    display: flex;
    background-color: #F5AC52;
    border-radius: 20px;
    font-size: 3rem;
    flex-direction: column;
    justify-content: right;
    align-items: end;
    padding: 20px;
`

export function Buy(props:any){

   const handleClick=(e:any)=>{
      e.preventDefault();
      props.closes(false)
   }

   return(
      <Div>
         <span onClick={handleClick} style={{cursor:"pointer"}}> <Close/></span>
         <div style={{width:"100%"}}>
            <h3 >Muchas gracias por tu compra</h3>
         </div>
      </Div>
   )
} 