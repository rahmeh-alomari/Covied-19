export function SortingReducer(state: any, action: any) {
    switch (action.type) {
      case 'TOGGLE_SORT_POSITIVE':
        if (state.sortBy === 'positive') {
          return {
            ...state,
            ascending: !state.ascending,
          };
        } else {
          return {
            ...state,
            sortBy: 'positive',
            ascending: true,
          };
        }
      case 'TOGGLE_SORT_NEGATIVE':
        if (state.sortBy === 'negative') {
          return {
            ...state,
            ascending: !state.ascending,
          };
        } else {
          return {
            ...state,
            sortBy: 'negative',
            ascending: true,
          };
        }
      case 'TOGGLE_SORT_DATE':
        if (state.sortBy === 'date') {
          return {
            ...state,
            ascending: !state.ascending,
          };
        } else {
          return {
            ...state,
            sortBy: 'date',
            ascending: true,
          };
        }
      default:
        return state;
    }
  }
  