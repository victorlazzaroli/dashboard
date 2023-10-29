import {Injectable} from "@angular/core";

@Injectable(
  {
    providedIn: "root"
  })
export default class Settings {
  storeId = "ijpxNJLM732vm8AeajMR";
  siteTitle = "Dolci di Piera";
  allProductFields = ['id', 'title', 'category', 'price', 'description', 'employee', 'reviews'];
  defaultProductFields = [this.allProductFields[1], this.allProductFields[2], this.allProductFields[3]];
}
