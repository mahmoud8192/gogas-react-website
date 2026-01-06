import { FaPlay } from "react-icons/fa";
function PlayVideoBtn({ onPlayVid }) {
  const style = {
    base: "_play-video-btn-container",
    play_btn:
      "btn w-30 h-30 flex bg-white justify-center items-center rounded-full",
    play_btn_icon: "text-[var(--color-9)] w-[30%] h-[30%]"
  };
  return (
    <div className={style.base}>
      <button
        onClick={() => {
          onPlayVid();
        }}
        className={style.play_btn}
      >
        {<FaPlay className={style.play_btn_icon} />}
      </button>
    </div>
  );
}

export default PlayVideoBtn;
