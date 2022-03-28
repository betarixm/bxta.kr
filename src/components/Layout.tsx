import React from "react";
import { Helmet } from "react-helmet";

import Footer from "./Footer";

import * as styles from "./Layout.module.scss";

interface LayoutProps {
    title: string;
}

interface LayoutState {}

class Layout extends React.Component<LayoutProps, LayoutState> {
    render = () => {
        return (
            <div className={styles.wrapper}>
                <Helmet title={`${this.props.title} — bxta.kr`} defer={false} />
                <div>{this.props.children}</div>
                <Footer />
            </div>
        );
    };
}

export default Layout;
