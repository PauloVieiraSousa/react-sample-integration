import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';


import Root from 'Root';


let wrapped;

beforeEach( ( )=> {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
})

it ('has a text area and a button', ( ) => {    
    expect( wrapped.find('textarea').length ).toEqual( 1 );
    expect( wrapped.find('button').length ).toEqual( 2 );
});

describe('the text area', () => {

    it ('has a text area taht users an type in', ( ) => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment'}
        });
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment'); 
    });
    
    it('when form is sumitted, text area gets emptied', ( ) => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comments'}
        });
        wrapped.update();
    
        wrapped.find('form').simulate('submit');
        wrapped.update()
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    
    });

});

