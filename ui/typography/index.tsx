import styled from 'styled-components'

export const Titulo = styled.h1`
   color: ${(props:any)=>props.bg} ;
   font-size: 2.5rem;
   text-align: center;
`
export const SubTitle = styled.h3`
   font-size: 1.2rem;
   text-align: center;
`
export const Body = styled.p`
   color:${((props:any)=>props.$bg)|| "#fff"} ;
   font-weight: 300;
   font-size: 0.9rem;
   text-align: center;
`
