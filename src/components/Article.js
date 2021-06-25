import React from 'react';

const styles = {
    marginTop: 40,

}

const Article = (props) => {
    return (
        <article style={styles}>
            <h4 style={{ marginBottom: 3, textTransform: "uppercase" }}>{props.title}</h4>
            <span style={{ display: "block", marginBottom: 10, fontSize: 12 }}>{props.author}</span>
            <p style={{ fontSize: 15 }}>{props.text}</p>
        </article>
    )
}

export default Article;