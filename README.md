# Resume

LaTeX source for my resume.

## Requirements

A TeX distribution with `latexmk` and `pdflatex` (e.g. [MacTeX](https://tug.org/mactex/) or [TeX Live](https://tug.org/texlive/)).

## Build

```sh
latexmk -pdf -jobname=Resume resume.tex && latexmk -c -jobname=Resume
```

Compiles `resume.tex` to `Resume.pdf` (`-jobname` renames the output), then deletes the aux/log files latexmk created (`-c`) while keeping the PDF.
