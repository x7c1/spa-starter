const debug = require('debug')('spa-starter:SampleArea');

export class SampleArea {

  /**
   * @param nodes
   * @param {string} html
   * @param {Function} render - void => void
   */
  static from(nodes, { html, render }) {
    return new SampleArea({
      onHtml: f => {
        f(html);
        render();
      },
      clean: () => {
        const { label, content } = nodes;
        while (content.firstChild) {
          content.removeChild(content.firstChild);
        }
        debug(`<- clean : ${label}`);
      },
    });
  }

  /**
   * @param {Function} onHtml - (string => void) => void
   * @param {Function} clean - void => void
   */
  constructor({ onHtml, clean }) {
    this.onHtml = onHtml;
    this.clean = clean;
  }

  append(area) {
    const onHtml = f => this.onHtml(html1 =>
      area.onHtml(html2 => f(html1 + '\n' + html2))
    );
    const clean = () => {
      this.clean();
      area.clean();
    };
    return new SampleArea({ onHtml, clean });
  }
}
