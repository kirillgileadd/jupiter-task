import {AxiosResponse} from "axios";
import {$api} from "./index";
import {ICard} from "../models/ICard";

export default class CardService {
    static async fetchCards(limit: number, page: number, activeCategory: string): Promise<AxiosResponse<ICard[]>> {
        return $api.get<ICard[]>('/cards', {
           params: {
               _expand: 'category',
               _limit: limit,
               _page: page,
               ...(activeCategory ? { categoryId: activeCategory } : {})
           }
        })
    }
}