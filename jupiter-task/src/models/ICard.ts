export interface ICard {
    id: number;
    title: string;
    categoryId: number;
    img: string;
    category: {
        id: number;
        name: string;
    }
}