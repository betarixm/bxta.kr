import React from "react";

import * as styles from "./Footer.module.scss";

interface FooterProps {}

interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
    render = () => {
        return (
            <footer>
                <div className={styles.container}>
                    <div className={styles.inner}>
                        <div className={styles.title}>bxta.kr</div>
                        <div className={styles.content}>
                            © {new Date().getFullYear()} Gwon Minjae
                        </div>
                    </div>
                </div>
            </footer>
        );
    };
}

export default Footer;
