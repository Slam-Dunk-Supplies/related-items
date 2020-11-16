import { configure, shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
configure({ adapter: new Adapter() });

import App from './Client/src/components/App.jsx';

describe("App", () => {
  it("renders correctly", () => {
    shallow(<App />);
  });
});