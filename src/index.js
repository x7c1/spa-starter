import * as content from "./content";
import * as main from "./main";

content.render();
main.render();

if (module.hot) {
  module.hot.accept('./content', () => {
    content.clean();
    content.render();
  });
  module.hot.accept('./main', () => {
    main.clean();
    main.render();
  });
}
