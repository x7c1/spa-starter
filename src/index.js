import * as content from "./layouts/sample/content";
import './index.css';

content.render();

if (module.hot) {
  module.hot.accept('./layouts/sample/content', () => {
    content.clean();
    content.render();
  });
}
