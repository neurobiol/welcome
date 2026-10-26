# Bioinformatics Projects

A collection of applied bioinformatics projects completed as part of a graduate-level course in bioinformatics at the University of Waterloo. Each project received full marks. More importantly, the work shows how I *approach unfamiliar technical domains: learn the tools independently, build a reproducible workflow, check assumptions and data quality, and communicate results* in a form others can use.

## Skills acquired

- **Fast learning across disciplines:** moved from limited prior biology coursework to completing several graduate-level computational biology workflows.
  
- **End-to-end execution:** handled data retrieval, quality control, analysis, visualization, and written interpretation.
  
- **Technical adaptability:** worked across R, command-line tools, public sequence repositories, and specialized genomics software.
  
- **Sound analytical judgment:** checked reference annotations, used appropriate multiple-testing controls, and distinguished exploratory patterns from statistically supported conclusions.
  
- **Transferable problem-solving:** broke unfamiliar tasks into verifiable steps, investigated unexpected outputs, and used documentation and published research to guide decisions.

These capabilities are useful in research and technology teams where projects cross disciplinary boundaries and progress depends on people who can learn unfamiliar systems, make them operational, and communicate their results clearly.

### Note

I entered the course without formal university-level biology or prior bioinformatics training. My formal background knowledge for this field was an A-level chemistry education that included DNA, followed by focused self-learning and hands-on work with sequencing data, biological databases, statistical methods, and genomics software. However, my twelve years experience in research helped me to digest the contents in an unusually unstressful way.

The projects below reflect both the breadth of the learning and my ability to contribute beyond a narrowly defined role.

## Selected projects

### RNA-seq differential-expression analysis

Analyzed a public RNA-seq dataset of human airway cells exposed to tobacco smoke extract, comparing four treated samples with four controls. I inspected transcript quantification outputs, tested a target transcript, and carried out gene-level differential-expression analysis in R. The workflow included multiple-testing correction, effect-size thresholds, ranked gene tables, volcano plots, and a variance-stabilized heatmap. I also compared results across two GENCODE annotation releases and checked whether the main biological signal remained consistent.

The analysis identified 43 significantly upregulated and 25 significantly downregulated genes under the selected adjusted-p-value and fold-change thresholds. I then carried out additional targeted comparisons of smoke-response genes reported in the source study. This work demonstrates *statistical reasoning, R-based analysis, data visualization, reference-version awareness, and the ability to connect computational results with published biology.*

### 16S microbiome profiling

Built a workflow around 12 paired-end 16S rRNA V3–V4 sequencing runs from a public study of healthy controls, people with REM sleep behavior disorder, their first-degree relatives, and people with early Parkinson’s disease. I retrieved run data programmatically from the European Nucleotide Archive, checked read quality, classified sequences with Kraken 2, estimated genus-level abundance with Bracken, and produced taxonomic profiles and exploratory diversity and ordination visualizations.

The work extended beyond the minimum plotting task to include cohort-aware visualizations, clustered heatmaps, alpha-diversity summaries, PCA, and Bray–Curtis PCoA. I treated these as exploratory results and noted that visual separation alone does not establish a cohort effect; formal testing and covariate-aware analysis would be needed. This demonstrates *end-to-end data handling, command-line and computational workflow skills, careful interpretation, and clear communication of analytical limits*.

### Viral genome assembly and annotation

Processed single-end sequencing reads from a mycobacteriophage dataset: applied read-quality filtering, compared FastQC reports before and after filtering, assembled reads with SPAdes, and annotated the assembly with Prokka. The assembly contained 20 contigs and 20 scaffolds, with a longest contig of 153,248 bases. Initial protein annotation classified 200 of 201 predicted proteins as hypothetical. Re-annotation using a related reference proteome assigned informative functional labels to 45 proteins while leaving the gene count unchanged.

I then inspected the genome in Artemis and mapped tRNA-rich regions, including a dense cluster of 22 predicted tRNAs. This project illustrates how reference knowledge can improve annotation, how to move from raw reads to interpretable genome features, and how to distinguish changes in functional annotation from changes in gene prediction.

### Comparative protein sequence analysis

Used protein-family searches to identify homologs, construct and refine multiple sequence alignments, select conserved regions, and build taxonomy-labeled phylogenetic analyses. The work explored several protein targets, including rhodopsin kinase GRK1, cryptochrome-1, and cone opsin, and included a ConSurf conservation analysis for a structure-backed target. For the rhodopsin-kinase analysis, the report documents 273 significant homologs before redundancy and sequence-quality refinement, followed by a phylogenetic tree and structure-based conservation mapping.

This work developed practical familiarity with sequence databases and homology searches, alignment quality control, evolutionary comparisons, and the relationship between sequence conservation and protein structure.



## Acknowledgment

Thank you to the instructor and the Department of Biology at the University of Waterloo for the opportunity to take this graduate-level bioinformatics course and for the guidance and learning resources that supported these projects.

## Selected references

- Aguiar, J. A., et al. “Transcriptomic and barrier responses of human airway epithelial cells exposed to cannabis smoke.” *Physiological Reports* 7, no. 20 (2019): e14249. https://doi.org/10.14814/phy2.14249. (Source study for the airway-cell RNA-seq dataset.)
- Huang, B., et al. “Gut microbiome dysbiosis across early Parkinson’s disease, REM sleep behavior disorder and their first-degree relatives.” *Nature Communications* (2023). https://doi.org/10.1038/s41467-023-38248-4.
- Wood, D. E., J. Lu, and B. Langmead. “Improved metagenomic analysis with Kraken 2.” *Genome Biology* 20 (2019): 257. https://doi.org/10.1186/s13059-019-1891-0.
- Lu, J., and S. L. Salzberg. “Bracken: estimating species abundance in metagenomics data.” *PeerJ Computer Science* 3 (2017): e104. https://doi.org/10.7717/peerj-cs.104.
- Seemann, T. “Prokka: rapid prokaryotic genome annotation.” *Bioinformatics* 30, no. 14 (2014): 2068–2069. https://doi.org/10.1093/bioinformatics/btu153.
- Carver, T., et al. “Artemis: an integrated platform for visualization and analysis of high-throughput sequence-based experimental data.” *Bioinformatics* 28, no. 4 (2012): 464–469. https://doi.org/10.1093/bioinformatics/btr703.
- Pope, W. H., et al. “Whole genome comparison of a large collection of mycobacteriophages reveals a continuum of phage genetic diversity.” *eLife* 4 (2015): e06416. https://doi.org/10.7554/eLife.06416.

*The references above support the datasets and methods used in the projects. The work described here is coursework and exploratory analysis, not a claim of independent biological validation or publication.*
