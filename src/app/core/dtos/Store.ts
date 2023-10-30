import Store, {StatsCategories} from "../models/store";

export interface StoreDTO {
  id?: string;
  data: Store;
}

export type StatsCategoriesDTO = StatsCategories[];
