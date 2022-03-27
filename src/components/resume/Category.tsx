import React from "react";
import * as styles from "./Category.module.scss";

interface CategoryProps {
    title: string;
}

interface CategoryState {}

class Category extends React.Component<CategoryProps, CategoryState> {
    render = () => {
        return (
            <article className={styles.container}>
                <header className={styles.title}>
                    <h1>{this.props.title}</h1>
                </header>
                <main className={styles.content}>{this.props.children}</main>
            </article>
        );
    };
}

export default Category;
