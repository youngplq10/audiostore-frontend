export const removeSpaces = (value: string): string =>{
    value = value.replaceAll(" ", "-");
    return value.toLowerCase();
}