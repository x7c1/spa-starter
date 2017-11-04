import * as sample from './layouts/samples';
import './index.scss';

sample.render();

if (module.hot) {
  module.hot.accept('./layouts/samples', () => {
    sample.clean();
    sample.render();
  });
}
