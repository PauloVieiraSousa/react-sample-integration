import commentsReducers from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';
import { exportAllDeclaration } from '@babel/types';

it('handles action of type SAVE_COMMENT', () => {
    const action = {
        type : SAVE_COMMENT,
        payload: 'New Comment'
    };
    const newState = commentsReducers([], action);
    expect(newState).toEqual(['New Comment']);
})

it('handles action with unknow type', () => {
    const action = {
        type: 'UNKNOW',
    };
    const newState = commentsReducers([], action);
    expect(newState).toEqual([]);
});

