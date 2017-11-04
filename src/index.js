import * as sample from "./layouts/sample";
import './index.scss';

sample.render();

if (module.hot) {
  module.hot.accept('./layouts/sample', () => {
    sample.clean();
    sample.render();
  });
}
