import styled from 'styled-components'

export const MainContainer = styled.main`
   display: flex;
   flex-direction: column;
   padding: 0 5%;
   gap:2rem;
   font-family: var(--main-font);
   @media (max-width: 1020px) {
      padding: 0 1%;
  }
`

export const Article = styled.article`
   text-align:center;
`

export const ContainerPrice = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   flex-wrap: wrap;
   border: 1px solid #D7D7D7;
   padding: 20px;
   border-radius: 20px;
   border-bottom: 4px solid #D6D7D6;
   border-left: 4px solid #D6D7D6;
   @media (max-width: 1020px) {
      padding: 5%;
      margin: 1rem 0.1rem;
  }
`
export const CheckDiv = styled.div`
   display: grid;
   gap: 0.5rem;
   grid-auto-rows: auto;
   grid-template-columns: repeat(1,auto 1fr);

`
export const PrimerContenedor = styled.div`
   display: grid;
   gap:2rem;
   grid-template-columns: repeat(3,1fr);
   align-items: center;
   text-align: center;
   margin-top: 4rem;
   @media (max-width: 1020px) {
      grid-template-columns: none;
      grid-template-rows: repeat(3,1fr);
  }
`
export const Button = styled.button`
   width:200px;
   height:50px;
   border:none;
   background-color:var(--main-orange);
   border-radius:5px;
   color:#fff;
   font-size:1.3rem;
   cursor:pointer
`
export const Input =styled.input`
   width: 100%;
   height: 2rem;
   border: none;
   border-bottom: 1px solid #87BFFF;
   :focus{
      border: 8px solid #87BFFF ;
   }
   :hover{
      border: 8px solid #87BFFF ;
   }
   :active{
      border: 8px solid #87BFFF ;
   }
`
export const Label =styled.label`
  display: block;
  font-weight: 600;
`