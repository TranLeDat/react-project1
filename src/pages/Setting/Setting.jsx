
import clsx from "clsx";
import styles from './Setting.module.scss'


function Setting(){
    return(
        <>
            <div id="container" className={clsx(styles.container)}>
                <div className={clsx(styles.setting)}>
                    <ul className={clsx(styles.listItem)}>
                        <li className={clsx(styles.item)}>
                            <i className="fa-solid fa-globe"></i>
                            <h3 className={clsx(styles.title)}>Ngôn ngữ: <span>Tiếng việt</span> </h3>
                        </li>
                        <li className={clsx(styles.item)}>
                            <i className="fa-solid fa-file"></i>
                            <h3 className={clsx(styles.title)}>Giới thiệu</h3>
                        </li>
                        <li className={clsx(styles.item)}>
                            <i className="fa-solid fa-shield"></i>
                            <h3 className={clsx(styles.title)}>Chính sách bảo mật</h3>
                        </li>
                        <li className={clsx(styles.item)}>
                            <i className="fa-solid fa-flag"></i>
                            <h3 className={clsx(styles.title)}>Báo cáo</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Setting;