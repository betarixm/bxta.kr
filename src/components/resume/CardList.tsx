import React from "react";
import Card from "./Card";

import * as styles from "./CardList.module.scss";

interface CardListProps {
    children: React.ReactElement<Card>[] | React.ReactElement<Card>;
}

interface CardListState {}

class CardList extends React.Component<CardListProps, CardListState> {
    render = () => {
        return <section className={styles.container}>{this.props.children}</section>;
    };
}

export default CardList;
