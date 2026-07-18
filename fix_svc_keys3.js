const fs = require('fs');
const path = require('path');

const files = [
    'sports-injuries.html',
    'post-surgery-rehab.html',
    'neuro-rehabilitation.html',
    'pediatric-therapy.html',
    'shoulder-pain.html',
    'knee-pain.html',
    'sciatica.html',
    'disc-problems.html',
    'acl-rehabilitation.html',
    'dry-needling.html',
    'shockwave-therapy.html',
    'manual-therapy.html',
    'womens-health.html'
];

const dir = 'E:\\tadawi\\web\\tadawi';

// Helper: insert attr before closing > of opening tag
function addAttrToTag(html, tagPattern, attr) {
    // tagPattern matches the opening tag like <h3> or <p class="x">
    // We insert attr before the >
    return html.replace(new RegExp(tagPattern.source.replace(/>$/, '') + '>(?!<)'), tagPattern.source.replace(/>$/, '') + ' ' + attr + '>');
}

for (const file of files) {
    const filePath = path.join(dir, file);
    const svcKey = file.replace('.html', '');
    let content = fs.readFileSync(filePath, 'utf8');

    // ===== FIX MANGLED ATTRIBUTES FROM PREVIOUS SCRIPTS =====
    // Fix: TEXT" data-svc="XXX"</tag> -> proper tag attribute
    // Pattern: content like <h3>Some text" data-svc="b1_title"</h3>
    // Should be: <h3 data-svc="b1_title">Some text</h3>
    content = content.replace(/(<h[34]>)([^<"]+)" data-svc="(b\d+_(?:title|desc))"(<\/h[34]>)/g, '<h$1i data-svc="$3">$2</h$4i>'.replace(/h\$1i/, 'h$1').replace(/h\$4i/, 'h$4'));
    // Actually that's getting complicated. Let me use a simpler approach.
    // Just use explicit replacements for the known patterns.

    // Fix mangled h3/h4 benefit titles
    content = content.replace(/<h3>([^<"]+)" data-svc="(b\d+_title)"<\/h3>/g, '<h3 data-svc="$2">$1</h3>');
    content = content.replace(/<h4>([^<"]+)" data-svc="(b\d+_title)"<\/h4>/g, '<h4 data-svc="$2">$1</h4>');
    content = content.replace(/<p>([^<"]+)" data-svc="(b\d+_desc)"<\/p>/g, '<p data-svc="$2">$1</p>');

    // Fix mangled step h3/h4
    content = content.replace(/<h3>([^<"]+)" data-svc="(step\d)"<\/h3>/g, '<h3 data-svc="$2">$1</h3>');
    content = content.replace(/<h4>([^<"]+)" data-svc="(step\d)"<\/h4>/g, '<h4 data-svc="$2">$1</h4>');
    content = content.replace(/<p>([^<"]+)" data-svc="(step\d)d"<\/p>/g, '<p data-svc="${2}d">$1</p>');

    // Fix mangled FAQ question spans
    content = content.replace(/<span>([^<"]+)" data-svc="(faq\d+_q)"<\/span>/g, '<span data-svc="$2">$1</span>');

    // Fix mangled related service h3/p
    content = content.replace(/<h3 data-key="([^"]*)">([^<"]+)" data-svc="(rel\d+)"<\/h3>/g, '<h3 data-key="$1" data-svc="$3">$2</h3>');
    content = content.replace(/<p>([^<"]+)" data-svc="(rel\d+d)"<\/p>/g, '<p data-svc="$2">$1</p>');

    // Fix mangled breadcrumb span
    content = content.replace(/<span>([^<"]+)" data-svc="(hero_title)"<\/span>/g, '<span data-svc="$2">$1</span>');

    // Fix mangled process_title and faq_title h2
    content = content.replace(/<h2 class="heading-lg">\s*data-svc="(process_title|faq_title)"\s*/g, '<h2 class="heading-lg" data-svc="$1" ');

    // Fix duplicate faq1_d -> properly numbered
    let faqCount = 0;
    content = content.replace(/<div class="faq-answer-inner" data-svc="faq\d+_d">/g, () => {
        faqCount++;
        return `<div class="faq-answer-inner" data-svc="faq${faqCount}_d">`;
    });

    // ===== ADD MISSING ATTRIBUTES =====

    // 1. html tag
    if (!content.includes('data-svc-key')) {
        content = content.replace('<html lang="ar" dir="rtl">', `<html lang="ar" dir="rtl" data-svc-key="${svcKey}" data-meta-key="${svcKey}">`);
    }

    // 2. Hero breadcrumb span (if missing)
    if (!content.includes('data-svc="hero_title"')) {
        // page-hero layout
        content = content.replace(/(<span>)([^<]+)(<\/span>\s*\n\s*<\/div>\s*\n\s*<div class="page-hero-content">)/, '$1$2$3');
        const breadMatch = content.match(/<span>([^<]+)<\/span>\s*\n\s*<\/div>\s*\n\s*<div class="page-hero-content">/);
        if (breadMatch) {
            content = content.replace(breadMatch[0], breadMatch[0].replace(/(<span>)([^<]+)(<\/span>)/, '<span data-svc="hero_title">$2</span>'));
        }
        // section-hero layout
        const navMatch = content.match(/<span style="color:#fff">([^<]+)<\/span>\s*\n\s*<\/nav>/);
        if (navMatch) {
            content = content.replace(navMatch[0], navMatch[0].replace(/(<span style="color:#fff">)([^<]+)(<\/span>)/, '<span style="color:#fff" data-svc="hero_title">$2</span>'));
        }
    }

    // 3. Hero h1
    if (!content.includes('data-svc="hero_title"')) {
        content = content.replace(/(<h1 class="heading-lg">)([^<]+)(<\/h1>)/, '<h1 class="heading-lg" data-svc="hero_title">$2</h1>');
        content = content.replace(/(<h1 style="color:#fff;font-size:2\.5rem;font-weight:800;margin:0">)([^<]+)(<\/h1>)/, '<h1 style="color:#fff;font-size:2.5rem;font-weight:800;margin:0" data-svc="hero_title">$2</h1>');
    }

    // 4. Hero subtitle
    if (!content.includes('data-svc="hero_sub"')) {
        content = content.replace(/(<p class="subtitle">)([^<]+)(<\/p>\s*\n\s*<\/div>\s*\n\s*<div class="hero-wave">)/, '<p class="subtitle" data-svc="hero_sub">$2$3');
        content = content.replace(/(<p style="color:rgba\(255,255,255,0\.85\);font-size:1\.15rem;max-width:640px;line-height:1\.8">)([^<]+)(<\/p>)/, '<p style="color:rgba(255,255,255,0.85);font-size:1.15rem;max-width:640px;line-height:1.8" data-svc="hero_sub">$2</p>');
    }

    // 5. Desc title
    if (!content.includes('data-svc="desc_title"')) {
        // With span
        content = content.replace(/(<h2 class="heading-lg" style="margin-top:var\(--sp-[34]\)">)([^<]+)(<span[^>]*>[^<]*<\/span><\/h2>)/, '<h2 class="heading-lg" style="margin-top:var(--sp-$3t)" data-svc="desc_title">$2$3'.replace(/\$3t/, content.match(/margin-top:var\(--sp-([34])\)/)?.[1] || '4'));
        // Without span
        content = content.replace(/(<h2 class="heading-lg" style="margin-top:var\(--sp-[34]\)">)([^<]+)(<\/h2>)/, '<h2 class="heading-lg" style="margin-top:var(--sp-$3t)" data-svc="desc_title">$2</h2>'.replace(/\$3t/, content.match(/margin-top:var\(--sp-([34])\)/)?.[1] || '4'));
    }

    // 6. Desc paragraphs
    if (!content.includes('data-svc="desc_p1"')) {
        const descTitleIdx = content.indexOf('data-svc="desc_title"');
        const benefitsIdx = content.indexOf('<!-- Benefits -->');
        if (descTitleIdx > 0 && benefitsIdx > descTitleIdx) {
            const descSection = content.substring(descTitleIdx, benefitsIdx);
            const p1Match = descSection.match(/<p style="[^"]*line-height:1\.9[^"]*">/);
            if (p1Match) {
                const insertPos = descTitleIdx + descSection.indexOf(p1Match[0]) + p1Match[0].length;
                content = content.slice(0, insertPos) + ' data-svc="desc_p1" ' + content.slice(insertPos);
            }
        }
    }
    if (!content.includes('data-svc="desc_p2"')) {
        const descTitleIdx = content.indexOf('data-svc="desc_title"');
        const benefitsIdx = content.indexOf('<!-- Benefits -->');
        if (descTitleIdx > 0 && benefitsIdx > descTitleIdx) {
            const descSection = content.substring(descTitleIdx, benefitsIdx);
            const pMatches = [...descSection.matchAll(/<p style="[^"]*line-height:1\.9[^"]*">/g)];
            if (pMatches.length >= 2) {
                const insertPos = descTitleIdx + descSection.indexOf(pMatches[1][0]) + pMatches[1][0].length;
                content = content.slice(0, insertPos) + ' data-svc="desc_p2" ' + content.slice(insertPos);
            }
        }
    }

    // 7. Benefits title (optional - not requested but was in script)
    // Skip benefits_title as it wasn't in the original request

    // 8. Process title and subtitle
    if (!content.includes('data-svc="process_title"')) {
        const plIdx = content.indexOf('fa-list-ol');
        if (plIdx > 0) {
            const h2Match = content.substring(plIdx).match(/<h2 class="heading-lg">/);
            if (h2Match) {
                const pos = plIdx + content.substring(plIdx).indexOf(h2Match[0]) + h2Match[0].length;
                content = content.slice(0, pos) + ' data-svc="process_title"' + content.slice(pos);
            }
        }
    }
    if (!content.includes('data-svc="process_sub"')) {
        const plIdx = content.indexOf('fa-list-ol');
        if (plIdx > 0) {
            const subMatch = content.substring(plIdx).match(/<p class="subtitle">[^<]+<\/p>/);
            if (subMatch && !subMatch[0].includes('data-svc')) {
                const pos = plIdx + content.substring(plIdx).indexOf(subMatch[0]) + '<p class="'.length;
                content = content.slice(0, pos) + 'data-svc="process_sub" ' + content.slice(pos);
            }
        }
    }

    // 9. Process steps
    if (!content.includes('data-svc="step1"')) {
        const plIdx = content.indexOf('fa-list-ol');
        const faqIdx = content.indexOf('<!-- FAQ', plIdx);
        if (plIdx > 0 && faqIdx > plIdx) {
            const stepsSection = content.substring(plIdx, faqIdx);
            // Pattern 1: numbered div + h3 + p
            const stepMatches = [...stepsSection.matchAll(/font-size:2rem;font-weight:800[^>]+>\d+<\/div>\s*\n\s*<h3>([^<]+)<\/h3>\s*\n\s*<p>([^<]+)<\/p>/g)];
            let sIdx = 1;
            for (const m of stepMatches) {
                if (sIdx <= 5) {
                    const newStr = `<div style="font-size:2rem;font-weight:800;color:var(--primary);margin-bottom:var(--sp-3);">${m[0].match(/\d+/)[0]}</div>\n          <h3 data-svc="step${sIdx}">${m[1]}</h3>\n          <p data-svc="step${sIdx}d">${m[2]}</p>`;
                    content = content.replace(m[0], newStr);
                    sIdx++;
                }
            }
            // Pattern 2: process-step-num + h4 + p
            if (sIdx <= 1) {
                const stepMatches2 = [...stepsSection.matchAll(/process-step-num">(\d+)<\/div>\s*\n\s*<h[34]>([^<]+)<\/h[34]>\s*\n\s*<p>([^<]+)<\/p>/g)];
                sIdx = 1;
                for (const m of stepMatches2) {
                    if (sIdx <= 5) {
                        const newStr = `<div class="process-step-num">${m[1]}</div>\n          <h4 data-svc="step${sIdx}">${m[2]}</h4>\n          <p data-svc="step${sIdx}d">${m[3]}</p>`;
                        content = content.replace(m[0], newStr);
                        sIdx++;
                    }
                }
            }
        }
    }

    // 10. FAQ title and subtitle
    if (!content.includes('data-svc="faq_title"')) {
        const flIdx = content.indexOf('fa-circle-question');
        if (flIdx > 0) {
            const h2Match = content.substring(flIdx).match(/<h2 class="heading-lg">/);
            if (h2Match) {
                const pos = flIdx + content.substring(flIdx).indexOf(h2Match[0]) + h2Match[0].length;
                content = content.slice(0, pos) + ' data-svc="faq_title"' + content.slice(pos);
            }
        }
    }
    if (!content.includes('data-svc="faq_sub"')) {
        const flIdx = content.indexOf('fa-circle-question');
        if (flIdx > 0) {
            const subMatch = content.substring(flIdx).match(/<p class="subtitle">[^<]+<\/p>/);
            if (subMatch && !subMatch[0].includes('data-svc')) {
                const pos = flIdx + content.substring(flIdx).indexOf(subMatch[0]) + '<p class="'.length;
                content = content.slice(0, pos) + 'data-svc="faq_sub" ' + content.slice(pos);
            }
        }
    }

    // 11. FAQ questions
    if (!content.includes('data-svc="faq1_q"')) {
        const flIdx = content.indexOf('fa-circle-question');
        if (flIdx > 0) {
            const questions = [...content.substring(flIdx).matchAll(/<span>([^<]+)<\/span>\s*\n\s*<div class="faq-icon">/g)];
            let fqIdx = 1;
            for (const m of questions) {
                if (fqIdx <= 4) {
                    const newStr = `<span data-svc="faq${fqIdx}_q">${m[1]}</span>\n            <div class="faq-icon">`;
                    content = content.replace(m[0], newStr);
                    fqIdx++;
                }
            }
        }
    }

    // 12. FAQ answers
    if (!content.includes('data-svc="faq1_d"')) {
        const flIdx = content.indexOf('fa-circle-question');
        if (flIdx > 0) {
            const answers = [...content.substring(flIdx).matchAll(/<div class="faq-answer-inner">/g)];
            let faIdx = 1;
            for (const m of answers) {
                if (faIdx <= 4) {
                    content = content.replace(m[0], `<div class="faq-answer-inner" data-svc="faq${faIdx}_d">`);
                    faIdx++;
                }
            }
        }
    }

    // 13. Related services
    if (!content.includes('data-svc="rel1"')) {
        const relIdx = content.indexOf('<!-- Related Services -->');
        if (relIdx > 0) {
            const relH3s = [...content.substring(relIdx).matchAll(/<h3 data-key="([^"]*)">([^<]+)<\/h3>/g)];
            let rIdx = 1;
            for (const m of relH3s) {
                if (rIdx <= 3) {
                    const newStr = `<h3 data-key="${m[1]}" data-svc="rel${rIdx}">${m[2]}</h3>`;
                    content = content.replace(m[0], newStr);
                    rIdx++;
                }
            }
            const relPs = [...content.substring(relIdx).matchAll(/<p>([^<]+)<\/p>\s*\n\s*<a href="[^"]*\.html" class="card-link">/g)];
            let rpIdx = 1;
            for (const m of relPs) {
                if (rpIdx <= 3) {
                    const newStr = `<p data-svc="rel${rpIdx}d">${m[1]}</p>\n          <a`;
                    content = content.replace(m[0], newStr);
                    rpIdx++;
                }
            }
        }
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${file}`);
}

console.log('All files fixed!');
