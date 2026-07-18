$files = @(
    "sports-injuries.html",
    "post-surgery-rehab.html",
    "neuro-rehabilitation.html",
    "pediatric-therapy.html",
    "shoulder-pain.html",
    "knee-pain.html",
    "sciatica.html",
    "disc-problems.html",
    "acl-rehabilitation.html",
    "dry-needling.html",
    "shockwave-therapy.html",
    "manual-therapy.html",
    "womens-health.html"
)

foreach ($file in $files) {
    $filePath = "E:\tadawi\web\tadawi\$file"
    $svcKey = $file -replace '\.html$',''
    $content = Get-Content -Path $filePath -Raw -Encoding UTF8

    # Fix mangled h3 benefit titles: <h3>TEXT" data-svc="b1_title"</h3> -> <h3 data-svc="b1_title">TEXT</h3>
    $content = $content -replace '<h3>([^"]+?)" data-svc="(b\d+_title)"</h3>', '<h3 data-svc="$2">$1</h3>'
    $content = $content -replace '<h4>([^"]+?)" data-svc="(b\d+_title)"</h4>', '<h4 data-svc="$2">$1</h4>'
    $content = $content -replace '<p>([^"]+?)" data-svc="(b\d+_desc)"</p>', '<p data-svc="$2">$1</p>'

    # Fix mangled step h3/h4
    $content = $content -replace '<h3>([^"]+?)" data-svc="(step\d)"</h3>', '<h3 data-svc="$2">$1</h3>'
    $content = $content -replace '<h4>([^"]+?)" data-svc="(step\d)"</h4>', '<h4 data-svc="$2">$1</h4>'
    $content = $content -replace '<p>([^"]+?)" data-svc="(step\d)d"</p>', '<p data-svc="$2d">$1</p>'

    # Fix mangled FAQ question spans
    $content = $content -replace '<span>([^"]+?)" data-svc="(faq\d+_q)"</span>', '<span data-svc="$2">$1</span>'

    # Fix mangled related service h3/p
    $content = $content -replace '<h3 data-key="([^"]*)">([^"]+?)" data-svc="(rel\d+)"</h3>', '<h3 data-key="$1" data-svc="$3">$2</h3>'
    $content = $content -replace '<p>([^"]+?)" data-svc="(rel\d+d)"</p>', '<p data-svc="$2">$1</p>'

    # Fix mangled breadcrumb span
    $content = $content -replace '<span>([^"]+?)" data-svc="(hero_title)"</span>', '<span data-svc="$2">$1</span>'

    # Fix mangled h2 process_title and faq_title
    $content = $content -replace '<h2 class="heading-lg"> data-svc="(process_title|faq_title)"\s*', '<h2 class="heading-lg" data-svc="$1" '

    # Fix duplicate faq1_d -> properly numbered
    $faqCount = 0
    $faqAnswerPattern = [regex]::Escape('<div class="faq-answer-inner" data-svc="faq') + '\d+_d">'
    $content = [regex]::Replace($content, $faqAnswerPattern, {
        param($m)
        $script:faqCount++
        return '<div class="faq-answer-inner" data-svc="faq' + $script:faqCount + '_d">'
    })

    # ===== ADD MISSING ATTRIBUTES =====

    # 1. html tag
    if ($content -notmatch 'data-svc-key') {
        $content = $content -replace '<html lang="ar" dir="rtl">', "<html lang=`"ar`" dir=`"rtl`" data-svc-key=`"$svcKey`" data-meta-key=`"$svcKey`">"
    }

    # 2. Hero breadcrumb span (if missing)
    if ($content -notmatch 'data-svc="hero_title"') {
        # page-hero layout: <span>TEXT</span>\n      </div>\n      <div class="page-hero-content">
        $content = $content -replace '(<span>)([^<]+)(</span>\s*\n\s*</div>\s*\n\s*<div class="page-hero-content">)', '<span data-svc="hero_title">$2</span>$3'
        # section-hero layout: <span style="color:#fff">TEXT</span>\n      </nav>
        $content = $content -replace '(<span style="color:#fff">)([^<]+)(</span>\s*\n\s*</nav>)', '<span style="color:#fff" data-svc="hero_title">$2</span>$3'
    }

    # 3. Hero h1
    if ($content -notmatch 'data-svc="hero_title"') {
        $content = $content -replace '(<h1 class="heading-lg">)([^<]+)(</h1>)', '<h1 class="heading-lg" data-svc="hero_title">$2</h1>'
    }
    if ($content -notmatch 'data-svc="hero_title"') {
        $content = $content -replace '(<h1 style="color:#fff;font-size:2\.5rem;font-weight:800;margin:0">)([^<]+)(</h1>)', '<h1 style="color:#fff;font-size:2.5rem;font-weight:800;margin:0" data-svc="hero_title">$2</h1>'
    }

    # 4. Hero subtitle
    if ($content -notmatch 'data-svc="hero_sub"') {
        $content = $content -replace '(<p class="subtitle">)([^<]+)(</p>\s*\n\s*</div>\s*\n\s*<div class="hero-wave">)', '<p class="subtitle" data-svc="hero_sub">$2</p>$3'
        $content = $content -replace '(<p style="color:rgba\(255,255,255,0\.85\);font-size:1\.15rem;max-width:640px;line-height:1\.8">)([^<]+)(</p>)', '<p style="color:rgba(255,255,255,0.85);font-size:1.15rem;max-width:640px;line-height:1.8" data-svc="hero_sub">$2</p>'
    }

    # 5. Desc title (only if not already there)
    if ($content -notmatch 'data-svc="desc_title"') {
        # With span
        $content = $content -replace '(<h2 class="heading-lg" style="margin-top:var\(--sp-3\)">)([^<]+)(<span[^>]*>[^<]*</span></h2>)', '<h2 class="heading-lg" style="margin-top:var(--sp-3)" data-svc="desc_title">$2$3'
        $content = $content -replace '(<h2 class="heading-lg" style="margin-top:var\(--sp-4\)">)([^<]+)(<span[^>]*>[^<]*</span></h2>)', '<h2 class="heading-lg" style="margin-top:var(--sp-4)" data-svc="desc_title">$2$3'
        # Without span
        $content = $content -replace '(<h2 class="heading-lg" style="margin-top:var\(--sp-3\)">)([^<]+)(</h2>)', '<h2 class="heading-lg" style="margin-top:var(--sp-3)" data-svc="desc_title">$2</h2>'
        $content = $content -replace '(<h2 class="heading-lg" style="margin-top:var\(--sp-4\)">)([^<]+)(</h2>)', '<h2 class="heading-lg" style="margin-top:var(--sp-4)" data-svc="desc_title">$2</h2>'
    }

    # 6. Desc paragraphs
    if ($content -notmatch 'data-svc="desc_p1"') {
        $descTitleIdx = $content.IndexOf('data-svc="desc_title"')
        $benefitsIdx = $content.IndexOf('<!-- Benefits -->')
        if ($descTitleIdx -gt 0 -and $benefitsIdx -gt $descTitleIdx) {
            $descSection = $content.Substring($descTitleIdx, $benefitsIdx - $descTitleIdx)
            $p1Match = [regex]::Match($descSection, '<p style="[^"]*line-height:1\.9[^"]*">')
            if ($p1Match.Success) {
                $insertPos = $descTitleIdx + $p1Match.Index + $p1Match.Length
                $content = $content.Insert($insertPos, ' data-svc="desc_p1" ')
            }
        }
    }
    if ($content -notmatch 'data-svc="desc_p2"') {
        $descTitleIdx = $content.IndexOf('data-svc="desc_title"')
        $benefitsIdx = $content.IndexOf('<!-- Benefits -->')
        if ($descTitleIdx -gt 0 -and $benefitsIdx -gt $descTitleIdx) {
            $descSection = $content.Substring($descTitleIdx, $benefitsIdx - $descTitleIdx)
            $pMatches = [regex]::Matches($descSection, '<p style="[^"]*line-height:1\.9[^"]*">')
            if ($pMatches.Count -ge 2) {
                $insertPos = $descTitleIdx + $pMatches[1].Index + $pMatches[1].Length
                $content = $content.Insert($insertPos, ' data-svc="desc_p2" ')
            }
        }
    }

    # 7. Benefits h3/h4 and p pairs in grid-4
    if ($content -notmatch 'data-svc="b1_title"') {
        $benefitsStart = $content.IndexOf('<!-- Benefits -->')
        $processStart = $content.IndexOf('<!-- Treatment Process -->')
        if ($benefitsStart -gt 0 -and $processStart -gt $benefitsStart) {
            $benefitsSection = $content.Substring($benefitsStart, $processStart - $benefitsStart)
            $cardMatches = [regex]::Matches($benefitsSection, '<h[34]>[^<]+</h[34]>\s*\n\s*<p>[^<]+</p>')
            $bIdx = 1
            foreach ($m in $cardMatches) {
                if ($bIdx -le 4) {
                    $oldVal = $m.Value
                    $hTag = if ($m.Value -match '<h3>') { 'h3' } else { 'h4' }
                    $titleText = [regex]::Match($m.Value, "<$hTag>([^<]+)</$hTag>").Groups[1].Value
                    $descText = [regex]::Match($m.Value, '<p>([^<]+)</p>').Groups[1].Value
                    $newVal = "<$hTag data-svc=`"b${bIdx}_title`">$titleText</$hTag>`n          <p data-svc=`"b${bIdx}_desc`">$descText</p>"
                    $content = $content.Replace($oldVal, $newVal)
                    $bIdx++
                }
            }
        }
    }

    # 8. Process h2 and subtitle
    if ($content -notmatch 'data-svc="process_title"') {
        $plIdx = $content.IndexOf('fa-list-ol')
        if ($plIdx -gt 0) {
            $afterLabel = $content.Substring($plIdx)
            $h2Match = [regex]::Match($afterLabel, '<h2 class="heading-lg">')
            if ($h2Match.Success) {
                $pos = $plIdx + $h2Match.Index + $h2Match.Length
                $content = $content.Insert($pos, ' data-svc="process_title"')
            }
        }
    }
    if ($content -notmatch 'data-svc="process_sub"') {
        $plIdx = $content.IndexOf('fa-list-ol')
        if ($plIdx -gt 0) {
            $afterLabel = $content.Substring($plIdx)
            $subMatch = [regex]::Match($afterLabel, '<p class="subtitle">[^<]+</p>')
            if ($subMatch.Success -and $subMatch.Value -notmatch 'data-svc') {
                $pos = $plIdx + $subMatch.Index + '<p class="'.Length
                $content = $content.Insert($pos, 'data-svc="process_sub" ')
                # Fix potential double class=
                $content = $content -replace 'class="subtitle" data-svc="process_sub" data-svc="process_sub"', 'class="subtitle" data-svc="process_sub"'
            }
        }
    }

    # 9. Process steps
    if ($content -notmatch 'data-svc="step1"') {
        $plIdx = $content.IndexOf('fa-list-ol')
        $faqIdx = $content.IndexOf('<!-- FAQ', $plIdx)
        if ($plIdx -gt 0 -and $faqIdx -gt $plIdx) {
            $stepsSection = $content.Substring($plIdx, $faqIdx - $plIdx)
            # Pattern 1: numbered div + h3 + p
            $stepMatches = [regex]::Matches($stepsSection, 'font-size:2rem;font-weight:800[^>]+>\d+</div>\s*\n\s*<h3>([^<]+)</h3>\s*\n\s*<p>([^<]+)</p>')
            $sIdx = 1
            foreach ($m in $stepMatches) {
                if ($sIdx -le 5) {
                    $num = [regex]::Match($m.Value, '>(\d+)<').Groups[1].Value
                    $title = $m.Groups[1].Value
                    $desc = $m.Groups[2].Value
                    $newVal = "<div style=`"font-size:2rem;font-weight:800;color:var(--primary);margin-bottom:var(--sp-3);`">$num</div>`n          <h3 data-svc=`"step${sIdx}`">$title</h3>`n          <p data-svc=`"step${sIdx}d`">$desc</p>"
                    $content = $content.Replace($m.Value, $newVal)
                    $sIdx++
                }
            }
            # Pattern 2: process-step-num + h4 + p
            if ($sIdx -le 1) {
                $stepMatches2 = [regex]::Matches($stepsSection, 'process-step-num">(\d+)</div>\s*\n\s*<h[34]>([^<]+)</h[34]>\s*\n\s*<p>([^<]+)</p>')
                $sIdx = 1
                foreach ($m in $stepMatches2) {
                    if ($sIdx -le 5) {
                        $num = $m.Groups[1].Value
                        $title = $m.Groups[2].Value
                        $desc = $m.Groups[3].Value
                        $hTag = if ($m.Value -match '<h4>') { 'h4' } else { 'h3' }
                        $newVal = "<div class=`"process-step-num`">$num</div>`n          <$hTag data-svc=`"step${sIdx}`">$title</$hTag>`n          <p data-svc=`"step${sIdx}d`">$desc</p>"
                        $content = $content.Replace($m.Value, $newVal)
                        $sIdx++
                    }
                }
            }
        }
    }

    # 10. FAQ title and subtitle
    if ($content -notmatch 'data-svc="faq_title"') {
        $flIdx = $content.IndexOf('fa-circle-question')
        if ($flIdx -gt 0) {
            $afterLabel = $content.Substring($flIdx)
            $h2Match = [regex]::Match($afterLabel, '<h2 class="heading-lg">')
            if ($h2Match.Success) {
                $pos = $flIdx + $h2Match.Index + $h2Match.Length
                $content = $content.Insert($pos, ' data-svc="faq_title"')
            }
        }
    }
    if ($content -notmatch 'data-svc="faq_sub"') {
        $flIdx = $content.IndexOf('fa-circle-question')
        if ($flIdx -gt 0) {
            $afterLabel = $content.Substring($flIdx)
            $subMatch = [regex]::Match($afterLabel, '<p class="subtitle">[^<]+</p>')
            if ($subMatch.Success -and $subMatch.Value -notmatch 'data-svc') {
                $pos = $flIdx + $subMatch.Index + '<p class="'.Length
                $content = $content.Insert($pos, 'data-svc="faq_sub" ')
                $content = $content -replace 'class="subtitle" data-svc="faq_sub" data-svc="faq_sub"', 'class="subtitle" data-svc="faq_sub"'
            }
        }
    }

    # 11. FAQ questions
    if ($content -notmatch 'data-svc="faq1_q"') {
        $flIdx = $content.IndexOf('fa-circle-question')
        if ($flIdx -gt 0) {
            $questions = [regex]::Matches($content.Substring($flIdx), '<span>([^<]+)</span>\s*\n\s*<div class="faq-icon">')
            $fqIdx = 1
            foreach ($m in $questions) {
                if ($fqIdx -le 4) {
                    $qText = $m.Groups[1].Value
                    $newVal = "<span data-svc=`"faq${fqIdx}_q`">$qText</span>`n            <div class=`"faq-icon`">"
                    $content = $content.Replace($m.Value, $newVal)
                    $fqIdx++
                }
            }
        }
    }

    # 12. FAQ answers
    if ($content -notmatch 'data-svc="faq1_d"') {
        $flIdx = $content.IndexOf('fa-circle-question')
        if ($flIdx -gt 0) {
            $answers = [regex]::Matches($content.Substring($flIdx), '<div class="faq-answer-inner">')
            $faIdx = 1
            foreach ($m in $answers) {
                if ($faIdx -le 4) {
                    $newVal = "<div class=`"faq-answer-inner`" data-svc=`"faq${faIdx}_d`">"
                    $content = $content.Replace($m.Value, $newVal)
                    $faIdx++
                }
            }
        }
    }

    # 13. Related services
    if ($content -notmatch 'data-svc="rel1"') {
        $relIdx = $content.IndexOf('<!-- Related Services -->')
        if ($relIdx -gt 0) {
            $relH3s = [regex]::Matches($content.Substring($relIdx), '<h3 data-key="([^"]*)">([^<]+)</h3>')
            $rIdx = 1
            foreach ($m in $relH3s) {
                if ($rIdx -le 3) {
                    $key = $m.Groups[1].Value
                    $title = $m.Groups[2].Value
                    $newVal = "<h3 data-key=`"$key`" data-svc=`"rel${rIdx}`">$title</h3>"
                    $content = $content.Replace($m.Value, $newVal)
                    $rIdx++
                }
            }
            $relPs = [regex]::Matches($content.Substring($relIdx), '<p>([^<]+)</p>\s*\n\s*<a href="[^"]*\.html" class="card-link">')
            $rpIdx = 1
            foreach ($m in $relPs) {
                if ($rpIdx -le 3) {
                    $desc = $m.Groups[1].Value
                    $newVal = "<p data-svc=`"rel${rpIdx}d`">$desc</p>`n          <a"
                    $content = $content.Replace($m.Value, $newVal)
                    $rpIdx++
                }
            }
        }
    }

    Set-Content -Path $filePath -Value $content -Encoding UTF8 -NoNewline
    Write-Host "Fixed: $file"
}

Write-Host "All files fixed!"
