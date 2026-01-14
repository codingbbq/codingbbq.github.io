---
sidebar_position: 2
sidebar_label: Parameters
---

<div className="text--center"> <img src="/img/parameters-in-llm.png" alt="Parameters overview" width="600" /> </div>

When people say an AI model is “large”, they’re usually talking about parameters.

So what are parameters?

At the simplest level, parameters are numbers the model learns during training.

These numbers decide:
- how words relate to each other
- how strong those relationships are
- what the most likely next word should be

When you type:
 👉 “I love drinking hot ___”

The model doesn’t guess randomly.
It uses millions or billions of learned numbers (parameters) to score options like tea, coffee, or soup — and picks the most likely one.

Inside an LLM:
- Words are converted into numbers (embeddings)
- Those numbers flow through layers of matrices
- Each matrix contains weights (these are parameters)
- During training, these weights are adjusted to reduce prediction errors

📈 Why more parameters matter
- Better context understanding
- Ability to model subtle language patterns
- Improved reasoning and fluency

⚠️ But more parameters also mean:
- Higher compute cost
- More memory usage
- More careful training and evaluation

So when you hear:
“This model has billions of parameters”
It really means:
"The model has learned billions of numerical relationships about language."

That’s what makes LLMs powerful.