import style from './style.module.css'

export function Loader(){
   return (
      <div className={style.contenedor}>
         <div className={style.waveform}>
            <div className={style.waveform__bar}></div>
            <div className={style.waveform__bar}></div>
            <div className={style.waveform__bar}></div>
            <div className={style.waveform__bar}></div>
         </div>
      </div>
   )
} 