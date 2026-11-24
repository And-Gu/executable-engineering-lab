# Chapter 6 experiment opening · WC-01

Q86-20261123 · EEL-Q-S4-EDIT-90-P2-A01 · chapter editor. Private snapshot `edit-90b` was exported from `206828b6f93c673cd09d688a0dc2204d05fd4b13`. [Assignment](../tasks.json)

The second sentence now reads “The model carries both queues into cycle two and repeats the eight-slot phase schedule and chosen arrival pattern, with four vehicles arriving per cycle and eight in all.”

I summed `NS` and `EW` in each scenario’s eight entries in `project/v3/case-study/model-inputs-v1.json`, then checked both 16-slot runs with `runTwoCycles`. Both A and B have two NS and two EW arrivals per cycle, or eight vehicles across two cycles. Both runs repeat the exact eight phases and arrival entries. In A the closing queue at slot 8 and opening queue at slot 9 are both (1 NS, 0 EW). In B both are (2 NS, 0 EW). For each run, the rows at slots 8, 9 and 16 matched `two-cycle-run.json`.

I compared all 273 source paths with the baseline Git archive. Only `site/src/components/learning/TwoCycleExperiment.astro` differed, by the single sentence substitution. Its edited SHA-256 is `2b143dbbe53185fa5ccffad6536ad7fc39a75834ed276f30712fe7d58dde4125`. This check covers source and local model output. The independent verifier will check the rendered sentence on the integrated revision.
