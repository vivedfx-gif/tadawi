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

    # Fix mangled h1 tags (from previous script)
    # Pattern: <h1 class="heading-lg">TEXT" data-svc="hero_title"</h1>
    # Should be: <h1 class="heading-lg" data-svc="hero_title">TEXT</h1>
    $content = $content -replace '(<h1 class="heading-lg">)([^"]+)" data-svc="hero_title"</h1>', '<h1 class="heading-lg" data-svc="hero_title">$2</h1>'

    # Fix mangled h2 tags in benefits section
    # Pattern: <h2 class="heading-lg">TEXT " data-svc="benefits_title"<span...
    # These should NOT have data-svc="benefits_title" - that was wrong
    $content = $content -replace ' data-svc="benefits_title"<', '<'

    # Ensure html tag has data-svc-key (might already be there from first script)
    if ($content -notmatch 'data-svc-key') {
        $content = $content -replace '<html lang="ar" dir="rtl">', "<html lang=`"ar`" dir=`"rtl`" data-svc-key=`"$svcKey`" data-meta-key=`"$svcKey`">"
    }

    # Fix breadcrumb span - add data-svc="hero_title"
    # For page-hero layout (div.breadcrumb)
    if ($content -match 'class="breadcrumb"') {
        # Find last span before </div> and page-hero-content
        $content = $content -replace '(<span>)([^<]+)(</span>\s*\n\s*</div>\s*\n\s*<div class="page-hero-content">)', "`$1`$2`" data-svc=`"hero_title`"`$3"
    }
    # For section-hero layout (nav.breadcrumb)
    if ($content -match '<nav class="breadcrumb"') {
        $content = $content -replace '(<span style="color:#fff">)([^<]+)(</span>\s*\n\s*</nav>)', "`$1`$2`" data-svc=`"hero_title`"`$3"
    }

    # Fix hero h1 - ensure data-svc="hero_title" is attribute, not mangled
    if ($content -notmatch 'data-svc="hero_title"') {
        $content = $content -replace '(<h1 class="heading-lg">)([^<]+)(</h1>)', "`$1`$2`" data-svc=`"hero_title`"`$3"
    }
    # For section-hero layout h1
    if ($content -notmatch 'data-svc="hero_title"') {
        $content = $content -replace '(<h1 style="color:#fff;font-size:2\.5rem;font-weight:800;margin:0">)([^<]+)(</h1>)', "`$1`$2`" data-svc=`"hero_title`"`$3"
    }

    # Hero subtitle p
    # Pattern 1: <p class="subtitle">TEXT</p> before hero-wave
    $content = $content -replace '(<p class="subtitle">)([^<]+)(</p>\s*\n\s*</div>\s*\n\s*<div class="hero-wave">)', "`$1`$2`" data-svc=`"hero_sub`"`$3"
    # Pattern 2: <p style="color:rgba(255,255,255,0.85);...">TEXT</p>
    $content = $content -replace '(<p style="color:rgba\(255,255,255,0\.85\);font-size:1\.15rem;max-width:640px;line-height:1\.8">)([^<]+)(</p>)', "`$1`$2`" data-svc=`"hero_sub`"`$3"

    # Description section h2
    $content = $content -replace '(<h2 class="heading-lg" style="margin-top:var\(--sp-[34]\)">)([^<]+)(</h2>)', "`$1`$2`" data-svc=`"desc_title`"`$3"
    # With span
    $content = $content -replace '(<h2 class="heading-lg" style="margin-top:var\(--sp-[34]\)">)([^<]+)(<span[^>]*>[^<]*</span></h2>)', "`$1`$2`" data-svc=`"desc_title`"`$3"

    # Description paragraphs - find them by looking after desc_title
    # Use a simpler approach: find all p tags with line-height:1.9 that don't have data-svc yet
    # and are before the Benefits section
    $descTitleIdx = $content.IndexOf('data-svc="desc_title"')
    $benefitsIdx = $content.IndexOf('<!-- Benefits -->')
    if ($descTitleIdx -gt 0 -and $benefitsIdx -gt $descTitleIdx) {
        $descSection = $content.Substring($descTitleIdx, $benefitsIdx - $descTitleIdx)
        $pMatches = [regex]::Matches($descSection, '<p style="[^"]*line-height:1\.9[^"]*">')
        if ($pMatches.Count -ge 1) {
            $p1Pos = $descTitleIdx + $pMatches[0].Index + '<p style="'.Length
            $content = $content.Insert($p1Pos, 'data-svc="desc_p1" ')
        }
        # Re-find after insertion
        $pMatches2 = [regex]::Matches($content.Substring($descTitleIdx, $benefitsIdx - $descTitleIdx), '<p style="[^"]*line-height:1\.9[^"]*">')
        if ($pMatches2.Count -ge 2) {
            $p2Pos = $descTitleIdx + $pMatches2[1].Index + '<p style="'.Length
            $content = $content.Insert($p2Pos, 'data-svc="desc_p2" ')
        }
    }

    # Benefits section - find the grid-4 stagger section after <!-- Benefits -->
    $benefitsStart = $content.IndexOf('<!-- Benefits -->')
    $processStart = $content.IndexOf('<!-- Treatment Process -->')
    if ($benefitsStart -gt 0 -and $processStart -gt $benefitsStart) {
        $benefitsSection = $content.Substring($benefitsStart, $processStart - $benefitsStart)
        # Find h3 and h4 pairs with their p tags
        $cardMatches = [regex]::Matches($benefitsSection, '<h[34]>[^<]+</h[34]>\s*\n\s*<p>[^<]+</p>')
        $bIdx = 1
        foreach ($m in $cardMatches) {
            if ($bIdx -le 4) {
                $oldVal = $m.Value
                $newVal = $oldVal -replace '(<h[34]>)([^<]+)(</h[34]>)\s*\n\s*(<p>)([^<]+)(</p>)', "`$1`$2`" data-svc=`"b${bIdx}_title`"`$3`n          `$4`$5`" data-svc=`"b${bIdx}_desc`"`$6"
                if ($newVal -ne $oldVal) {
                    $content = $content.Replace($oldVal, $newVal)
                }
                $bIdx++
            }
        }
    }

    # Process section
    $processLabelIdx = $content.IndexOf('fa-list-ol')
    if ($processLabelIdx -gt 0) {
        # Process h2
        $afterProcessLabel = $content.Substring($processLabelIdx)
        $processH2Match = [regex]::Match($afterProcessLabel, '<h2 class="heading-lg">')
        if ($processH2Match.Success) {
            $h2Pos = $processLabelIdx + $processH2Match.Index
            $existingTag = $content.Substring($h2Pos, $processH2Match.Length)
            if ($content.Substring($h2Pos, $existingTag.Length + 50) -notmatch 'data-svc') {
                $content = $content.Insert($h2Pos + $existingTag.Length, ' data-svc="process_title"')
            }
        }

        # Process subtitle - find <p class="subtitle"> after process h2
        $afterProcessH2 = $content.Substring($processLabelIdx)
        $processSubMatch = [regex]::Match($afterProcessH2, '<p class="subtitle">[^<]+</p>')
        if ($processSubMatch.Success -and $processSubMatch.Value -notmatch 'data-svc') {
            $subPos = $processLabelIdx + $processSubMatch.Index + '<p class="'.Length
            $content = $content.Insert($subPos, 'subtitle" data-svc="process_sub" ')
            # Fix: remove the duplicate class=
            $content = $content -replace 'class="subtitle" data-svc="process_sub" data-svc="process_sub"', 'class="subtitle" data-svc="process_sub"'
        }

        # Process steps - find numbered divs
        $processStepsIdx = $content.IndexOf('class="grid-3 stagger" style="grid-template-columns', $processLabelIdx)
        if ($processStepsIdx -lt 0) {
            $processStepsIdx = $content.IndexOf('class="grid-4 stagger"', $processLabelIdx)
        }
        $faqStart = $content.IndexOf('<!-- FAQ', $processLabelIdx)
        if ($processStepsIdx -gt 0 -and $faqStart -gt $processStepsIdx) {
            $stepsSection = $content.Substring($processStepsIdx, $faqStart - $processStepsIdx)
            # Pattern 1: numbered div + h3 + p
            $stepMatches = [regex]::Matches($stepsSection, 'font-size:2rem;font-weight:800[^>]+>\d+</div>\s*\n\s*<h3>[^<]+</h3>\s*\n\s*<p>[^<]+</p>')
            $sIdx = 1
            foreach ($m in $stepMatches) {
                if ($sIdx -le 5) {
                    $oldVal = $m.Value
                    $newVal = $oldVal -replace '(<h3>)([^<]+)(</h3>)\s*\n\s*(<p>)([^<]+)(</p>)', "`$1`$2`" data-svc=`"step${sIdx}`"`$3`n          `$4`$5`" data-svc=`"step${sIdx}d`"`$6"
                    if ($newVal -ne $oldVal) {
                        $content = $content.Replace($oldVal, $newVal)
                    }
                    $sIdx++
                }
            }
            # Pattern 2: process-step-num div + h4 + p
            $stepMatches2 = [regex]::Matches($stepsSection, 'process-step-num">\d+</div>\s*\n\s*<h[34]>[^<]+</h[34]>\s*\n\s*<p>[^<]+</p>')
            $sIdx2 = 1
            foreach ($m in $stepMatches2) {
                if ($sIdx2 -le 5) {
                    $oldVal = $m.Value
                    $newVal = $oldVal -replace '(<h[34]>)([^<]+)(</h[34]>)\s*\n\s*(<p>)([^<]+)(</p>)', "`$1`$2`" data-svc=`"step${sIdx2}`"`$3`n          `$4`$5`" data-svc=`"step${sIdx2}d`"`$6"
                    if ($newVal -ne $oldVal) {
                        $content = $content.Replace($oldVal, $newVal)
                    }
                    $sIdx2++
                }
            }
        }
    }

    # FAQ section
    $faqLabelIdx = $content.IndexOf('fa-circle-question')
    if ($faqLabelIdx -gt 0) {
        # FAQ h2
        $afterFaqLabel = $content.Substring($faqLabelIdx)
        $faqH2Match = [regex]::Match($afterFaqLabel, '<h2 class="heading-lg">')
        if ($faqH2Match.Success) {
            $h2Pos = $faqLabelIdx + $faqH2Match.Index
            $tagStr = $content.Substring($h2Pos, $faqH2Match.Length)
            if ($content.Substring($h2Pos, $tagStr.Length + 50) -notmatch 'data-svc') {
                $content = $content.Insert($h2Pos + $tagStr.Length, ' data-svc="faq_title"')
            }
        }

        # FAQ subtitle
        $afterFaqH2 = $content.Substring($faqLabelIdx)
        $faqSubMatch = [regex]::Match($afterFaqH2, '<p class="subtitle">[^<]+</p>')
        if ($faqSubMatch.Success -and $faqSubMatch.Value -notmatch 'data-svc') {
            $subPos = $faqLabelIdx + $faqSubMatch.Index + '<p class="'.Length
            $content = $content.Insert($subPos, 'subtitle" data-svc="faq_sub" ')
            $content = $content -replace 'class="subtitle" data-svc="faq_sub" data-svc="faq_sub"', 'class="subtitle" data-svc="faq_sub"'
        }

        # FAQ questions - <span>TEXT</span> before faq-icon
        $faqQuestions = [regex]::Matches($content.Substring($faqLabelIdx), '<span>([^<]+)</span>\s*\n\s*<div class="faq-icon">')
        $fqIdx = 1
        foreach ($m in $faqQuestions) {
            if ($fqIdx -le 4) {
                $oldVal = $m.Value
                if ($oldVal -notmatch 'data-svc') {
                    $newVal = $oldVal -replace '(<span>)([^<]+)(</span>)', "`$1`$2`" data-svc=`"faq${fqIdx}_q`"`$3"
                    $content = $content.Replace($oldVal, $newVal)
                }
                $fqIdx++
            }
        }

        # FAQ answers - <div class="faq-answer-inner">
        $faqAnswers = [regex]::Matches($content.Substring($faqLabelIdx), '<div class="faq-answer-inner">')
        $faIdx = 1
        foreach ($m in $faqAnswers) {
            if ($faIdx -le 4) {
                $oldVal = $m.Value
                if ($oldVal -notmatch 'data-svc') {
                    $newVal = '<div class="faq-answer-inner" data-svc="faq' + $faIdx + '_d">'
                    $content = $content.Replace($oldVal, $newVal)
                }
                $faIdx++
            }
        }
    }

    # Related services section
    $relatedIdx = $content.IndexOf('<!-- Related Services -->')
    if ($relatedIdx -gt 0) {
        $relatedSection = $content.Substring($relatedIdx)
        # Find service card h3 with data-key
        $relH3Matches = [regex]::Matches($relatedSection, '<h3 data-key="[^"]*">[^<]+</h3>')
        $relIdx = 1
        foreach ($m in $relH3Matches) {
            if ($relIdx -le 3) {
                $oldVal = $m.Value
                if ($oldVal -notmatch 'data-svc') {
                    $newVal = $oldVal -replace '(<h3 data-key="[^"]*">)([^<]+)(</h3>)', "`$1`$2`" data-svc=`"rel${relIdx}`"`$3"
                    $content = $content.Replace($oldVal, $newVal)
                }
                $relIdx++
            }
        }

        # Find service card p descriptions
        $relPMatches = [regex]::Matches($relatedSection, '<p>[^<]+</p>\s*\n\s*<a href="[^"]*\.html" class="card-link">')
        $relPIdx = 1
        foreach ($m in $relPMatches) {
            if ($relPIdx -le 3) {
                $oldVal = $m.Value
                if ($oldVal -notmatch 'data-svc') {
                    $newVal = $oldVal -replace '(<p>)([^<]+)(</p>)', "`$1`$2`" data-svc=`"rel${relPIdx}d`"`$3"
                    $content = $content.Replace($oldVal, $newVal)
                }
                $relPIdx++
            }
        }
    }

    Set-Content -Path $filePath -Value $content -Encoding UTF8 -NoNewline
    Write-Host "Processed: $file"
}

Write-Host "All files processed!"
