import { newE2EPage } from '@stencil/core/testing';

describe('lib-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lib-card></lib-card>');

    const element = await page.find('lib-card');
    expect(element).toHaveClass('hydrated');
  });
});
