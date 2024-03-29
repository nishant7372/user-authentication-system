import styles from "./setting.module.css";

export default function Setting({ setting, settingNo, setSetting, active }) {
  const handleSetting = (settingNo) => {
    setSetting(settingNo);
  };
  return (
    <div
      className={`${styles["setting"]} ${styles[active ? "active" : ""]}`}
      onClick={() => handleSetting(settingNo)}
    >
      {setting}
    </div>
  );
}
