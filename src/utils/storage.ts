
// para los paises favoritos

const FAVORITES_KEY = 'country_explorer_favorites';

export function getFavorites(): string[] {
    const favs = localStorage.getItem(FAVORITES_KEY);
    return favs ? JSON.parse(favs) : [];
}

export function toggleFavorite(countryCode: string): void {
    let favs = getFavorites();
    if (favs.includes(countryCode)) {
        favs = favs.filter(code => code !== countryCode);
    } else {
        favs.push(countryCode);
    }
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
}

export function clearAllFavorites(): void {
    localStorage.removeItem(FAVORITES_KEY);
}