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

    # 1. Add data-svc-key and data-meta-key to html tag
    $content = $content -replace '<html lang="ar" dir="rtl">', "<html lang=`"ar`" dir=`"rtl`" data-svc-key=`"$svcKey`" data-meta-key=`"$svcKey`">"

    # 2. Hero breadcrumb span - add data-svc="hero_title"
    # Match the last breadcrumb span before </div> in breadcrumb
    # Pattern varies between page-hero and section-hero layouts
    # For section-hero (nav.breadcrumb): <span style="color:#fff">TEXT</span>
    if ($content -match '<span style="color:#fff">[^<]+</span>\s*\n\s*</nav>') {
        $content = $content -replace '(<span style="color:#fff">)([^<]+)(</span>\s*\n\s*</nav>)', "`$1`$2`" data-svc=`"hero_title`"`$3"
    }
    # For page-hero (div.breadcrumb): <span>TEXT</span>  at end of breadcrumb div
    if ($content -match '<span>[^<]+</span>\s*\n\s*</div>\s*\n\s*<div class="page-hero-content">') {
        $content = $content -replace '(<span>)([^<]+)(</span>\s*\n\s*</div>\s*\n\s*<div class="page-hero-content">)', "`$1`$2`" data-svc=`"hero_title`"`$3"
    }

    # 3. Hero h1 - add data-svc="hero_title"
    # Pattern 1: <h1 class="heading-lg">TEXT</h1>
    $content = $content -replace '(<h1 class="heading-lg">)([^<]+)(</h1>)', "`$1`$2`" data-svc=`"hero_title`"`$3"
    # Pattern 2: <h1 style="...">TEXT</h1>
    $content = $content -replace '(<h1 style="color:#fff;font-size:2\.5rem;font-weight:800;margin:0">)([^<]+)(</h1>)', "`$1`$2`" data-svc=`"hero_title`"`$3"

    # 4. Hero subtitle p - add data-svc="hero_sub"
    # Pattern 1: <p class="subtitle">TEXT</p> in page-hero
    $content = $content -replace '(<p class="subtitle">)([^<]+)(</p>\s*\n\s*</div>\s*\n\s*<div class="hero-wave">)', "`$1`$2`" data-svc=`"hero_sub`"`$3"
    # Pattern 2: <p style="color:rgba(255,255,255,0.85);...">TEXT</p>
    $content = $content -replace '(<p style="color:rgba\(255,255,255,0\.85\);[^"]*">)([^<]+)(</p>\s*\n\s*</div>\s*\n\s*<div class="hero-wave">)', "`$1`$2`" data-svc=`"hero_sub`"`$3"

    # 5. Description section h2 - add data-svc="desc_title"
    $content = $content -replace '(<h2 class="heading-lg" style="margin-top:var\(--sp-[34]\);">)([^<]+)(</h2>)', "`$1`$2`" data-svc=`"desc_title`"`$3"
    # Pattern with span: <h2 class="heading-lg" style="margin-top:var(--sp-3)">TEXT <span...>WORD</span></h2>
    $content = $content -replace '(<h2 class="heading-lg" style="margin-top:var\(--sp-3\)">)([^<]+)(<span[^>]*>[^<]*</span></h2>)', "`$1`$2`" data-svc=`"desc_title`"`$3"

    # 6. Description paragraphs - add data-svc="desc_p1" and "desc_p2"
    # First <p> after desc h2 - desc_p1
    $content = $content -replace '(<p style="(?:color:var\(--text-secondary\)|margin-top:var\(--sp-4\));line-height:1\.9;(?:margin-top:var\(--sp-[34]\);)?color:var\(--text-light\);">)', '$1'
    # We need a more targeted approach - find first p after desc_title and add desc_p1
    # Use a simpler approach: look for the first occurrence after desc_title
    if ($content -match 'data-svc="desc_title"[\s\S]*?(<p style="[^"]*line-height:1\.9[^"]*">)') {
        $content = $content -replace 'data-svc="desc_title"([\s\S]*?)(<p style="[^"]*line-height:1\.9[^"]*">)', "data-svc=`"desc_title`"`$1`$2" 
    }
    # Actually let me just handle each pattern case by case for the paragraphs
    # The desc_p1 and desc_p2 are the two p tags after the desc h2 in the description section
    # Let me find them by looking for consecutive p tags with line-height:1.9
    # First occurrence: add data-svc="desc_p1"
    $content = $content -replace '(<p style="(?:margin-top:var\(--sp-4\);)?line-height:1\.9;color:var\(--text-light\);">)', '$1'
    # Second occurrence: add data-svc="desc_p2"
    
    # OK this approach is getting complicated. Let me try a different strategy.
    # I'll use a regex to find the pattern of two consecutive p tags in the desc section
    
    # For files with this pattern:
    # <h2 ... data-svc="desc_title">...</h2>
    # <p style="margin-top:var(--sp-4);line-height:1.9;color:var(--text-light);">
    # <p style="margin-top:var(--sp-4);line-height:1.9;color:var(--text-light);">
    
    # Let's target the specific desc section p tags by matching after data-svc="desc_title"
    $descPattern = '(data-svc="desc_title"[\s\S]*?<p style="(?:margin-top:var\(--sp-4\);)?line-height:1\.9;color:var\(--text-light\);">)'
    $content = [regex]::Replace($content, $descPattern, '$1', [System.Text.RegularExpressions.RegexOptions]::Multiline)

    # I'm going to take a completely different approach - just handle the simple replacements
    # and add data-svc attributes to ALL p tags that have the right style pattern
    
    # Reset and try a cleaner approach
    $content = Get-Content -Path $filePath -Raw -Encoding UTF8
    
    # 1. Add data-svc-key and data-meta-key to html tag
    $content = $content -replace '<html lang="ar" dir="rtl">', "<html lang=`"ar`" dir=`"rtl`" data-svc-key=`"$svcKey`" data-meta-key=`"$svcKey`">"

    # 2. Hero breadcrumb span (last one with page name)
    # For section-hero layout
    $content = $content -replace '(<span style="color:#fff">)([^<]+)(</span>\s*\n\s*</nav>)', "`$1`$2`" data-svc=`"hero_title`"`$3"

    # 3. Hero h1 with heading-lg class
    $content = $content -replace '(<h1 class="heading-lg">)([^<]+)(</h1>)', "`$1`$2`" data-svc=`"hero_title`"`$3"
    # Hero h1 with inline style
    $content = $content -replace '(<h1 style="color:#fff;font-size:2\.5rem;font-weight:800;margin:0">)([^<]+)(</h1>)', "`$1`$2`" data-svc=`"hero_title`"`$3"

    # 4. Hero subtitle
    $content = $content -replace '(<p class="subtitle">)([^<]+)(</p>\s*\n\s*</div>\s*\n\s*<div class="hero-wave">)', "`$1`$2`" data-svc=`"hero_sub`"`$3"
    $content = $content -replace '(<p style="color:rgba\(255,255,255,0\.85\);font-size:1\.15rem;max-width:640px;line-height:1\.8">)([^<]+)(</p>)', "`$1`$2`" data-svc=`"hero_sub`"`$3"

    # 5. Desc section h2 - find the one in Service Description section
    # Pattern: <h2 class="heading-lg" style="margin-top:var(--sp-3 or sp-4)">TEXT</h2> or with span
    $content = $content -replace '(<h2 class="heading-lg" style="margin-top:var\(--sp-[34]\)">)([^<]+)(<span[^>]*>[^<]*</span></h2>)', "`$1`$2`" data-svc=`"desc_title`"`$3"
    $content = $content -replace '(<h2 class="heading-lg" style="margin-top:var\(--sp-[34]\)">)([^<]+)(</h2>)', "`$1`$2`" data-svc=`"desc_title`"`$3"
    
    # 6. Desc paragraphs - these are the p tags with specific styling right after desc h2
    # They have style like: "margin-top:var(--sp-4);line-height:1.9;color:var(--text-light);"
    # or: "color:var(--text-secondary);line-height:1.9;margin-top:var(--sp-4)"
    # The first one is desc_p1, the second is desc_p2
    # We need to find them specifically in the desc section (before Benefits section)
    
    # Strategy: Find the desc_title h2, then the next two p tags
    $descMatch = [regex]::Match($content, 'data-svc="desc_title"')
    if ($descMatch.Success) {
        $afterDescTitle = $content.Substring($descMatch.Index)
        # Find first p tag after desc_title
        $firstP = [regex]::Match($afterDescTitle, '<p style="[^"]*line-height:1\.9[^"]*">')
        if ($firstP.Success) {
            $insertPos = $descMatch.Index + $firstP.Index
            $content = $content.Insert($insertPos + '<p style="'.Length, 'data-svc="desc_p1" ')
        }
        # Find second p tag after desc_title  
        $afterFirstP = $content.Substring($descMatch.Index)
        $secondPMatches = [regex]::Matches($afterFirstP, '<p style="[^"]*line-height:1\.9[^"]*">')
        if ($secondPMatches.Count -ge 2) {
            $insertPos2 = $descMatch.Index + $secondPMatches[1].Index
            $content = $content.Insert($insertPos2 + '<p style="'.Length, 'data-svc="desc_p2" ')
        }
    }

    # 7. Benefits section - h3 and p in cards
    # Benefits header h2
    $content = $content -replace '(<h2 class="heading-lg">)([^<]+)(<span style="color:var\(--primary\)">[^<]*</span></h2>)\s*\n\s*<p class="subtitle">', "`$1`$2`" data-svc=`"benefits_title`"`$3`n        <p class=`"subtitle`""
    
    # Benefits h3 titles and descriptions - in grid-4 with card or benefit-card class
    # We'll match h3 and p pairs within the benefits section
    # Pattern: <h3>TEXT</h3>\n          <p>TEXT</p>
    $benefitIndex = $content.IndexOf('class="grid-4 stagger"')
    if ($benefitIndex -gt 0) {
        # Find all h3 > p pairs in the grid-4 section (until next section)
        $gridSection = $content.Substring($benefitIndex)
        $nextSection = $gridSection.IndexOf('</section>')
        if ($nextSection -gt 0) {
            $gridSection = $gridSection.Substring(0, $nextSection)
        }
        
        $h3Matches = [regex]::Matches($gridSection, '<h[34]>[^<]+</h[34]>\s*\n\s*<p>[^<]+</p>')
        $bIdx = 1
        foreach ($m in $h3Matches) {
            if ($bIdx -le 4) {
                $oldH3 = $m.Value
                $newH3 = $oldH3 -replace '(<h[34]>)([^<]+)(</h[34]>)\s*\n\s*(<p>)([^<]+)(</p>)', "`$1`$2`" data-svc=`"b${bIdx}_title`"`$3`n          `$4`$5`" data-svc=`"b${bIdx}_desc`"`$6"
                $content = $content.Replace($oldH3, $newH3, 1)
                $bIdx++
            }
        }
    }

    # 8. Process section h2 and subtitle
    # The process section has h2 with "خطوات" or "algorithm" - find it by the label
    # Actually we need to find the right h2 - the one in Treatment Process section
    # Let's match the second occurrence of heading-lg h2 (process section)
    $processLabel = [regex]::Match($content, '<span class="label"><i class="fa-solid fa-list-ol"></i>[^<]+</span>')
    if ($processLabel.Success) {
        $afterProcessLabel = $content.Substring($processLabel.Index)
        $processH2 = [regex]::Match($afterProcessLabel, '<h2 class="heading-lg"[^>]*>[^<]+<span[^>]*>[^<]+</span></h2>')
        if ($processH2.Success) {
            $h2Content = $processH2.Value
            if ($h2Content -notmatch 'data-svc') {
                $newH2 = $h2Content -replace '(<h2 class="heading-lg">)', '$1 data-svc="process_title" '
                # Clean up - the data-svc should be an attribute, not inside the tag content
                $newH2 = $h2Content -replace 'class="heading-lg"', 'class="heading-lg" data-svc="process_title"'
                $content = $content.Replace($h2Content, $newH2, 1)
            }
        }
        # Process subtitle
        $afterProcessH2 = $content.Substring($processLabel.Index)
        $processSub = [regex]::Match($afterProcessH2, '<p class="subtitle">[^<]+</p>')
        if ($processSub.Success -and $processSub.Value -notmatch 'data-svc') {
            $newSub = $processSub.Value -replace '(<p class="subtitle">)', '$1 data-svc="process_sub" '
            $newSub = $processSub.Value -replace 'class="subtitle"', 'class="subtitle" data-svc="process_sub"'
            $content = $content.Replace($processSub.Value, $newSub, 1)
        }
    }

    # Process steps - h3/h4 and p pairs in process section
    $processSteps = $content.IndexOf('class="grid-3 stagger" style="grid-template-columns')
    if ($processSteps -lt 0) {
        $processSteps = $content.IndexOf('class="grid-4 stagger"', $content.IndexOf('process'))
    }
    # Actually let's find process steps by the numbered div pattern
    $stepMatches = [regex]::Matches($content, '<div style="font-size:2rem;font-weight:800;color:var\(--primary\);margin-bottom:var\(--sp-3\);">\d+</div>\s*\n\s*<h3>[^<]+</h3>\s*\n\s*<p>[^<]+</p>')
    $stepIdx = 1
    foreach ($m in $stepMatches) {
        if ($stepIdx -le 5) {
            $oldStep = $m.Value
            $newStep = $oldStep -replace '(<h3>)([^<]+)(</h3>)\s*\n\s*(<p>)([^<]+)(</p>)', "`$1`$2`" data-svc=`"step${stepIdx}`"`$3`n          `$4`$5`" data-svc=`"step${stepIdx}d`"`$6"
            $content = $content.Replace($oldStep, $newStep, 1)
            $stepIdx++
        }
    }
    
    # Also handle process-step divs (for files with different layout)
    $stepMatches2 = [regex]::Matches($content, 'class="process-step-num">\d+</div>\s*\n\s*<h[34]>[^<]+</h[34]>\s*\n\s*<p>[^<]+</p>')
    $stepIdx2 = 1
    foreach ($m in $stepMatches2) {
        if ($stepIdx2 -le 5) {
            $oldStep = $m.Value
            $newStep = $oldStep -replace '(<h[34]>)([^<]+)(</h[34]>)\s*\n\s*(<p>)([^<]+)(</p>)', "`$1`$2`" data-svc=`"step${stepIdx2}`"`$3`n          `$4`$5`" data-svc=`"step${stepIdx2}d`"`$6"
            $content = $content.Replace($oldStep, $newStep, 1)
            $stepIdx2++
        }
    }

    # 9. FAQ section
    $faqLabel = [regex]::Match($content, '<span class="label"><i class="fa-solid fa-circle-question"></i>[^<]+</span>')
    if ($faqLabel.Success) {
        $afterFaqLabel = $content.Substring($faqLabel.Index)
        $faqH2 = [regex]::Match($afterFaqLabel, '<h2 class="heading-lg"[^>]*>[^<]+<span[^>]*>[^<]+</span></h2>')
        if ($faqH2.Success -and $faqH2.Value -notmatch 'data-svc') {
            $newFaqH2 = $faqH2.Value -replace 'class="heading-lg"', 'class="heading-lg" data-svc="faq_title"'
            $content = $content.Replace($faqH2.Value, $newFaqH2, 1)
        }
        $afterFaqH2 = $content.Substring($faqLabel.Index)
        $faqSub = [regex]::Match($afterFaqH2, '<p class="subtitle">[^<]+</p>')
        if ($faqSub.Success -and $faqSub.Value -notmatch 'data-svc') {
            $newFaqSub = $faqSub.Value -replace 'class="subtitle"', 'class="subtitle" data-svc="faq_sub"'
            $content = $content.Replace($faqSub.Value, $newFaqSub, 1)
        }
    }

    # FAQ questions and answers
    $faqItems = [regex]::Matches($content, '<span>([^<]+)</span>\s*\n\s*<div class="faq-icon">')
    $faqIdx = 1
    foreach ($m in $faqItems) {
        if ($faqIdx -le 4) {
            $oldQ = $m.Value
            $newQ = $oldQ -replace '(<span>)([^<]+)(</span>)', "`$1`$2`" data-svc=`"faq${faqIdx}_q`"`$3"
            $content = $content.Replace($oldQ, $newQ, 1)
            $faqIdx++
        }
    }
    
    # FAQ answer inner divs
    $faqAnswers = [regex]::Matches($content, '<div class="faq-answer-inner">')
    $faqDIdx = 1
    foreach ($m in $faqAnswers) {
        if ($faqDIdx -le 4) {
            $oldA = $m.Value
            if ($oldA -notmatch 'data-svc') {
                $newA = '<div class="faq-answer-inner" data-svc="faq' + $faqDIdx + '_d">'
                $content = $content.Replace($oldA, $newA, 1)
            }
            $faqDIdx++
        }
    }

    # 10. Related services section
    # Find related services header
    $relatedIdx = $content.IndexOf('<!-- Related Services -->')
    if ($relatedIdx -gt 0) {
        $relatedSection = $content.Substring($relatedIdx)
        # Find service card h3 elements
        $relH3Matches = [regex]::Matches($relatedSection, '<h3 data-key="[^"]*">[^<]+</h3>')
        $relIdx = 1
        foreach ($m in $relH3Matches) {
            if ($relIdx -le 3) {
                $oldRelH3 = $m.Value
                if ($oldRelH3 -notmatch 'data-svc') {
                    $newRelH3 = $oldRelH3 -replace '(<h3 data-key="[^"]*">)([^<]+)(</h3>)', "`$1`$2`" data-svc=`"rel${relIdx}`"`$3"
                    $content = $content.Replace($oldRelH3, $newRelH3, 1)
                }
                $relIdx++
            }
        }
        
        # Find service card p descriptions (the ones after h3 in service-cards)
        $relPMatches = [regex]::Matches($relatedSection, '<p>[^<]+</p>\s*\n\s*<a href="[^"]*\.html" class="card-link">')
        $relPIdx = 1
        foreach ($m in $relPMatches) {
            if ($relPIdx -le 3) {
                $oldRelP = $m.Value
                if ($oldRelP -notmatch 'data-svc') {
                    $newRelP = $oldRelP -replace '(<p>)([^<]+)(</p>)', "`$1`$2`" data-svc=`"rel${relPIdx}d`"`$3"
                    $content = $content.Replace($oldRelP, $newRelP, 1)
                }
                $relPIdx++
            }
        }
    }

    Set-Content -Path $filePath -Value $content -Encoding UTF8 -NoNewline
    Write-Host "Processed: $file"
}

Write-Host "All files processed!"
