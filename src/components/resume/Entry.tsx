import React from "react";
import * as styles from "./Entry.module.scss";

interface EntryProps {
    title: string;
    tags: string[];
}

interface EntryState {}

class Entry extends React.Component<EntryProps, EntryState> {
    render = () => {
        return (
            <section className={styles.container}>
                <header className={styles.title}>
                    <h3>{this.props.title}</h3>
                    <ul className={styles.tags}>
                        {this.props.tags.map((t) => {
                            return <li>{t}</li>;
                        })}
                    </ul>
                </header>

                <main className={styles.content}>
                    <p>{this.props.children}</p>
                </main>
            </section>
        );
    };
}

export default Entry;
