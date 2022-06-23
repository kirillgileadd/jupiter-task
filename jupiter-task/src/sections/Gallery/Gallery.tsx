import React, {FC, useEffect, useState} from 'react';
import {GalleryInner, GalleryList, GallerySection} from "./GalleryStyles";
import {Container} from "../../GlobalStyles";
import Categories from "../../components/Caregories/Categories";
import Button from "../../components/UI/Button";
import GalleryItem from "./GalleryItem";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setPage} from "../../store/slices/cardSlice";
import {fetchCards} from "../../store/action-creators/card";
import {fetchCategory} from "../../store/action-creators/cartgory";
import {setActiveCategory} from "../../store/slices/categorySlice";

const Gallery: FC = () => {
    const dispatch = useAppDispatch()
    const {cards, totalPages, loading, page ,error} = useAppSelector(state => state.cards)
    const {categories, activeCategory} = useAppSelector(state => state.categories)
    const [activeCard, setActiveCard] = useState<number | null>(null)

    useEffect(() => {
        const params = {page, activeCategory}
        dispatch(fetchCards(params))
    }, [page, activeCategory])

    useEffect(() => {
        dispatch(fetchCategory())
    }, [])

    const onChangeActiveCategory = (category: string) => {
        dispatch(setActiveCategory(category))
    }

    const loadMoreCards = () => {
        if(page < Number(totalPages)) {
            dispatch(setPage())
        } else {
            alert("There is all cards")
        }
    }

    // const onChangeActiveCard = (e: any) => {
    //     console.log(e.path)
    //     console.log(cardRef)
    //     if(!e.path.includes(cardRef.current)) {
    //         setActiveCard(null)
    //     }
    // }
    //
    // useEffect(() => {
    //     document.addEventListener('click', onChangeActiveCard)
    //     return () => document.removeEventListener('click', onChangeActiveCard)
    // }, [])


    return (
        <GallerySection>
            <Container>
                <GalleryInner>
                    <Categories
                        categories={categories}
                        onChangeActiveCategory={onChangeActiveCategory}
                        activeCategory={activeCategory}
                    />
                    <GalleryList>
                        {cards.map(card =>
                            <GalleryItem
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