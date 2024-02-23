export function formatDate(dateString: any) {
    dateString = dateString.toString();
    const year = parseInt(dateString.substring(0, 4));
    const month = parseInt(dateString.substring(4, 6)) - 1; // Subtract 1 because months are zero-indexed
    const day = parseInt(dateString.substring(6, 8));
    const dateObject = new Date(year, month, day);
    console.log("Full date:", dateObject.toLocaleDateString());
    
    return  dateObject.toLocaleDateString();
}
