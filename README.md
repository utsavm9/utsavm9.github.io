# Resume

LaTeX source for my resume.

## Requirements

A TeX distribution with `latexmk` and `pdflatex` (e.g. [MacTeX](https://tug.org/mactex/) or [TeX Live](https://tug.org/texlive/)).

## Build

**Resume:**
```sh
latexmk -pdf -jobname=Resume resume.tex && latexmk -c -jobname=Resume resume.tex
```

**CV:**
```sh
latexmk -pdf -jobname=CV cv.tex && latexmk -c -jobname=CV cv.tex
```

Compiles the `.tex` source to a PDF (`-jobname` renames the output), then deletes the aux/log files latexmk created (`-c`) while keeping the PDF.
