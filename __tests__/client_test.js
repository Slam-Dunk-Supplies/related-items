import { configure, shallow } from 'enzyme';
import App from '../Client/src/components/App.jsx';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Arrow from '../Client/src/components/Arrow.jsx';



configure({ adapter: new Adapter() });

test("App renders correctly", () => {
  shallow(<App />);
});
