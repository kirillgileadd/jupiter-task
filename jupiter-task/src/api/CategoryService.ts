import {AxiosResponse} from "axios";
import {$api} from "./index";
import {ICard} from "../models/ICard";

export default class CategoryService {
    static async fetchCategories(): Promise<AxiosResponse<ICard[]>> {
        return $api.get<ICard[]>('/categories')
    }
}