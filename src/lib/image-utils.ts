/**
 * Validates if a URL is a valid image URL and returns a placeholder if not
 * @param imageUrl - The image URL to validate
 * @param width - Width for placeholder image (default: 400)
 * @param height - Height for placeholder image (default: 300)
 * @returns Valid image URL or placeholder URL
 */
export function getValidImageUrl(
  imageUrl: string | undefined | null,
  width: number = 400,
  height: number = 300
): string {
  // Default placeholder
  const placeholder = `https://picsum.photos/${width}/${height}?random=${Math.floor(
    Math.random() * 1000
  )}`;

  // Check if imageUrl is empty, null, or undefined
  if (!imageUrl || imageUrl.trim() === "") {
    return placeholder;
  }

  try {
    // Try to create a URL object to validate the URL format
    const url = new URL(imageUrl);

    // Check if it's a valid HTTP/HTTPS URL
    if (!["http:", "https:"].includes(url.protocol)) {
      return placeholder;
    }

    // Check if the URL contains common image file extensions
    const imageExtensions = [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".webp",
      ".svg",
      ".bmp",
      ".ico",
    ];
    const pathname = url.pathname.toLowerCase();
    const hasImageExtension = imageExtensions.some((ext) =>
      pathname.includes(ext)
    );

    // Check if it's a known image service domain
    const imageServiceDomains = [
      "picsum.photos",
      "loremflickr.com",
      "images.unsplash.com",
      "images.ctfassets.net",
      "cdn.pixabay.com",
      "images.pexels.com",
    ];
    const isImageService = imageServiceDomains.some((domain) =>
      url.hostname.includes(domain)
    );

    // If it has image extension or is from a known image service, return the original URL
    if (hasImageExtension || isImageService) {
      return imageUrl;
    }

    // For other URLs (like Google search results), return placeholder
    return placeholder;
  } catch (error) {
    // @typescript-eslint/no-unused-vars
    // If URL parsing fails, return placeholder
    return placeholder;
  }
}

/**
 * Alternative function that returns a themed placeholder based on product category
 * @param imageUrl - The image URL to validate
 * @param category - Product category for themed placeholder
 * @param width - Width for placeholder image
 * @param height - Height for placeholder image
 * @returns Valid image URL or themed placeholder URL
 */
export function getValidImageUrlWithCategory(
  imageUrl: string | undefined | null,
  category?: string,
  width: number = 400,
  height: number = 300
): string {
  // If URL is valid, return it
  const validUrl = getValidImageUrl(imageUrl, width, height);

  // If it's not the original URL (meaning it was invalid), create a themed placeholder
  if (validUrl !== imageUrl && category) {
    const categoryKeywords = {
      electronics: "technology,computer",
      clothing: "fashion,clothes",
      books: "book,library",
      home: "house,interior",
      sports: "sport,fitness",
      food: "food,meal",
      beauty: "cosmetics,beauty",
      toys: "toy,children",
      automotive: "car,vehicle",
      jewelry: "jewelry,luxury",
    };

    const keyword =
      categoryKeywords[
        category.toLowerCase() as keyof typeof categoryKeywords
      ] || "product";
    return `https://loremflickr.com/${width}/${height}/${keyword}?random=${Math.floor(
      Math.random() * 1000
    )}`;
  }

  return validUrl;
}
