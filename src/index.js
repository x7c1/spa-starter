import * as content from "./content";
import * as root from "./root";

content.render();
root.render();

if (module.hot) {
  module.hot.accept('./content', () => {
    content.clean();
    content.render();
  });
  module.hot.accept('./root', () => {
    root.clean();
    root.render();
  });
}
