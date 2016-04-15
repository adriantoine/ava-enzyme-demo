import React from 'react';
import test from 'ava';
import {shallow, mount} from 'enzyme';
import Foo from '../src/Foo';

test('fails with an JSX contain expectation', t => {
	var actual = shallow(<Foo/>);
	var child = <div className="foo"/>;
	t.true(actual.contains(child));
});

test('fails with a tag expectation', t => {
	var actual = shallow(<Foo/>);
	t.is(actual.type(), 'span');
});

test('is a success with a mount and a child expectation', t => {
	var actual = mount(<Foo/>);
	t.is(actual.find('.foo').length, 1);
});
