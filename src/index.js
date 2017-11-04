import * as content from "./layouts/sample";
import './index.scss';

content.render();

if (module.hot) {
  module.hot.accept('./layouts/sample', () => {
    content.clean();
    content.render();
  });
}
