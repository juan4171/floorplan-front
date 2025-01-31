/* eslint-disable @typescript-eslint/no-explicit-any */

export const capitalizeFirstLetter = (string: string) => {
    return string
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

export const removeSpecialCharacters = (string: string) => {
    return string
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .trim()
}