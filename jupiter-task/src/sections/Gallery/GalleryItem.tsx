import React, {Dispatch, FC, LegacyRef, MutableRefObject, SetStateAction, useEffect} from 'react';
import {GalleryItemCard, GalleryItemTitle, GalleryItemCardContent, GalleryItemCategory} from "./GalleryStyles";
import {ICard} from "../../models/ICard";
import {useKeyPress} from "../../hooks/useKey";

interface GalleryItemProps extends ICard {
    activeCard: number | null;
    onSelect: Dispatch<SetStateAction<number | null>>;
    onChangeActiveCategory: (category: string) => void;
    onDelete: (event: any) => void;
}

const GalleryItem: FC<GalleryItemProps> =
    ({
         img,
         onChangeActiveCategory,
         onDelete,
         id,
         onSelect,
         activeCard,
         title,
         categoryId,
         category
     }) => {

        const isActive = activeCard === id
        const keypress = useKeyPress('Delete')

        useEffect(() => {
            if(isActive) {
                console.log('done');
                onDelete(id)
            }
        }, [keypress])

        const setActiveCard = () => {
            if (isActive) {
                onSelect(null)
            } else {
                onSelect(id)
            }
        }

        return (
            <GalleryItemCard
                active={isActive}
                onClick={setActiveCard}
            >
                <GalleryItemCardContent>
                    <GalleryItemCategory onClick={(e) => {
                        e.stopPropagation()
                        onChangeActiveCategory(category.id.toString())
                    }}>{category.name}</GalleryItemCategory>
                    <GalleryItemTitle>{title}</GalleryItemTitle>
                </GalleryItemCardContent>
                <img src={img} alt=""/>
            </GalleryItemCard>
        );
    };

export default GalleryItem;