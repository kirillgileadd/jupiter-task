import React, {FC, useEffect, useRef, useState} from 'react';
import {GallerySection, GalleryList, GalleryInner} from "./GalleryStyles";
import {Container} from "../../GlobalStyles";
import Categories from "../../components/Caregories/Categories";
import Button from "../../components/UI/Button";
import {ICard} from "../../models/ICard";
import axios from "axios";
import GalleryItem from "./GalleryItem";

const Gallery: FC = () => {
    const [cards, setCards] = useState<ICard[]>([])
    const [page, setPage] = useState<number>(1)
    const [activeCard, setActiveCard] = useState<number | null>(null)
    const cardRef = useRef()
    console.log(cardRef);

    useEffect(() => {
        (async function () {
            const response = await axios.get<ICard[]>(`http://localhost:3001/cards?_expand=category&_limit=9&_page=${page}`)
            setCards(prev => [...prev, ...response.data])
        }())
    }, [page])

    const onChangeActiveCard = (e: any) => {
        console.log(e.path)
        console.log(cardRef)
        if(!e.path.includes(cardRef.current)) {
            setActiveCard(null)
        }
    }

    useEffect(() => {
        document.addEventListener('click', onChangeActiveCard)
        return () => document.removeEventListener('click', onChangeActiveCard)
    }, [])

    const loadMoreCards = () => {
        setPage(prev => prev + 1)
    }

    return (
        <GallerySection>
            <Container>
                <GalleryInner>
                    <Categories/>
                    <GalleryList>
                        {cards.map(card =>
                            <GalleryItem
                                ref={cardRef}
                                key={card.id}
                                active={activeCard === card.id}
                                onSelect={setActiveCard}
                                {...card}
                            />
                        )}
                    </GalleryList>
                    <Button onClick={loadMoreCards} primary>Load More</Button>
                </GalleryInner>
            </Container>
        </GallerySection>
    );
};

export default Gallery;