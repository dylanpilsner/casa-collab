import styled from 'styled-components'

export const Titulo = styled.h1`
   color: ${(props:any)=>props.bg} ;
   font-size: 2.5rem;
   text-align: center;

`
export const SubTitle = styled.h2`
   font-size: 1.5rem;
   text-align: center;

`
export const Body = styled.p<any>`
   color:#575757;
   font-weight: 300;
   font-size: 1rem;
   text-align:  ${((props:any)=>props.$align)||'center'};
   @media (max-width: 1020px) {
      text-align: center !important;
  }
`
