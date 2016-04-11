import React from 'react';
import test from 'ava';
import { shallow, mount, render } from 'enzyme';
import Foo from '../src/Foo';

test("contains spec with an expectation", t => {
  t.truthy(shallow(<Foo />).contains(<div className="foo" />));
});

test("contains spec with an expectation", t => {
  t.truthy(shallow(<Foo />).is('.foo'));
});

test("contains spec with an expectation", t => {
  t.is(mount(<Foo />).find('.foo').length, 1);
});
