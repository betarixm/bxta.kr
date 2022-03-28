import React from "react";
import Footer from "./Footer";

import * as styles from "./Layout.module.scss";

interface LayoutProps {}

interface LayoutState {}

class Layout extends React.Component<LayoutProps, LayoutState> {
    render = () => {
        return (
            <div className={styles.wrapper}>
                <div>{this.props.children}</div>
                <Footer />
            </div>
        );
    };
}

export default Layout;
