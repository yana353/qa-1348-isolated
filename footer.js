const DEFAULT_LINKS = [
  { label: 'Privacy', href: '#privacy' },
  { label: 'Terms', href: '#terms' },
  { label: 'Accessibility', href: '#accessibility' },
];

/**
 * Create the site's footer without requiring a framework or a runtime service.
 *
 * @param {HTMLElement} target Element into which the footer is rendered.
 * @param {{brand?: string, links?: Array<{label: string, href: string}>, copyright?: string}} [options]
 * @returns {HTMLElement} The rendered footer element.
 */
export function renderFooter(target, options = {}) {
  if (!(target instanceof HTMLElement)) {
    throw new TypeError('renderFooter target must be an HTMLElement');
  }

  const brand = options.brand || 'qa-1348-isolated';
  const links = Array.isArray(options.links) ? options.links : DEFAULT_LINKS;
  const copyright = options.copyright || `© ${new Date().getFullYear()} ${brand}`;

  target.replaceChildren();
  target.classList.add('site-footer');
  target.setAttribute('aria-label', 'Footer');

  const inner = document.createElement('div');
  inner.className = 'site-footer__inner';

  const identity = document.createElement('div');
  identity.className = 'site-footer__identity';

  const mark = document.createElement('span');
  mark.className = 'site-footer__mark';
  mark.setAttribute('aria-hidden', 'true');
  mark.textContent = '↗';

  const name = document.createElement('span');
  name.className = 'site-footer__name';
  name.textContent = brand;
  identity.append(mark, name);

  const nav = document.createElement('nav');
  nav.className = 'site-footer__nav';
  nav.setAttribute('aria-label', 'Footer links');

  for (const link of links) {
    if (!link || typeof link.label !== 'string' || typeof link.href !== 'string') {
      continue;
    }
    const anchor = document.createElement('a');
    anchor.className = 'site-footer__link';
    anchor.href = link.href;
    anchor.textContent = link.label;
    nav.append(anchor);
  }

  const legal = document.createElement('p');
  legal.className = 'site-footer__copyright';
  legal.textContent = copyright;

  inner.append(identity, nav, legal);
  target.append(inner);
  return target;
}

if (typeof document !== 'undefined') {
  const footerRoot = document.querySelector('[data-footer]');
  if (footerRoot) {
    renderFooter(footerRoot, {
      brand: footerRoot.dataset.brand,
    });
  }
}
