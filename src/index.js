import * as sample from "./layouts/sample";
import * as main from "./main";
import './index.scss';

sample.render();
main.render();

if (module.hot) {
  module.hot.accept('./layouts/sample', () => {
    sample.clean();
    sample.render();
  });
  module.hot.accept('./main', () => {
    main.clean();
    main.render();
  });
}
