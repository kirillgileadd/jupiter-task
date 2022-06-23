import React from 'react';
import Header from "./components/Header/Header";
import Title from "./sections/Title/Title";
import Gallery from "./sections/Gallery/Gallery";

// logo
// select styles
// font
// adobe xd
// Обработаь события лоадин и ерор
// hide active card outline Повторное нажатие убирает подсветку.
// 9. На десктопе, если есть выбранная картинка, при нажатии кнопки "Del" картинка должна удаляться.
// После чего она не должна больше отображаться в том числе при переключении категорий.


function App() {
    return (
        <>
            <Header/>
            <Title/>
            <Gallery/>
        </>
    );
}

export default App;
