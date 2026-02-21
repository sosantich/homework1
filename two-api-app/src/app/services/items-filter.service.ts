import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item.interface';

@Injectable({ providedIn: 'root' })
export class ItemsFilterService {
  filterItems(
    items: Item[],
    searchText: string,
    selectedGender: string,
    selectedSpecies: string,
    selectedStatus: string,
  ): Item[] {
    const f = searchText.trim().toLowerCase();

    return items.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(f) ||
        item.species.toLowerCase().includes(f) ||
        item.status.toLowerCase().includes(f) ||
        item.gender.toLowerCase().includes(f) ||
        item.origin.toLowerCase().includes(f) ||
        item.quote.toLowerCase().includes(f) ||
        item.author.toLowerCase().includes(f);

      const matchesGender =
        !selectedGender || item.gender.toLowerCase() === selectedGender.toLowerCase();
      const matchesSpecies =
        !selectedSpecies || item.species.toLowerCase() === selectedSpecies.toLowerCase();
      const matchesStatus =
        !selectedStatus || item.status.toLowerCase() === selectedStatus.toLowerCase();

      return matchesSearch && matchesGender && matchesSpecies && matchesStatus;
    });
  }
}
