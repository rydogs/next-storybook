import React from 'react';

import RecipeItem from '../components/recipeItem';

export default {
    title: 'Example/RecipeItem',
    component: RecipeItem,
    parameters: {
        initialUser: {
            isLoading: true,
        },
        layout: 'centered',
    },
};

export const Template = () => <RecipeItem />
