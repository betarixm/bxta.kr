import React from "react";

interface CardProps {
    title: string;
}

interface CardState {}

class Card extends React.Component<CardProps, CardState> {
    render = () => {
        return (
            <section>
                <header>
                    <h3>{this.props.title}</h3>
                </header>
                <main>{this.props.children}</main>
            </section>
        );
    };
}

export default Card;
