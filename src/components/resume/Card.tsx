import React from "react";

import * as styles from "./Card.module.scss";

interface CardProps {
    title: string;
}

interface CardState {}

class Card extends React.Component<CardProps, CardState> {
    render = () => {
        return (
            <section className={styles.container}>
                <header className={styles.title}>
                    <h3>{this.props.title}</h3>
                </header>
                <main className={styles.content}>{this.props.children}</main>
            </section>
        );
    };
}

export default Card;
