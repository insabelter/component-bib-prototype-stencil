import { newSpecPage } from '@stencil/core/testing';
import { LibTagInput } from '../lib-tag-input';

describe('lib-tag-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LibTagInput],
      html: `<lib-tag-input></lib-tag-input>`,
    });
    expect(page.root).toEqualHtml(`
      <lib-tag-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lib-tag-input>
    `);
  });
});
