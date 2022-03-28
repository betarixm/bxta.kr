import React from "react";
import * as styles from "./Experience.module.scss";

interface ExperienceProps {
    title: string;
    role: string;
    period: [Date, Date | null];
}

interface ExperienceState {}

class Experience extends React.Component<ExperienceProps, ExperienceState> {
    render = () => {
        const withContent: boolean = React.Children.count(this.props.children) > 0;

        return (
            <section className={styles.container}>
                <header className={`${styles.title} ${withContent ? styles.withContent : ""}`}>
                    <h2>{this.props.title}</h2>
                    <ul className={styles.metadata}>
                        <li className={styles.role}>{this.props.role}</li>
                        <li className={styles.period}>
                            {this.props.period
                                .map((t) =>
                                    t instanceof Date
                                        ? Intl.DateTimeFormat("default", {
                                              month: "2-digit",
                                              year: "numeric",
                                          }).format(t)
                                        : "Ongoing"
                                )
                                .join(" - ")}
                        </li>
                    </ul>
                </header>
                <main className={`${styles.content} ${withContent ? styles.withContent : ""}`}>
                    {this.props.children}
                </main>
            </section>
        );
    };
}

export default Experience;
