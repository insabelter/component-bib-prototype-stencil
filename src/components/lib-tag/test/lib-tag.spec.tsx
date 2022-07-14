import { newSpecPage } from '@stencil/core/testing';
import { LibTag } from '../lib-tag';

describe('lib-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LibTag],
      html: `<lib-tag></lib-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <lib-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lib-tag>
    `);
  });
});
