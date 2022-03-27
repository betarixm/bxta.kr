import React from "react";

interface CategoryProps {
    title: string;
}

interface CategoryState {}

class Category extends React.Component<CategoryProps, CategoryState> {
    render = () => {
        return (
            <article>
                <header>
                    <h1>{this.props.title}</h1>
                </header>
                <main>{this.props.children}</main>
            </article>
        );
    };
}

export default Category;
