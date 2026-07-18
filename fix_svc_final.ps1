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
    $content = Get-Content -Path $filePath -Raw -Encoding UTF8

    # 1. Fix FAQ answers - add data-svc if missing
    $faqCount = ([regex]::Matches($content, 'class="faq-item reveal"')).Count
    for ($i = 1; $i -le $faqCount; $i++) {
        # Fix FAQ answer div
        $oldAnswer = '<div class="faq-answer-inner">'
        $newAnswer = "<div class=`"faq-answer-inner`" data-svc=`"faq${i}_d`">"
        if ($content -notmatch "data-svc=`"faq${i}_d`"") {
            $content = $content.Replace($oldAnswer, $newAnswer, 1)
        }
    }

    # 2. Fix FAQ questions - add data-svc if missing
    $faqIdx = $content.IndexOf('fa-circle-question')
    if ($faqIdx -gt 0) {
        for ($i = 1; $i -le $faqCount; $i++) {
            $tag = "data-svc=`"faq${i}_q`""
            if ($content.Substring($faqIdx) -notmatch [regex]::Escape($tag)) {
                # Find next <span> that doesn't have data-svc after faq-section start
                $remaining = $content.Substring($faqIdx)
                $spanMatch = [regex]::Match($remaining, '<span>([^<]+)</span>\s*\n\s*<div class="faq-icon">')
                if ($spanMatch.Success) {
                    $qText = $spanMatch.Groups[1].Value
                    $oldQ = "<span>$qText</span>"
                    $newQ = "<span data-svc=`"faq${i}_q`">$qText</span>"
                    $content = $content.Replace($oldQ, $newQ, 1)
                }
            }
        }
    }

    # 3. Fix missing faq_sub
    if ($content -notmatch 'data-svc="faq_sub"') {
        $flIdx = $content.IndexOf('fa-circle-question')
        if ($flIdx -gt 0) {
            $remaining = $content.Substring($flIdx)
            $subMatch = [regex]::Match($remaining, '<p class="subtitle">[^<]+</p>')
            if ($subMatch.Success -and $subMatch.Value -notmatch 'data-svc') {
                $pos = $flIdx + $subMatch.Index + '<p class="'.Length
                $content = $content.Insert($pos, 'data-svc="faq_sub" ')
            }
        }
    }

    # 4. Fix missing process_sub
    if ($content -notmatch 'data-svc="process_sub"') {
        $plIdx = $content.IndexOf('fa-list-ol')
        if ($plIdx -gt 0) {
            $remaining = $content.Substring($plIdx)
            $subMatch = [regex]::Match($remaining, '<p class="subtitle">[^<]+</p>')
            if ($subMatch.Success -and $subMatch.Value -notmatch 'data-svc') {
                $pos = $plIdx + $subMatch.Index + '<p class="'.Length
                $content = $content.Insert($pos, 'data-svc="process_sub" ')
            }
        }
    }

    # 5. Fix missing desc_p2 - find second <p style=...line-height:1.9...> in description section
    if ($content -notmatch 'data-svc="desc_p2"') {
        $descTitleIdx = $content.IndexOf('data-svc="desc_title"')
        if ($descTitleIdx -lt 0) {
            # Find the desc section by label
            $descLabelIdx = $content.IndexOf('�� ������</span>')
            if ($descLabelIdx -gt 0) {
                $descTitleIdx = $descLabelIdx
            }
        }
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

    # 6. Fix missing desc_p1
    if ($content -notmatch 'data-svc="desc_p1"') {
        $descTitleIdx = $content.IndexOf('data-svc="desc_title"')
        if ($descTitleIdx -lt 0) { $descTitleIdx = $content.IndexOf('�� ������</span>') }
        $benefitsIdx = $content.IndexOf('<!-- Benefits -->')
        if ($descTitleIdx -gt 0 -and $benefitsIdx -gt $descTitleIdx) {
            $descSection = $content.Substring($descTitleIdx, $benefitsIdx - $descTitleIdx)
            $pMatch = [regex]::Match($descSection, '<p style="[^"]*line-height:1\.9[^"]*">')
            if ($pMatch.Success) {
                $insertPos = $descTitleIdx + $pMatch.Index + $pMatch.Length
                $content = $content.Insert($insertPos, ' data-svc="desc_p1" ')
            }
        }
    }

    # 7. Fix missing desc_title
    if ($content -notmatch 'data-svc="desc_title"') {
        $descLabelIdx = $content.IndexOf('�� ������</span>')
        if ($descLabelIdx -gt 0) {
            $remaining = $content.Substring($descLabelIdx)
            $h2Match = [regex]::Match($remaining, '<h2 class="heading-lg" style="margin-top:var\(--sp-\d+\);?">')
            if ($h2Match.Success) {
                $pos = $descLabelIdx + $h2Match.Index + $h2Match.Length
                $content = $content.Insert($pos, ' data-svc="desc_title"')
            }
        }
    }

    # 8. Fix missing hero_sub (section-hero style)
    if ($content -notmatch 'data-svc="hero_sub"') {
        $sectionHeroIdx = $content.IndexOf('section-hero')
        if ($sectionHeroIdx -gt 0) {
            $remaining = $content.Substring($sectionHeroIdx)
            $pMatch = [regex]::Match($remaining, '<p style="color:rgba\(255,255,255,0\.85\);font-size:1\.15rem;max-width:640px;line-height:1\.8">')
            if ($pMatch.Success) {
                $pos = $sectionHeroIdx + $pMatch.Index + $pMatch.Length
                $content = $content.Insert($pos, ' data-svc="hero_sub"')
            }
        }
        # page-hero style
        if ($content -notmatch 'data-svc="hero_sub"') {
            $pageHeroIdx = $content.IndexOf('page-hero-content')
            if ($pageHeroIdx -gt 0) {
                $remaining = $content.Substring($pageHeroIdx)
                $pMatch = [regex]::Match($remaining, '<p class="subtitle">')
                if ($pMatch.Success -and $pMatch.Value -notmatch 'data-svc') {
                    $pos = $pageHeroIdx + $pMatch.Index + $pMatch.Length
                    $content = $content.Insert($pos, ' data-svc="hero_sub"')
                }
            }
        }
    }

    Set-Content -Path $filePath -Value $content -Encoding UTF8 -NoNewline
    Write-Host "Fixed: $file"
}

Write-Host "Done!"
