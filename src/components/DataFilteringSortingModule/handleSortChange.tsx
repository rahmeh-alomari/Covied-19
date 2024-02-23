export const handleSortChange = (field: string, dispatch: any) => {
    switch (field) {
        case 'positive-des':
            dispatch({ type: 'TOGGLE_SORT_POSITIVE', ascending: false });
            break;
        case 'negative-asc':
            dispatch({ type: 'TOGGLE_SORT_NEGATIVE', ascending: true });
            break;
        default:
            break;
    }
};
