import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Artur Zajączkowski",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet harum accusamus vel impedit necessitatibus corporis fugit earum, consequuntur facere, dolores enim sunt? Nobis eos placeat, reiciendis impedit et voluptas fuga. Vivamus est eros, mollis ut bibendum in, ultricies eget dolor. ",
    },
    {
        id: 2,
        title: "Czym jest paradoks Ferminiego",
        author: "Mariusz Kowalski",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        id: 3,
        title: "Ciemna materia i ciemna energia",
        author: "J.W. Smith",
        text: "Ut laoreet tristique scelerisque. Vestibulum vel arcu neque. Sed rhoncus nec neque vel varius. Morbi ac ipsum molestie, cursus nibh aliquet, lacinia metus. Pellentesque porta ullamcorper finibus.",
    }
]
const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    )
}

export default HomePage;