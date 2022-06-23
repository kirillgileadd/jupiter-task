import React, {Dispatch, FC, LegacyRef, MutableRefObject, SetStateAction} from 'react';
import {GalleryItemCard, GalleryItemTitle, GalleryItemCardContent, GalleryItemCategory} from "./GalleryStyles";
import {ICard} from "../../models/ICard";

interface GalleryItemProps extends ICard {
    active: boolean;
    onSelect: Dispatch<SetStateAction<number | null>>;
}

const GalleryItem: FC<GalleryItemProps> = ({img, id, onSelect, active,title,categoryId, category}) => {

    const setActiveCard = () => {
        onSelect(id)
    }

    return (
        <GalleryItemCard active={active} onClick={setActiveCard}>
            <div ></div>
            <GalleryItemCardContent>
                <GalleryItemCategory>{category.name}</GalleryItemCategory>
                <GalleryItemTitle>{title}</GalleryItemTitle>
            </GalleryItemCardContent>
            <img src={img} alt=""/>
        </GalleryItemCard>
    );
};

export default GalleryItem;