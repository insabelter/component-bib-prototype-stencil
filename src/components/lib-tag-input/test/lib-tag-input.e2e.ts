import { newE2EPage } from '@stencil/core/testing';

describe('lib-tag-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lib-tag-input></lib-tag-input>');

    const element = await page.find('lib-tag-input');
    expect(element).toHaveClass('hydrated');
  });
});
