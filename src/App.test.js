import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should set result onClick', () => {
    const app = mount(<App />);

    expect(app).toBe(null);

  })
})
