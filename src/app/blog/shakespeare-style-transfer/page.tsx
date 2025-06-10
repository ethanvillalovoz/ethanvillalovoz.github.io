"use client";

import { motion } from "framer-motion";

export default function ShakespeareStyleTransferPost() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl font-extrabold bg-gradient-to-r from-primary via-primary-light to-primary-dark bg-clip-text text-transparent"
      >
        What a Tiny Dataset Taught Me About NLP Style Transfer
      </motion.h1>
      <div className="flex items-center gap-2 text-neutral-500 mb-8 text-sm">
        <span>June 10, 2025</span>
      </div>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        className="prose dark:prose-invert bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 shadow space-y-6"
      >
        <p>
          <strong>16. AI Shakespeare Translator</strong> is a neural machine translation system that converts modern English into Shakespearean English using the T5 transformer model. But this project ended up being less about the model — and more about the dataset.
        </p>

        <h2>🔍 The Problem</h2>
        <p>
          Style transfer in NLP is notoriously difficult. Shakespearean English has drastically different structure, vocabulary, and idioms compared to modern English. Most datasets are poorly aligned, meaning parallel examples aren’t really parallel.
        </p>

        <h2>🛠️ The Approach</h2>
        <ul>
          <li>Used Hugging Face’s T5 model (<code>t5-small</code>, <code>t5-large</code>)</li>
          <li>Created a training pipeline for both tiny and full datasets</li>
          <li>Validated everything using a hand-crafted dataset (e.g. “Hello” → “Hail!”)</li>
          <li>Built an interactive demo with Streamlit</li>
        </ul>

        <h2>📊 Results</h2>
        <p>
          <strong>Tiny dataset:</strong> perfect BLEU and ROUGE scores. Immediate convergence. Fluent translations.
        </p>
        <p>
          <strong>Full dataset:</strong> BLEU/ROUGE tanked. Outputs were generic (“I know not.”). The model clearly couldn’t learn from noise.
        </p>

        <h2>📉 The Training Curves</h2>
        <p>
          The tiny model’s loss curve dropped like a rock. The full model struggled. The takeaway? Even the best model can’t compensate for bad data alignment.
        </p>

        <h2>💡 Lessons Learned</h2>
        <ul>
          <li>✅ Always test your pipeline on a tiny, perfectly aligned dataset first</li>
          <li>📊 Data quality beats model complexity every time</li>
          <li>🔍 Don’t trust “cleaned” datasets without inspecting them</li>
        </ul>

        <h2>🔗 Resources</h2>
        <ul>
          <li>
            <a
              href="https://github.com/ethanvillalovoz/ai-shakespeare-translator"
              target="_blank"
              rel="noopener noreferrer"
            >
              📁 GitHub Repository
            </a>
          </li>
          <li>
            <a
              href="https://colab.research.google.com/github/ethanvillalovoz/ai-shakespeare-translator/blob/main/demo.ipynb"
              target="_blank"
              rel="noopener noreferrer"
            >
              🚀 Colab Demo Notebook
            </a>
          </li>
        </ul>

        <p>
          This project reminded me that style transfer is about more than just architecture. If your input-output pairs don’t really align, no amount of fine-tuning will save you.
        </p>
      </motion.article>
    </main>
  );
}
