import React from "react";

interface EntryProps {
    title: string;
    tags: string[];
}

interface EntryState {}

class Entry extends React.Component<EntryProps, EntryState> {
    render = () => {
        return (
            <section>
                <header>
                    <h3>{this.props.title}</h3>
                    <ul>
                        {this.props.tags.map((t) => {
                            return <li>{t}</li>;
                        })}
                    </ul>
                </header>

                <main>
                    <p>{this.props.children}</p>
                </main>
            </section>
        );
    };
}

export default Entry;
