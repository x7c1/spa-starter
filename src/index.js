import * as content from "./layouts/sample";
import './index.css';

content.render();

if (module.hot) {
  module.hot.accept('./layouts/sample', () => {
    content.clean();
    content.render();
  });
}
