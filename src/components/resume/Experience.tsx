import React from "react";

interface ExperienceProps {
    title: string;
    role: string;
    period: [Date, Date | null];
}

interface ExperienceState {}

class Experience extends React.Component<ExperienceProps, ExperienceState> {
    render = () => {
        return (
            <section>
                <header>
                    <h2>{this.props.title}</h2>
                    <ul>
                        <li>{this.props.role}</li>
                        <li>
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
                <main>{this.props.children}</main>
            </section>
        );
    };
}

export default Experience;
