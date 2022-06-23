import React, {FC, useState} from 'react';
import {CategoryList, CategoryItem} from './CategoriesStyles'
import Select from "../UI/Select";

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

const Categories: FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('')

    const onChangeActiveCategory = (value: string) => {
        setActiveCategory(value)
    }

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
            <Select options={categories} defaultValue={"Show All"} value={activeCategory} onChange={setActiveCategory}/>
        </>
    );
};

export default Categories;