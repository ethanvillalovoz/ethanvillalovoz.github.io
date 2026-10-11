# Publication media provenance

**Current state:** The publication entries show the original BODE-GEN method figure and Social Triangles four-formation diagram (Figure 3), without captions or clickable wrappers. The earlier study photo and experimental-media descriptions below are historical.

## October 10, 2026: clearer Social Triangles thumbnail

At Ethan's request, replaced the low-resolution study photo with the original Figure 3 diagram from page 3 of the local IROS 2023 paper. The figure explains the four evaluated formations rather than depicting a new result or animation. This is archived, coauthored research material used on Ethan's own portfolio; its adjacent publication title, authors, and Paper link provide attribution.

Extraction: image `Im3.png` from `pypdf.PdfReader(source).pages[2].images`, original PNG at 1347 × 507. Export: `public/images/projects/social-triangles-formations-thumbnail.png`, 1347 × 842 PNG, with 167 white pixels added above and 168 below to fit the existing 16:10 frame. No source resampling, redrawing, within-figure cropping, or color changes. All labels and direction arrows remain intact. The previous photo is retained for easy reversal. Display remains non-clickable, up to 644px wide, with the existing responsive sizing and no caption.


These figures appear on Ethan Villalovoz's personal coauthor portfolio, not an unofficial project page. The figure is archived paper evidence, not a new experiment or generated illustration. The user explicitly approved trying authentic figures from his papers on 2026-09-20.

| Asset | Source | Owner / classification | Authorized use | Attribution | Output |
| --- | --- | --- | --- | --- | --- |
| Social Triangles wedge study photograph | Local IROS 2023 paper, page 4, Figure 6(a) | Research authors; owned team material authorized by coauthor Ethan for this portfolio; publisher rights retained | Extract the original photograph for its publication thumbnail | Adjacent title, author list, and Paper link; repository notices | `public/images/projects/social-triangles-wedge-study.png` |
| BODE-GEN method diagram | Figure 1, arXiv:2512.15076 | Existing coauthored research asset | Keep existing thumbnail | Adjacent title, author list, and Paper link | `public/images/projects/bodegen-method-thumbnail.webp` |

The Social Triangles PNG is extracted with pypdf from zero-based page 3, image `Im7.png` (Figure 6a). Source PDF: `public/data/research/2023_OSU_Social_Triangles_and_Aggressive_Lines/2023_IROS_Social_Triangles_Agressive_Lines_bacula.pdf`.

Export: 615 × 382 pixels, PNG, 268,084 bytes. No resampling, overlays, color changes, or within-photo cropping. The other panel, Figure 6b (V-shape), is not included; alt text identifies the wedge condition. The photo is displayed with `object-fit: contain` in the existing 250 × 156px desktop slot and a stacked mobile slot. Source resolution limits fine detail on high-density mobile screens; it has not been artificially upscaled.

The BODE-GEN method figure remains the best compact overview among the paper's diagrams, plots, and prompt examples. Its whitespace is chiefly vertical; trimming that would not enlarge content in a width-constrained slot, so the original is retained.

Media audit verified dimensions and format. Browser checks verified image loading, full-subject composition on desktop, and mobile sizing without overflow. The old Social Triangles results plot remains as an archived source asset.

## October 10, 2026: local interactive explanations

The current reading layout renders the original images up to 644px wide, with `contain` fit and their full labels intact. This supersedes the older 250px-slot description above. Images remain non-clickable.

| Asset | Source | Owner / class | Evidence represented | Changes / attribution |
| --- | --- | --- | --- | --- |
| Social Triangles threat plot, `public/images/projects/social-triangles-threat-thumbnail.webp` | Local coauthored IROS paper, Figure 7 / Section V-D / Table II | Existing team asset, previously used on this portfolio; Owned | Archived measured study result | Reused unchanged in Results tab; caption identifies original Figure 7, N=24, and scale direction; title, authors, paper link remain adjacent |
| BODE-GEN SVG loop | https://arxiv.org/html/2512.15076v1#S3.SS2 | Original site illustration; Owned | Derived explanation | New schematic and paraphrased four-step explanation, not output from running BODE-GEN. Caption states this and cites §3.2. No results or numeric performance fabricated. |
| Social Triangles SVG turtles / four arrangements | Local paper, Figure 3 and Sections III–V | Original site illustration; Owned | Concept illustration | Schematic top-view positions and transitions, not recorded motion, control policy, timing, or scale. Wedge/V direction follows the paper; description distinguishes pilot and approach studies. Caption labels this. |

These are a local portfolio preview for a coauthor. No new external media was downloaded or published. No authentic video was available among the inspected project assets, so the preview does not invent one. The formation transition demonstrates geometry, not measured navigation performance. A comparison slider would incorrectly imply aligned visual outputs, so the actual results use their original plot instead.

Verification: PNG media audit and repository validation passed; targeted ESLint passed. The exported diagram region is pixel-identical to the extracted source. Desktop and narrow-viewport browser inspection confirmed the figure loads, all four formations and labels remain visible, and the image has no link wrapper. Export size: 131,194 bytes. Nothing published.
