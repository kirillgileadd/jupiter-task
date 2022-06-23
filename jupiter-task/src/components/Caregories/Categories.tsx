import React, {FC, useState} from 'react';
import {CategoryList, CategoryItem} from './CategoriesStyles'
import Select from "../UI/Select";
import {ICategory} from "../../models/ICategory";

const categories = [
    {
        "id": 1,
        "name": "Design"
    },
    {
        "id": 2,
        "name": "Branding"
    },
    {
        "id": 3,
        "name": "Illustration"
    },
    {
        "id": 4,
        "name": "Motion"
    }
]

interface CategoriesProps  {
    categories: ICategory[]
    onChangeActiveCategory: (category: string) => void;
    activeCategory: string;
}

const Categories: FC<CategoriesProps> = ({categories, onChangeActiveCategory, activeCategory}) => {
    return (
        <>
            <CategoryList>
                <CategoryItem
                    onClick={() => onChangeActiveCategory('')}
                    active={Boolean(activeCategory === '')}
                >Show All
                </CategoryItem>
                {categories.map(category =>
                    <CategoryItem
                        onClick={() => onChangeActiveCategory(String(category.id))}
                        key={category.id}
                        active={activeCategory === String(category.id)}
                    >
                        {category.name}
                    </CategoryItem>
                )}
            </CategoryList>
            <Select options={categories} defaultValue={"Show All"} value={activeCategory} onChange={onChangeActiveCategory}/>
        </>
    );
};

export default Categories;