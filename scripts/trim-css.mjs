import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = join(__dirname, '..', 'public', 'production.css');
const output = join(__dirname, '..', 'public', 'production.css');

// STRICTLY minimal: only what's actually used in the Next.js app
// dangerouslySetInnerHTML only has <p> and <br> tags - no WP block classes at all
const keepPatterns = [
  /@charset/,
  /@font-face/,
  /@keyframes/,
  
  // CSS Modules (Header, Footer, Main, SkipNavigationLink, SectionNav)
  /Header_bar/, /Header_logo/, /Header_nav-toggle/, /Header_primary-navigation/,
  /Header_right_item/, /Header_num/, /Header_fav/, /Header_login/,
  /Footer_footer/, /Footer_ftr_wrap/, /Footer_copyright/, /Footer_logo_item/, /Footer_nav/,
  /Main_main/, /SkipNavigationLink_component/,
  /SectionNav_/,
  
  // ToggleBar hamburger animation
  /toggleBar/, /button\[aria-expanded/,
  
  // Header dropdown menu
  /header \.menu/, /header \.submenu/, /\.menu-cG9zd/,
  
  // Footer custom classes
  /\.ftr_item/, /\.ftr_contact/, /\.ftr_menu/,
  /\.social-links/, /\.social-icon/, /\.floating_whatsapp/, /\.coming-soon/,
  /footer span\.terms/, /footer span\.licen_se/,
  /footer \.container/, /header \.container/,
  
  // AOS animation library (used in layout)
  /\[data-aos/, /\.aos-animate/, /\.aos-init/,
  
  // Splash screen animation
  /\.logo_onload/, /\.logo_faded/,
  
  // Layout utility classes
  /\.container\b/, /\.sr-only/, /\.site-container/,
  /\.full-width-content/, /\.entry-content/,
  /\.alignfull/, /\.alignwide/,
  /\.has-text-align-center/, /\.has-text-align-left/, /\.has-text-align-right/,
  /\.has-background-dim/,
  /\bdisabled\b/,
  /\.screen-reader-text/,
  
  // Base element normalizations (needed beyond Tailwind preflight)
  /^html\b/, /^body\b/,
  /::-webkit-/,
  /:-moz-focusring/,
  /scroll-behavior/,
  
  // WordPress core :where() defaults (keep minimal set for any possible WP content)
  /:where\(\.wp-block-calendar/,
  /:where\(\.wp-block-columns\.has-background/,
  
  // WordPress heading block (used in WP content)
  /\.wp-block-heading/,
  
  // WordPress core element button + image (common WP output)
  /\.wp-block-button/, /\.wp-block-buttons/,
  /\.wp-block-image/, /\.wp-block-gallery/,
  /\bwp-element-button\b/,
  
  // WordPress layout classes for any columns in WP content
  /\.wp-block-columns/, /\.wp-block-column\b/,
  /\.is-layout-/, /\.is-content-justification-/, /\.is-vertically-aligned-/,
  /\.wp-container-/,
  
  // WordPress utility classes (for WP-generated content)
  /\.has-text-color/, /\.has-background\b/,
  /\.has-drop-cap/, /\.is-style-/,
  
  // Genesis Blocks container (used in WP content)
  /\.gb-block-container/, /\.gb-container-/,
  /\.gb-block-accordion/, /\.gb-accordion-/,
  /\.gb-has-background-dim/,
  
  // WP embed TOC
  /\.wpembed-toc/,
  
  // Modal + contact form
  /\.modal\b/, /\.contact-modal/, /\.rendered-form/,
  
  // :root CSS vars
  /:root\b/,
  
  // WP core block styles (very minimal)
  /\.wp-block-separator/,
  /\.wp-block-table/,
  /\.wp-block-group/,
  /\.wp-block-spacer/,
  /\.wp-block-list/,
  /\.wp-block-preformatted/, /\.wp-block-verse/,
  /\.wp-block-pullquote/, /\.wp-block-quote/,
  /\.wp-block-code/, /\.wp-block-file/,
  /\.wp-block-audio/, /\.wp-block-video/,
  
  // Paragraph with dropcap (WP feature)
  /\.has-drop-cap/,
  
  // h1-h6 with background
  /h[1-6]\.has-background/,
];

function matchesAnyPattern(text, patterns) {
  return patterns.some(p => p.test(text));
}

const css = readFileSync(input, 'utf8');
const charsetMatch = css.match(/@charset\s+"[^"]*";/);
const charset = charsetMatch ? charsetMatch[0] : '';

function splitCssRules(css) {
  const rules = [];
  let depth = 0, start = 0;
  let inString = false, stringChar = '';

  for (let i = 0; i < css.length; i++) {
    const ch = css[i];
    if (inString) {
      if (ch === '\\') i++;
      else if (ch === stringChar) inString = false;
      continue;
    }
    if (ch === '"' || ch === "'") { inString = true; stringChar = ch; continue; }
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) { rules.push(css.slice(start, i + 1)); start = i + 1; }
    }
  }
  if (start < css.length) rules.push(css.slice(start));
  return rules;
}

console.log(`Original size: ${Buffer.byteLength(css).toLocaleString()} bytes`);
const rules = splitCssRules(css);
console.log(`Total rules: ${rules.length}`);

let kept = [], removed = 0;
for (const rule of rules) {
  const t = rule.trim();
  if (!t) continue;
  if (t.startsWith('/*') && t.endsWith('*/') && !t.includes('{')) continue;
  if (matchesAnyPattern(t, keepPatterns)) kept.push(rule);
  else removed++;
}

let out = kept.join('');
if (charset && !out.includes('@charset')) out = charset + out;

const outSize = Buffer.byteLength(out);
console.log(`Kept: ${kept.length}, Removed: ${removed}`);
console.log(`New size: ${outSize.toLocaleString()} bytes (${((1 - outSize / Buffer.byteLength(css)) * 100).toFixed(1)}% reduction)`);
writeFileSync(output, out);
console.log(`Written to ${output}`);
