import {Injectable} from "@angular/core";

@Injectable(
  {
    providedIn: "root"
  })
export default class Settings {
  storeId = "ijpxNJLM732vm8AeajMR";
  allProductFields = ['title', 'category', 'price', 'description', 'employee'];
  defaultProductFields = [this.allProductFields[0], this.allProductFields[1], this.allProductFields[2]];
}
