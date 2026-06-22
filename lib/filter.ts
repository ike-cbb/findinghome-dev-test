import { ListingProperty } from "./data";

export interface FilterState {
  search: string;
  community: string;
  bedrooms: string;
  developer: string;
  completionYear: string;
  priceRange: string;
}

export function filterListings(
  listings: ListingProperty[],
  filters: FilterState
): ListingProperty[] {
  return listings.filter((property) => {
    // Search text: match title, community, developer
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const searchable = [
        property.title,
        property.community,
        property.developerName,
      ]
        .join(" ")
        .toLowerCase();
      if (!searchable.includes(q)) return false;
    }

    // Community filter
    if (filters.community && filters.community !== "all") {
      if (property.community !== filters.community) return false;
    }

    // Bedroom filter
    if (filters.bedrooms && filters.bedrooms !== "all") {
      const beds = property.bedrooms.toLowerCase();
      if (filters.bedrooms === "studio") {
        if (!beds.includes("studio")) return false;
      } else {
        const bedNumber = filters.bedrooms;
        // Match exact bedroom count (e.g., "7" matches "7" but also "| 7" and "7 |")
        const bedPattern = new RegExp(`\\b${bedNumber}\\b`);
        if (!bedPattern.test(beds)) return false;
      }
    }

    // Developer filter
    if (filters.developer && filters.developer !== "all") {
      if (
        property.developerName.toLowerCase() !== filters.developer.toLowerCase()
      )
        return false;
    }

    // Completion year filter
    if (filters.completionYear && filters.completionYear !== "all") {
      if (property.completionYear !== filters.completionYear) return false;
    }

    // Price range filter
    if (filters.priceRange && filters.priceRange !== "all") {
      const [minStr, maxStr] = filters.priceRange.split("-");
      const min = parseInt(minStr, 10);
      const max = parseInt(maxStr, 10);
      if (property.priceMax < min || property.priceMin > max) return false;
    }

    return true;
  });
}

export const defaultFilters: FilterState = {
  search: "",
  community: "all",
  bedrooms: "all",
  developer: "all",
  completionYear: "all",
  priceRange: "all",
};
