export default (state = null 
    /* Reducers should never return 'undefined',
     thats why a default value 'null' is assigned to 'state'*/
     , action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;

    }
};

