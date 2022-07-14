import { newE2EPage } from '@stencil/core/testing';

describe('lib-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lib-tag></lib-tag>');

    const element = await page.find('lib-tag');
    expect(element).toHaveClass('hydrated');
  });
});
