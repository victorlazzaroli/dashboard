import {ProductDTO} from "../../../core/dtos/Product";
import {PageEvent} from "@angular/material/paginator";

export function compareFunction(list: ProductDTO[] | null, text: string | null): ProductDTO[] {
  // Ritorna tutta la lista se il testo è vuoto o la lista è vuota
  if (!text || !list) {
    return list || [];
  }

  // cerca in ogni elemento dell'oggetto se il testo è contenuto
  return list.filter(product => {
    if (product?.data) {
      return JSON.stringify(Object.values(product.data)).includes(text)
    }

    return false;
  })
}

export function paginatorFunction(list: ProductDTO[] | null, page: PageEvent | null): ProductDTO[] {
  if (!list || !page) {
    return [];
  }
  const skip = page.pageIndex === 0 ? 0 : page.pageIndex * page.pageSize;
  return list.slice(skip, skip + page.pageSize)
}
