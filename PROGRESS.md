# Progress

## Goal

Polish the LaTeX CV for an astrophysics audience while preserving its factual content, using the website's three current research themes as the project structure.

## Done

- Professionalized the typography, header, section hierarchy, wording, dates, and terminology in `CV-Save-To-Documents/main.tex` (notably lines 11--69 and 134--289).
- Replaced the prior five-entry section with exactly three “Research Projects” derived from `config.js`: super-Eddington accretion, accretion outflows/AGN feedback, and semi-analytic SMBH--galaxy co-evolution (`CV-Save-To-Documents/main.tex:297`).
- Consolidated the earlier Bondi-to-bulge and clumpy-wind material into the appropriate three themes without dropping methods, results, manuscript status, or paper references.
- Removed the forced page break before talks and rebalanced the content into a full two-page A4 CV (`CV-Save-To-Documents/main.tex:348`).
- Reduced spacing between publication entries using publication-specific list settings (`CV-Save-To-Documents/main.tex:237`), without changing their font size.
- Rebuilt `CV-Save-To-Documents/main.pdf`; it compiles successfully and both pages were visually checked for spacing, clipping, and page flow.
- Updated the website CV download target to `files/HH_CV_Resume202608.pdf` (`config.js:9`).
- Verified that `files/HH_CV_Resume202608.pdf` is byte-identical to the latest compiled `CV-Save-To-Documents/main.pdf`.

## In progress

- None; the website now serves the latest CV under the requested filename.

## Next steps

1. If requested, remove or relocate the local `\renewcommand{\large}{\small}` so it applies only to talk entries, not the section title.
2. Recompile, copy the result to `files/HH_CV_Resume202608.pdf`, and visually verify after any further CV change.

## Open questions / blockers

- The smaller title is caused by the local font-size override at `CV-Save-To-Documents/main.tex:343`; correcting it may require minor spacing adjustments to retain the two-page layout.

## Key context

- `config.js:97` is the current structured source for website research highlights; `Res.html` contains older static content.
- The three project titles follow the website taxonomy at `config.js:97`: Super-Eddington Accretion; Outflows from Accretion and AGN Feedback; Semi-Analytic Models of SMBH Growth and Galaxy Co-evolution.
- The generated PDF is now two pages, with Research Projects and all talks fitting cleanly on page 2.
- The homepage download button reads `personalInfo.cvLink` from `config.js`; its current target is `./files/HH_CV_Resume202608.pdf`.
