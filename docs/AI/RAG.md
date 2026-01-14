---
sidebar_position: 5
sidebar_label: RAG
---

# What is RAG in AI?

<div className="text--center"> <img src="/img/RAG.png" alt="RAG overview" width="600" /> </div>

When an AI answers a question, it needs two things:
1️⃣ Instructions on how to answer
2️⃣ Information on what to answer

If either is missing, the answer can be wrong—just like a human guessing without enough context.

This is where RAG (Retrieval-Augmented Generation) comes in.
Instead of asking the AI to answer everything from memory, RAG lets it:

✔️ first look up the right information 
 - a company database
 - user-specific data
 - previous conversations
 - documents or the internet

✔️ then use that information to generate an answer

🔍 Why RAG matters
- It reduces hallucinations
- It gives more accurate, up-to-date answers
- It allows context to be specific to each question, not shared across all users

⁉️ Can we just put the context in the prompt? Why do we need RAG?
Yes, you can put context directly in the prompt — but it doesn’t scale.

🔵 Context size limits
LLMs have a fixed context window, so pasting large documents or datasets directly into prompts quickly becomes impractical. RAG retrieves only the most relevant information needed for each query.

🔵 Scalability
Embedding context in prompts may work for small demos, but it doesn’t scale when each user and question requires different data. RAG dynamically builds context per request instead of relying on static prompts.

🔵 Accuracy and hallucination reduction
When models lack the right information, they tend to guess. RAG supplies verified, relevant data at query time, significantly reducing hallucinations.

🔵 Security and data isolation
Putting all data in prompts risks mixing or exposing sensitive information. RAG ensures only user-specific and query-relevant data is retrieved and shared with the model.

🔵 Maintainability and freshness
Updating prompt-embedded knowledge is difficult and error-prone. With RAG, you simply update the data source—no prompt rewrites or model retraining required.

RAG is such a powerful pattern for real-world AI applications.