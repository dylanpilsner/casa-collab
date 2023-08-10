import style from "./style.module.css";

export function Loader({ visibility }: any) {
  const isVisible = visibility ? "flex" : "none";

  return (
    <div className={style.contenedor} style={{ display: isVisible }}>
      <div className={style.waveform}>
        <div className={style.waveform__bar}></div>
        <div className={style.waveform__bar}></div>
        <div className={style.waveform__bar}></div>
        <div className={style.waveform__bar}></div>
      </div>
    </div>
  );
}
