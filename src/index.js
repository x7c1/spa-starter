import { sharedStore } from './setup/sharedStore';
import * as sample from './layouts/samples';
import * as main from './layouts/ReactRoot/main';
import './index.scss';

sample.render();
main.render(sharedStore);

if (module.hot) {
  module.hot.accept('./layouts/samples', () => {
    sample.clean();
    sample.render();
  });
  module.hot.accept(
    [
      './layouts/ReactRoot/main',
      './setup/sharedStore',
    ],
    () => {
      main.clean();
      main.render(sharedStore);
    },
  );
}
