import style from "./style.module.css";

type Loader = {
  visibility: boolean;
};

export function Loader({ visibility }: Loader) {
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
