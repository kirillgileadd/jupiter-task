import React, {Dispatch, FC, MutableRefObject, SetStateAction} from 'react';
import {GalleryItemCard, GalleryItemTitle, GalleryItemCardContent, GalleryItemCategory} from "./GalleryStyles";
import {ICard} from "../../models/ICard";

interface GalleryItemProps extends ICard {
    active: boolean;
    onSelect: Dispatch<SetStateAction<number | null>>;
    ref: MutableRefObject<undefined>
}

const GalleryItem: FC<GalleryItemProps> = ({img, ref, id, onSelect, active,title,categoryId, category}) => {

    const setActiveCard = () => {
        onSelect(id)
    }

    return (
        // @ts-ignore
        <GalleryItemCard ref={ref} active={active} onClick={setActiveCard}>
            <GalleryItemCardContent>
                <GalleryItemCategory>{category.name}</GalleryItemCategory>
                <GalleryItemTitle>{title}</GalleryItemTitle>
            </GalleryItemCardContent>
            <img src={img} alt=""/>
        </GalleryItemCard>
    );
};

export default GalleryItem;