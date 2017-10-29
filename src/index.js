import * as content from "./layouts/sample";
import './index.css';

content.render();

if (module.hot) {
  module.hot.accept('./layouts/sample/index', () => {
    content.clean();
    content.render();
  });
}
