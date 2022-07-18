import { newSpecPage } from '@stencil/core/testing';
import { LibCard } from '../lib-card';

describe('lib-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LibCard],
      html: `<lib-card></lib-card>`,
    });
    expect(page.root).toEqualHtml(`
      <lib-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lib-card>
    `);
  });
});
