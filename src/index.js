import * as content from "./content";

content.render();

if (module.hot) {
  module.hot.accept('./content', () => {
    content.clean();
    content.render();
  });
}
