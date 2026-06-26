import { ListingProperty } from "./data";

export interface FilterState {
  search: string;
  community: string;
  propertyType: string;
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

    // Property type filter
    if (filters.propertyType && filters.propertyType !== "all") {
      const types = property.propertyTypes.toLowerCase();
      const singleType = (property.propertyType || "").toLowerCase();
      const types2 = (property.propertyTypes2 || []).map(t => t.toLowerCase());
      const category = filters.propertyType.toLowerCase();

      // Build a combined searchable string from all type fields
      const allTypes = `${types} ${singleType} ${types2.join(" ")}`;

      // Apartment matches: studio, apartment, 1-3 bedrooms (smaller units without villa/townhouse)
      if (category === "apartment") {
        const isSmallUnit = /\b(?:studio|apartment|1\s*bedroom|2\s*bedroom|3\s*bedroom)\b/i.test(allTypes);
        const isVillaOrTownhouse = /\b(?:villa|townhouse|4\s*bedroom|5\s*bedroom|6\s*bedroom|7\s*bedroom)\b/i.test(allTypes);
        if (!isSmallUnit || isVillaOrTownhouse) return false;
      }
      // Villa matches: villa, 4-7 bedrooms
      else if (category === "villa") {
        if (!/\b(?:villa|4\s*bedroom|5\s*bedroom|6\s*bedroom|7\s*bedroom)\b/i.test(allTypes)) return false;
      }
      // Other categories: direct substring match against all type fields
      else if (!allTypes.includes(category)) {
        return false;
      }
    }

    // Community filter
    if (filters.community && filters.community !== "all") {
      if (property.community !== filters.community) return false;
    }

    // Bedroom filter
    if (filters.bedrooms && filters.bedrooms !== "all") {
      const beds = property.bedrooms.toLowerCase();
      const value = filters.bedrooms;

      if (value === "Studio") {
        if (!beds.includes("studio")) return false;
      } else if (value === "5+ Bed") {
        // Match 5, 6, 7, 8 bedrooms
        if (!/[5-9]/.test(beds) && !/\b1[0-9]\b/.test(beds)) return false;
      } else {
        // "1 Bed", "2 Bed", "3 Bed", "4 Bed" — extract the number
        const num = value.match(/\d+/)?.[0];
        if (num) {
          const pattern = new RegExp(`\\b${num}\\b`);
          if (!pattern.test(beds)) return false;
        }
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
  propertyType: "all",
  bedrooms: "all",
  developer: "all",
  completionYear: "all",
  priceRange: "all",
};
