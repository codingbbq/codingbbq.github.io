- AWS AI Business Strategist

### Q.1. The CDO's deadline is Friday.

A vendor proposal lands in your inbox the same week and contains the following sentence: "Our system runs inference in real time on each new transaction to produce a fraud score." Which two AI concepts does the vendor's sentence reference, and how would you translate them for the CDO?

- A. Inference and prediction: the model making a decision on new data, and the fraud score it produces
- B. Algorithm and model: the underlying recipe and the trained system
- C. Training and algorithm: the process that produced the model and the recipe behind it
- D. Model and training: the trained system and the process that built it

**Inference and prediction: the model making a decision on new data, and the fraud score it produces** 
Inference is the model making a decision on new data, and the fraud score is the prediction it produces. Recognizing the pair lets you translate the line for a non-technical audience: "The system applies what it has already learned to score every new transaction as it happens."


---


### Q.2. The CDO needs the rest of the list classified before the briefing goes to the board.

Two example systems will set the pattern. 

- System X: Auto-assigns returns to a destination using a fixed table of return reason → warehouse. 
- System Y: Predicts which products a customer is most likely to buy next, based on three years of purchase history.

The CDO asks you to classify both before the rest of the list goes through. Which classification of System X and System Y is most accurate, and what does it imply about how to brief the board?

- A. System X is machine learning; System Y is generative AI
- B. System X is rules-based automation; System Y is machine learning
- C. System X is generative AI; System Y is rules-based automation
- D. Both System X and System Y are generative AI
 
**System X is rules-based automation; System Y is machine learning**
A fixed lookup table is rules someone wrote, which is automation, not AI. A model that learns patterns from historical data is machine learning. Neither system generates new content, so generative AI does not apply. Calling System X "AI" in the briefing would lump automation in with the company's actual ML work and inflate the picture for the board.


---
 
 
### Q.3. The Director of Merchandising wants to use AI to summarize the themes in 50,000 customer support call recordings from the past year.

The data team forwards the question to you before they scope the work. Which data type description fits the input, and what does it imply for the work?

- A. Structured data; the AI can read the recordings directly from existing dashboards
- B. Unstructured data; extracting themes will require processing the audio or the transcripts before the AI can act on it
- C. Semi-structured data; the AI can use the existing fields without any further processing
- D. Structured data; recordings convert automatically to rows and columns at intake
 
**Unstructured data; extracting themes will require processing the audio or the transcripts before the AI can act on it**
Audio recordings have no fixed schema, which makes them unstructured. Extracting value from unstructured data requires processing. In this case, transcription and analysis of the language inside the calls. That processing is the budget and time investment to plan for before scoping the AI work itself.


---


### Q.4. The Director of Merchandising flagged three known defects (missing category labels, duplicate customer records, inconsistent currency/date formats).

A consultant brought in to review the training data for AnyCompany Retail's customer-service AI pilot surfaces a fourth, less visible problem: the dataset over-represents complaints from one region and under-represents complaints from three others. Which AI consequence is most likely from the consultant's finding, and how should you describe the risk to the CDO?

- A. The model will be confident about the over-represented region and unreliable on the others
- B. The model will run more slowly on the under-represented regions during inference
- C. The model will refuse to make predictions for the under-represented regions on its own
- D. The model will automatically detect and correct the imbalance at inference time
 
**The model will be confident about the over-represented region and unreliable on the others**
The model will be confident about the over-represented region and unreliable on the others
Biased samples produce confident predictions where the model has seen many examples and unreliable predictions where it has not. The risk is silent: the model still produces an answer, but the answer is wrong for the under-represented segments. The right framing for the CDO is that the over-represented region's accuracy will mask the failure on the others until a customer or a regulator notices.


---


### Q.5. The same vendor proposes training a customer service routing model on the past four years of support tickets.

The previous two years used a ticket platform that AnyCompany Retail retired last quarter and is no longer collecting new tickets in. The CDO asks you for the recommendation before the vendor's proposal goes to procurement. Which response best applies the principles of appropriate training data, and what would you tell the vendor?

- A. Use all four years of support ticket data; more training data always improves model accuracy
- B. Use only the oldest two years of data; older data is more stable and better understood at this point
- C. Reject the proposal entirely; any change in source systems makes the training data unusable
- D. Use only the most recent two years; older data depends on a feature the company no longer collects

**Use only the most recent two years; older data depends on a feature the company no longer collects** 
Use only the most recent two years; older data depends on a feature the company no longer collects
Training data should reflect inputs the model will see in production. Tickets from a retired platform will not be available at inference time, so a model trained on them depends on a feature the company cannot supply going forward. Tell the vendor to scope the model to the two recent years on the new platform and to flag the recency caveat in the design.


---


### Q.6. The vendor's proposal includes this language: "Our AI platform aligns with ISO/IEC 42001 and uses terminology consistent with ISO/IEC 23053."

The CEO is on a call with the vendor next week and asks the CDO to surface what the citation actually means before the call. Which conclusion about the vendor's claim is most accurate, and what should the CEO ask on the call?

- A. The vendor has been independently certified by an external auditor to the published standard
- B. The vendor has self-declared alignment; the buyer should ask what specifically is aligned and whether an independent audit has happened
- C. The vendor's AI platform is guaranteed to be safe, bias-free, and ready for any use case
- D. The vendor is using marketing jargon and the citation can be ignored as vendor noise
 
**The vendor has self-declared alignment; the buyer should ask what specifically is aligned and whether an independent audit has happened**
The vendor has self-declared alignment; the buyer should ask what specifically is aligned and whether an independent audit has happened
Alignment means a self-declared mapping of internal practices to the standard. It is a meaningful signal that warrants follow-up questions about specifics, evidence, and whether an independent audit has happened. The CEO's strongest questions test the claim without assuming either the best or the worst: which 42001 clauses are you implementing, are you self-aligned or independently certified, when was your last internal review, and where in your documentation can our team see the mapping?


---


### Q.7. Which framework addresses that request, and what does it provide?

A European partner asks AnyCompany Retail to describe its AI systems using terminology both organizations and their regulators can interpret consistently. Which framework addresses that request, and what does it provide?

- A. ISO/IEC 42001, which provides a shared vocabulary for describing AI systems
- B. ISO/IEC 42001, which certifies that an organization governs its AI responsibly
- C. ISO/IEC 23053, which certifies that an organization governs its AI responsibly
- D. ISO/IEC 23053, which provides a shared vocabulary for describing AI systems

**ISO/IEC 23053, which provides a shared vocabulary for describing AI systems**
ISO/IEC 23053 is a framework for describing AI systems, and its contribution is a shared vocabulary that lets other organizations and regulators interpret a description consistently. A partner asking for consistent terminology is asking for exactly that reference point, which is what makes cross-border procurement conversations workable.


---


### Q.8. The model reports near-perfect accuracy in testing. What should the digital strategy team recommend?

A vendor proposes training a churn prediction model on a customer dataset in which each record includes a field marking whether the customer submitted a cancellation request. The model reports near-perfect accuracy in testing. What should the digital strategy team recommend?

- A. Approve the model, and ask the vendor to retest it on a larger sample of customers
- B. Exclude the cancellation field, because customer requests are too sensitive to model
- C. Exclude the cancellation field, because it will not be available before a customer leaves
- D. Approve the model, because near-perfect test accuracy demonstrates the approach works

**Exclude the cancellation field, because it will not be available before a customer leaves**
Data that correlates with the outcome but is not available at prediction time has to be excluded. The model appears accurate because it notices that the customer already canceled, which is information the business does not have when it needs the prediction. Tell the vendor to retrain without the field and to report accuracy again, because the honest number will be lower and far more useful.


---


### Q.9. What is the most likely effect on a model trained on the combined data?

AnyCompany Retail's European and United States point-of-sale systems were never reconciled after an integration, so the two record transaction values in different currencies and dates in different formats. What is the most likely effect on a model trained on the combined data?

- A. The model will convert the currencies and dates during training to a single standard
- B. The model will flag the inconsistency so the data team can correct the records
- C. The model will produce accurate results for the larger region and no results for the smaller
- D. The model will treat identical values as different values, fragmenting its view of reality

**The model will treat identical values as different values, fragmenting its view of reality**
Inconsistent formatting causes the system to treat the same value as multiple different values, and its view of reality fragments. A model that reads euros and dollars as the same unit misreads every European transaction by the difference between the currencies. Naming the defect precisely matters, because the fix is upstream reconciliation rather than a better model.


---


### Q.10. What should the digital strategy team conclude?

A vendor describes a "smart AI engine" for assigning loyalty tiers. Under questioning, the vendor confirms that a customer who spends more than a set amount in twelve months always receives Gold status, and that the thresholds are set by the vendor's staff. What should the digital strategy team conclude?

- A. The system is generative AI, because it produces a tier assignment for each customer
- B. The system is machine learning, because tier assignment varies from customer to customer
- C. The system is rules-based automation, because fixed thresholds set by staff are written rules
- D. The system is machine learning, because it processes twelve months of spending history

**The system is rules-based automation, because fixed thresholds set by staff are written rules**
The system is rules-based automation, because fixed thresholds set by staff are written rules
Two of the three diagnostic questions settle this. The system follows thresholds people wrote rather than patterns learned from data, and the same input always produces the same output. That makes it automation rather than AI. The practical consequence is that the team should not pay AI prices for a rules engine in different packaging.


---


### Q.11. A vendor proposes training a demand forecasting model on five years of AnyCompany Retail sales history.

Two of those years cover a period when store closures pushed nearly all sales online, and shopping patterns have since returned to a mix of store and online purchases. Which recommendation best applies the principles of appropriate training data?

- A. Use only the two unusual years, because they contain the highest online sales volume
- B. Limit the training window to the period that reflects current patterns, and document why
- C. Use all five years, because a longer history always produces a more reliable forecast
- D. Use all five years, and let the model determine which periods remain relevant


**Limit the training window to the period that reflects current patterns, and document why**
Recency and relevance both apply here. Data from a period when the business operated very differently is not predictive of current behavior, so a model trained on it forecasts a world that no longer exists. Scoping the window to the period that matches today's mix, and documenting the choice, gives the forecast a defensible basis and tells the vendor which years are in scope.


---


### Q.12. A merchandising analyst reads a status report from the engineering team that includes the sentence,

"The system was shown two years of returns data until it could identify which items were likely to be sent back." Which core AI concept does the sentence describe?

- A. Prediction, because the sentence describes items identified as likely returns
- B. Algorithm, because the sentence describes the processing steps engineers wrote
- C. Training, because the system learned the pattern from historical examples
- D. Inference, because the system is producing an answer about which items qualify

**Training, because the system learned the pattern from historical examples**
Training is the process of feeding a system historical examples where the answer is already known until it learns the pattern. The phrase "was shown two years of returns data until it could identify" describes that process. Recognizing training in a status report lets a strategist ask the next useful question: how recent is the data the system learned from?


---


### Q.13. Which classification of the two initiatives is most accurate?

A slide sent to the board lists two initiatives under one "AI" heading: a tool that writes personalized product descriptions, and a scorer that rates each support ticket for urgency. 

- A. Both are generative AI, because both produce an output from customer data
- B. The description tool is generative AI; the urgency scorer is machine learning
- C. The description tool is machine learning; the urgency scorer is generative AI
- D. Both are rules-based automation, because both follow instructions engineers wrote

**The description tool is generative AI; the urgency scorer is machine learning**
The second diagnostic question asks what the system is doing. A tool that produces new text is generative AI, and a system that sorts items into categories or produces a number is classical machine learning. Both belong under the AI umbrella, but labeling them identically on a board slide invites the board to expect generative capabilities from a scoring model.


---


### Q.14. After a loyalty system migration, some AnyCompany Retail customers appear in the customer database two or three times with slightly different contact information.

The data team asks the digital strategy team what this means for a planned recommendation model. Which consequence is most likely?

- A. The model will exclude the repeated customers because their records conflict
- B. The model will merge the repeated records automatically during training
- C. The model will weight the repeated customers more heavily than it should
- D. The model will run more slowly because it processes the additional records

**The model will weight the repeated customers more heavily than it should**
Duplicate records cause some examples to carry more weight than they should. A customer appearing three times acts like three customers, so the model treats that behavior as triple-weighted evidence and its learned patterns skew toward the over-counted ones. The right framing for leadership is that the defect distorts what the model learns rather than announcing itself as an error.


---


### Q.15. A dashboard built for the digital strategy team displays the line, "Customer 4412 has an 82 percent likelihood of lapsing this quarter."

Which core AI concept does that line represent?

- A. The prediction, because it is the output the trained system produced
- B. The algorithm, because a percentage is the result of a calculation
- C. The model, because the trained system is what appears on the dashboard
- D. The training data, because customer records are what the system learned from

**The prediction, because it is the output the trained system produced**
A prediction is the actual output a model produces: the recommendation, the score, or the answer. An 82 percent likelihood is a score, which makes it a prediction. Separating the prediction from the system that made it helps a strategist ask how the score should be acted on and how often it is wrong.


---


### Q.16. The catalog team proposes an AI project that would draw on AnyCompany Retail's product catalog entries.

Each entry carries fixed attributes such as SKU, price, and color, along with a free-text narrative description that varies in length and style. How should the data be classified, and what does the classification imply?

- A. Semi-structured data, because fixed attributes sit alongside free-text content
- B. Unstructured data, because the narrative descriptions have no fixed schema
- C. Structured data, because catalog entries are stored in a single business system
- D. Structured data, because every entry contains the same fixed attribute fields

**Semi-structured data, because fixed attributes sit alongside free-text content**
Semi-structured data has some structure but not a fixed schema across all records, and product catalog entries with structured attributes plus narrative descriptions are the module's example of it. The classification matters because the free-text half will need processing before AI can use it, while the attribute half is ready to work with.


---


### Q.17. You sit down with the prompts the VP Marketing forwarded.

The marketing manager wrote this one: "Write something good about our new winter coat for the website." The output is generic and off-brand. The team is asking you which revision actually fixes it. Which revision applies the most prompt engineering principles correctly, and what would you tell the team?

- A. "Write something better about our new winter coat for the website" (the same prompt with one different adjective)
- B. "Write a 100-word product description for the AnyCompany Retail AnyProduct-1 winter coat for women's cold-weather travel. Brand voice: approachable, modern, trend-aware. Format: 2 sentences of feature, 1 sentence of feel, 1 sentence of value."
- C. "Write product descriptions for all of our winter coats. Make sure they are short, persuasive, brand-appropriate, accurate, scannable, accessible, professional, and friendly across the catalog."
- D. "Try again with the winter coat description and improve it for our website" (the same prompt rephrased)

**"Write a 100-word product description for the AnyCompany Retail AnyProduct-1 winter coat for women's cold-weather travel. Brand voice: approachable, modern, trend-aware. Format: 2 sentences of feature, 1 sentence of feel, 1 sentence of value."**
The revision applies all four principles. Clarity (one task, named product). Specificity (length, audience). Context (brand voice). Structured output (sentence-by-sentence format). The tool now has what it needs to produce on-brand output.


---


### Q.18. The team is using the tool to write personalized emails.

Each prompt includes the customer's full 18-month purchase history. The marketing writers report that the AI sometimes "forgets" the most recent purchases and references items from over a year ago. The VP Marketing wants an explanation by Friday, before deciding on the vendor's larger-context-window upgrade. What is the most likely explanation, and what does it tell you about whether the upgrade is the right fix?

- A. The history exceeds the context window, and recent items get pushed out as more is added
- B. The model is malfunctioning and needs to be retrained on the latest production data
- C. The history exceeds the context window, and only the earliest information remains in view
- D. The AI is hallucinating randomly; this behavior is unrelated to prompt size or input length

**The history exceeds the context window, and recent items get pushed out as more is added**
When inputs exceed the context window, the earliest information falls out of view. The model writes from whatever survives. The cheaper fix is to send a summary of older purchases plus full detail on recent ones, not a larger window. Test that fix before approving the upgrade. Buying the upgrade locks in three times the per-prompt cost without confirming the existing window was being used well.


---

### Q.19. The vendor's two proposals land on your desk.

Customer service wants a chatbot that answers questions about AnyCompany Retail's specific products, return policies, and store hours. The information changes weekly. The Director of CX wants your input before the kickoff meeting Monday. Which adaptation technique is the best fit for the customer service chatbot, and why?

- A. Fine-tuning, because the chatbot needs to learn the company's customer service style and tone
- B. Fine-tuning, because customer service answers require consistent vocabulary across the team
- C. RAG, because the answers need to be grounded in company-specific information that changes weekly
- D. Neither, because the off-the-shelf tool can produce the answers if the prompts are written well

**RAG, because the answers need to be grounded in company-specific information that changes weekly**
RAG fits when answers need to be grounded in company-specific information that changes regularly. The library is updated as policies and products change; the model stays the same. Fine-tuning would have to be retrained for every weekly update, which is expensive and slow. A useful question for the vendor: "How often does the retrieval library need to be updated, and who owns that update process?" That exposes operational reality before the contract is signed.


---

### Q.20.A team wants an assistant that answers customer questions from the current returns policy and does so in the company's established brand voice.

Which approach addresses both needs?

- A. Fine-tuning alone, because a retrained model absorbs both the voice and the policy
- B. Fine-tuning combined with retrieval-augmented generation, because the gaps differ
- C. Neither technique, because grounding and voice requirements conflict with each other
- D. Retrieval-augmented generation alone, because the policy library governs both needs

**Fine-tuning combined with retrieval-augmented generation, because the gaps differ**
The two techniques are not exclusive, and a common production pattern pairs a fine-tuned voice model with a retrieval-connected reference library so the system writes on brand and answers from current information. Two distinct gaps, information and voice, call for the technique that closes each.

---


### Q.21. A pilot prompt template pastes a customer's complete two-year support history into every request. 

For the most active customers, the tool writes summaries that leave out part of the history while reading as though nothing were missing. Which explanation fits the pattern?

- A. The tool has been trained on outdated support records and needs to be retrained
- B. The tool ranks each contact record by importance and reports only the significant ones
- C. The model is producing random errors that have no relationship to the prompt length
- D. The prompt sends more than the window holds, so some history never arrives

**The prompt sends more than the window holds, so some history never arrives**
The context window is the limit on how much the model can hold at once, covering both the prompt and the response. When a prompt sends more than the window holds, part of what was sent does not reach the model, and the output still reads as complete. Which part gets left out depends on the tool, so the reliable move is to send less per prompt and spot-check the output against what was actually sent.

---


### Q.22. Which prompt is stronger, and why?

A writer needs copy that matches a structure and rhythm the brand has used successfully before, and describing the voice in adjectives has produced inconsistent results. Two prompts are under consideration. Prompt 1: "Write a product description for the hiking jacket in our usual brand voice, which is warm and confident." Prompt 2: "Here are two descriptions that match our brand voice: [example 1] [example 2]. Write one for the hiking jacket in the same voice." Which prompt is stronger, and why?

- A. Prompt 1, because naming the voice attributes directly states the requirement
- B. Prompt 2, because a longer prompt gives the tool more total instruction
- C. Prompt 1, because a shorter prompt leaves the tool more room to write
- D. Prompt 2, because concrete examples convey structure that adjectives cannot

**Prompt 2, because concrete examples convey structure that adjectives cannot**
Prompt 2 supplies examples so the tool can match the pattern, which is the right move when a task has a style or structure the tool needs to learn from the team's own work. Adjectives such as "warm and confident" mean different things to different readers, and the examples carry rhythm and sentence shape that no adjective conveys. The outcome is copy closer to brand on the first pass and less rewriting.


---


### Q.23. What should the product manager verify before deciding?

A vendor offers a model tier with a context window four times larger than the current one at three times the per-prompt cost, presenting it as the fix for inconsistent output. The team's prompts currently send each customer's full purchase history. What should the product manager verify before deciding?

- A. Whether the larger window is available at a discount for a longer contract term
- B. Whether a competing vendor offers a comparable window at a lower price point
- C. Whether the current prompts can be trimmed so the existing window is sufficient
- D. Whether the larger window also improves the accuracy of the model's writing

**Whether the current prompts can be trimmed so the existing window is sufficient**
Most context-window problems can be solved upstream of the model by sending less per prompt, such as summarizing older history and sending recent items in full. Testing the cheaper fix first establishes whether the existing window was being used well, which is the question the upgrade decision actually rests on. Published research on long inputs found that models with much larger windows were no better at using the information inside them, so the upgrade may not deliver what the pitch promises.


---


### Q.24. Two writers submit prompts for the same email campaign task.

- Prompt 1: "Write five subject lines for the spring sale email that will get a high open rate from our best customers."

- Prompt 2: "Write five subject lines for the spring sale email to loyalty members. Each under 45 characters. Mention the discount. Avoid exclamation points."

Which prompt is stronger, and why?

- A. Prompt 2, because it sets concrete constraints the tool is able to honor
- B. Prompt 2, because requesting five variations gives the writer more options
- C. Prompt 1, because describing customers as the best ones signals a premium tone
- D. Prompt 1, because naming the open-rate goal focuses the tool on business results

**Prompt 2, because it sets concrete constraints the tool is able to honor**
Prompt 2 replaces an outcome the tool cannot observe with limits it can actually apply: a character count, a required element, and a punctuation rule. Specificity narrows the range of possible outputs, so the writer gets five usable lines instead of five generic ones. The business payoff is subject lines that fit the send template without manual trimming.


---


### Q.25. A vendor proposes fine-tuning a model on AnyCompany Retail's archive of past marketing copy so that output matches the brand voice by default.

Which consideration should the product manager raise before the proposal advances?

- A. Fine-tuning requires the brand voice to change frequently to justify the investment
- B. Fine-tuning cannot influence writing style, so the proposal addresses the wrong problem
- C. Fine-tuning retrains the model on proprietary content, which raises data-governance questions
- D. Fine-tuning eliminates the need for prompt engineering across the marketing team

**Fine-tuning retrains the model on proprietary content, which raises data-governance questions**
Because fine-tuning retrains a model on proprietary company content, it carries data-governance and security implications that the security organization needs to weigh. Raising it as a data-handling decision rather than only a quality upgrade puts that review before the vendor commitment instead of after it.


---


### Q.26. A writer is deciding between two prompts for the same product page.

- Prompt 1: "Write a description for the wool throw blanket, then write five subject lines for the campaign email, and suggest a headline for the landing page." 

- Prompt 2: "Write a description for the wool throw blanket for the home goods page. Audience: shoppers furnishing a first apartment. Format: three sentences." Which prompt is stronger, and why?

- A. Prompt 1, because the tool can keep the campaign consistent across all three pieces
- B. Prompt 1, because handling three related deliverables at once saves the writer time
- C. Prompt 2, because a single task with context and format produces reliable output
- D. Prompt 2, because a three-sentence limit is the strictest constraint available

**Prompt 2, because a single task with context and format produces reliable output**
Clarity means one task per prompt, and Prompt 2 pairs that single task with an audience and an output shape. Prompt 1 carries three tasks, so the tool splits its attention and tends to serve one well and the others poorly. Writing three focused prompts takes marginally longer and produces output the team can actually ship.


---


### Q.27. A marketing writer submits this prompt to the pilot tool: "Write a nice description of our new travel duffel bag."

The output is bland and reads like generic retail copy. Which revision applies the prompt engineering principles most completely?

- A. "Write a 90-word travel duffel description for business travelers. Voice: approachable. Format: two feature sentences, then one value sentence."
- B. "Write a description of our new travel duffel bag, and make sure it performs well against competitor product pages."
- C. "Write a description of the travel duffel that is short, persuasive, on-brand, accurate, friendly, scannable, and professional."
- D. "Write a nice, polished, appealing description of our new travel duffel bag for the website."

**"Write a 90-word travel duffel description for business travelers. Voice: approachable. Format: two feature sentences, then one value sentence."**
The revision applies all four principles at once: clarity in a single named task, specificity in the word count and audience, context in the stated voice, and structured output in the sentence-by-sentence shape. The business outcome is copy the writer can ship with light editing, which is the difference between the pilot saving time and merely relocating it.


---


### Q.28. Two prompts in the pilot contain nearly the same number of characters, but one consistently costs more to run.

That prompt is dense with product SKUs, customer identifiers, and brand names. Which explanation accounts for the cost difference?

- A. Identifiers require the tool to look up records in company systems
- B. Longer words take proportionally more processing time to generate output
- C. Character count determines cost, so the difference indicates a billing error
- D. Identifiers and uncommon terms break into more tokens than common words

**Identifiers and uncommon terms break into more tokens than common words**
A token is a chunk of text the model processes as a unit, and while common short words are usually one token each, brand names, identifiers, and uncommon terms often split into several. Two prompts of the same visible length can therefore carry different token counts and different costs. Recognizing this helps a team see where prompt cost accumulates.


---


### Q.29. The store operations team wants an internal assistant that answers employee questions about current store procedures. The procedures are revised most months. Which adaptation technique fits, and why?

- A. Fine-tuning, because procedural language requires specialized internal vocabulary
- B. Neither technique, because stronger prompts can supply the procedures as needed
- C. Fine-tuning, because employees expect a consistent internal communication style
- D. Retrieval-augmented generation, because answers must reflect frequently revised information

**Retrieval-augmented generation, because answers must reflect frequently revised information**
Retrieval-augmented generation fits when answers need to be grounded in company-specific information that changes frequently. Updating the system means updating the library, so a revised procedure goes in and the next query reflects it without retraining. That operational difference is what makes it the right shape for monthly revisions.


---


### Q.30. Based on the four task characteristics, which evaluation is strongest, and what would you tell the Director of Operations?

A second vendor pitches an "AI-powered invoice processing system" the same week the customer service vendor is pitching its agent platform. The current invoice system matches invoices to purchase orders by following a fixed set of rules. The vast majority of invoices match cleanly. Most exceptions follow predictable patterns. The Director of Operations asks whether this is a good AI use case before the proposal goes any further. 

- A. Yes; AI will improve accuracy on this task because it learns patterns from historical invoice data
- B. Yes; AI is the modern best practice and the existing rule-based system is outdated by today's standards
- C. No; predictability is high, data is structured, and decision variability is low, so rules fit this task
- D. No; AI cannot reliably process invoices because the input format varies too much across vendors

**No; predictability is high, data is structured, and decision variability is low, so rules fit this task**
All four characteristics point to rules as the right fit. Predictability is high. Data is structured. Decision variability is low. The cost of an unpredictable AI failure is higher than the cost of a predictable rules failure. Replacing a working rules system with AI here adds cost without value. Tell the Director of Operations the vendor is over-claiming and recommend keeping the existing engine.


---


### Q.31. Which pair of core capabilities distinguishes the proposed agent from the marketing tool?

The vendor's proposal describes a system that, given a customer complaint, decides on its own which steps to take, looks up the order in the CRM, checks return eligibility, processes the return, and emails the customer, all without a person running each step. The marketing team's existing tool only drafts email copy when a writer prompts it. The Director of CX asks which two capabilities make the proposed system an agent and the marketing tool not one. 

- A. Autonomy and tool use; the proposed system decides its own next step and acts on real systems, not just generating text
- B. Speed and accuracy; the proposed system processes complaints faster and more correctly than the marketing tool produces its copy
- C. Personalization and scale; the proposed system serves more customers at once and tailors each response more closely than before
- D. Training data and model size; the proposed system runs on a larger model trained on much more data than before

**Autonomy and tool use; the proposed system decides its own next step and acts on real systems, not just generating text**
Autonomy and tool use are the two capabilities that make a system an agent. Autonomy means the system decides its own next step inside the perceive-reason-act loop. Tool use means it reaches into real systems to look things up and take actions. The marketing tool has neither; it generates text on request. Agent-to-agent communication and orchestration are the other two core capabilities, and they show up only when more than one agent is involved.


---


### Q.32. The vendor's proposal for AnyCompany Retail's customer service describes a supervisor agent

that reads each ticket and routes it to one of three specialized agents (billing, returns, escalation) based on ticket content. The vendor wants approval next week. The Director of CX has asked you for a recommendation. Which multi-agent pattern is the vendor proposing, and what is the most important question to ask before approving?

- A. Sequential handoff; ask whether the agents can run in a different order than the vendor proposes
- B. Supervisor-worker; ask what happens when the supervisor misclassifies a ticket and routes wrongly
- C. Parallel processing; ask whether the agents can communicate with each other during execution
- D. Supervisor-worker; ask how fast the system processes each customer service ticket end to end

**Supervisor-worker; ask what happens when the supervisor misclassifies a ticket and routes wrongly**
The supervisor decides which worker to invoke for each request, which is the supervisor-worker pattern. The most consequential question is what happens at the moment of misclassification, because that error compounds into wrong worker actions that the customer experiences. Approve with conditions: a defined accuracy threshold for the supervisor, a human-review step for high-cost actions like refunds, and a published rollback procedure.


---


### Q.33. A separate AnyCompany Retail product recommendation engine launched alongside the GenAI pilot with strong click-through rates.

Six weeks later, click-through has dropped to pre-AI levels. The data team confirms the model and prompts have not changed. Customer browsing patterns have shifted with a seasonal turn. The Director of Merchandising forwards the metrics to you and asks for a diagnosis before responding to the team. What is the most likely cause, and what should the team do next?

- A. Data drift; investigate input distributions and plan retraining on data that includes the new patterns
- B. The model has malfunctioned during the seasonal turn; retrain it now on the original training data
- C. Performance drift only; the issue will self-correct as customers return to their old browsing patterns
- D. The system was never actually working in production; roll back the AI deployment immediately

**Data drift; investigate input distributions and plan retraining on data that includes the new patterns**
Customer browsing patterns have shifted, which is data drift. The model is operating on inputs it was not trained on. The visible symptom is the click-through drop, which is performance drift. The cause is upstream. Investigate the inputs first, then plan retraining on data that includes the new patterns. The same diagnosis applies to the marketing GenAI pilot's slipping open rates: the world around the model has moved.


---


### Q.34. The CISO's findings show that a meaningful share of employees use personal generative AI accounts for work tasks, including drafting customer communications.

Some are pasting customer information into prompts. The CISO wants a starting classification for the personal-account use specifically before the framework goes to the CEO on Friday. Which classification is most appropriate for the personal-account use, and what governance action should accompany it?

- A. Approved; communicate that employees can use personal AI accounts as long as they are careful with the content
- B. Blocked for all generative AI use across the company; revisit the policy decision in six months
- C. Under evaluation indefinitely; do not communicate to employees until the security review is complete
- D. Blocked for personal-account use of sensitive data; place the enterprise version under evaluation with alternatives

**Blocked for personal-account use of sensitive data; place the enterprise version under evaluation with alternatives**
The personal-account pattern is not acceptable for sensitive data, but the underlying use case is real. The framework's job is selectivity: block the unsafe pattern, evaluate the enterprise version that has appropriate data terms, and communicate both with alternatives. Employees comply when they understand what is available. The same logic applies across the rest of the CISO's flagged tools: block what fails review, evaluate what may fit, and name approved alternatives so the workforce does not move to harder-to-monitor tools.


---


### Q.35. A vendor proposes replacing AnyCompany Retail's gift card balance lookup with an AI system.

The current process accepts a card number and returns the remaining balance, and it resolves nearly every request without review. Which evaluation is strongest?


- A. AI fits, because customer-facing processes benefit from more adaptive systems
- B. Rules fit, because the lookup volume is too high for an AI system to handle
- C. AI fits, because the system would learn from lookup patterns over time
- D. Rules fit, because the same input always requires the same output

**Rules fit, because the same input always requires the same output**
Predictability is the deciding characteristic. A card number always maps to one correct balance, so there is no judgment for a model to learn and no variability for it to accommodate. Telling the vendor the existing process stays in place protects a system that already works, and a working rules-based system is an asset rather than a problem to solve.


---


### Q.36. A vendor proposes a system in which one agent gathers competitor pricing, a second gathers customer reviews, and a third gathers social media mentions, all at the same time, with results combined into a single report. Which multi-agent pattern does this describe?

A. Sequential handoff, because three agents contribute to one combined result
B. Sequential handoff, because each agent gathers a different category of input
C. Parallel processing, because independent sub-tasks run at the same time
D. Supervisor-worker, because a coordinating step assembles the final report

**Parallel processing, because independent sub-tasks run at the same time**
Parallel processing has multiple agents working on different sub-tasks simultaneously with their results combined at the end, and it fits when sub-tasks are independent and time matters. Market research of exactly this shape is the module's example. Recognizing the pattern gives a buyer the vocabulary to ask what happens when one of the three streams fails.


---


### Q.37. A vendor demonstrates a system that receives a shipping complaint, decides on its own to check the carrier tracking system, then queries the order database, then issues a replacement order, and finally notifies the customer.

Which pair of capabilities identifies this as an agent?

A. Tool use and agent-to-agent communication, because the system reaches several systems
B. Autonomy and tool use, because it chooses steps and acts on systems
C. Agent-to-agent communication and orchestration, because the system completes four steps
D. Autonomy and orchestration, because the system sequences its work without a supervisor

**Autonomy and tool use, because it chooses steps and acts on systems**
Autonomy and tool use are the two capabilities that establish whether a system is an agent at all. Autonomy means deciding the next step inside the perceive, reason, and act loop rather than waiting for a person to run each one, and tool use means reaching into real systems to look things up and take action. Both are visible in this demonstration.


---


### Q.38. AnyCompany Retail wants to route incoming customer messages by reading the free-text body to determine whether the sender is reporting a defect, asking a question, or expressing frustration.

Message wording varies widely. Which approach fits, and why?

A. Rules, because message routing is a well-established automated business process
B. Neither, because interpreting customer sentiment is outside the reach of current AI
C. AI, because the decision depends on unstructured text, not fixed fields
D. Rules, because a keyword list can be expanded whenever new phrasings appear

**AI, because the decision depends on unstructured text, not fixed fields**
Data complexity points to AI here. Reading free-text to judge whether a customer is reporting a defect, asking a question, or expressing frustration depends on unstructured language rather than a small set of structured fields, and AI handles that better than rules. The operational benefit is fewer misrouted messages in the cases where wording does not match any keyword anyone anticipated.

---


### Q.39. A vendor claims its platform uses AI to process supplier contracts.

When the CX operations lead asks how the system decides, the vendor answers that it relies on proprietary algorithms trained on industry data. What does that response indicate?

A. The vendor is dodging, because sound vendors describe their training data concretely
B. The vendor has confirmed the platform is rules-based automation rather than AI
C. The vendor has confirmed the platform learns continuously from every contract processed
D. The vendor is protecting legitimate intellectual property and the claim needs no follow-up

**The vendor is dodging, because sound vendors describe their training data concretely**
"Proprietary algorithms" and "trained on industry data" are the answers the module flags as evasions, because vendors with sound systems can describe what their system learns from in concrete terms. The practical move is to press for specifics before the proposal advances, since buyers who accept the vague answer risk paying AI prices for software that may be mostly rules.

---


### Q.40. A department has been using an unapproved AI transcription tool for internal meetings for several months.

Security review has not begun, and the department reports real productivity gains. Which classification and governance action fit best?

A. Approved, with usage guidelines issued to the department already using it
B. Blocked, with enforcement applied and the productivity benefit set aside
C. Under evaluation, with a scoped pilot, data restrictions, and a deadline
D. Under evaluation, with the department continuing current use until review concludes

**Under evaluation, with a scoped pilot, data restrictions, and a deadline**
A tool in the review process belongs under evaluation, where a pilot may run under controlled conditions with limited scope, a defined timeline, and explicit data restrictions. The deadline matters, because tools that sit under evaluation for many months are in limbo rather than under review. This keeps the productivity gain visible to reviewers while bounding the exposure.


---


### Q.41. A fraud detection model at AnyCompany Retail begins missing fraudulent transactions it would previously have caught.

The transaction data arriving looks similar in shape to the training data, but the tactics fraudsters use have changed. Which category of drift describes this?

A. Concept drift, because the relationship between inputs and the right output has changed
B. Data drift, because the transactions reaching the model have changed
C. No drift, because the model and the shape of its input data are both unchanged
D. Performance drift, because the model catches fewer fraudulent transactions than before

**Concept drift, because the relationship between inputs and the right output has changed**
Concept drift occurs when the relationship between inputs and the correct output changes. The same transaction that was legitimate under old fraud patterns may be fraudulent under new ones, so the data shape holds steady while the right answer moves. Distinguishing this from data drift matters because it points to retraining on data reflecting current fraud patterns.


---


### Q.42. A proposal describes a system that scores each incoming order for fraud risk and passes the score to a human reviewer for a decision.

The vendor calls it an AI agent. How should the CX operations lead classify it?

A. A generative AI tool, because the system produces an output for every order
B. A predictive model, because the system outputs a score without taking action
C. An AI agent, because the system participates in a multi-step review workflow
D. An AI agent, because the system evaluates each order independently

**A predictive model, because the system outputs a score without taking action**
A predictive model outputs a score or classification and does not act on systems, which is exactly what this system does. Tool use, the capability of reaching into real systems to take action, is missing, and a human makes the decision. Naming the shape correctly matters because a predictive model's cost, governance, and failure modes differ from an agent's.


---


### Q.43. A leadership team is preparing to launch an AI recommendation system and asks what monitoring should be established. Which recommendation reflects the module's guidance?

A. Track outcome metrics, and investigate whenever the engineering team raises a concern
B. Define thresholds and a response plan before launch, tracking metrics immediately
C. Monitor infrastructure availability closely, since model accuracy stays stable once trained
D. Review the system after the first quarter, once enough production data has accumulated

**Define thresholds and a response plan before launch, tracking metrics immediately**
Thresholds should be defined in advance rather than invented when a metric slips, and a response plan should specify what happens when monitoring catches a problem, whether that is retraining, rolling back, pausing, or paging someone. Building this at launch is inexpensive, while explaining a silent failure after the fact is not.


---


### Q.44. A framework was published a year ago with a list of approved AI tools.

Since then, several vendors have changed their data retention terms, and no classification has been revisited. Which weakness does this reveal?

A. The framework lacks named owners, so no one is accountable for the next step
B. The framework lacks a re-review cadence, so classifications reflect an outdated picture
C. The framework lacks clear criteria, so reviewers cannot classify tools consistently
D. The framework lacks a communication plan, so employees cannot tell what is approved

**The framework lacks a re-review cadence, so classifications reflect an outdated picture**
Every classification needs an expiration date, because tools change, vendor terms change, and new risks emerge. An approval granted a year ago without re-review is a presumption rather than an approval. Establishing a cadence is what keeps the framework honest, and the immediate action is to re-review the tools whose retention terms changed.


---


### Q.45. AnyCompany Packaging is evaluating four AI proposals. The CFO wants the initiative with the fastest path to revenue impact.

The CIO wants the initiative that best supports the digital transformation roadmap. The VP of Operations wants the initiative that addresses the highest-cost operational problem. - Initiative A: Vision-based defect detection. Strong data, high scrap cost ($2.1M/year), aligns with quality roadmap. - Initiative B: Customer churn prediction. Medium data quality, medium revenue impact, not on the CIO roadmap. - Initiative C: Demand forecasting. Clean SAP data, $4.2M carrying cost opportunity, aligns with supply chain roadmap. - Initiative D: GenAI contract review assistant. Low data readiness, medium legal cost savings, no roadmap alignment. Which initiative best satisfies all three stakeholder priorities?

- A. Initiative A, highest operational cost, strong data, roadmap alignment
- B. Initiative B, revenue impact satisfies the CFO
- C. Initiative C, largest financial opportunity, clean data, roadmap alignment
- D. Initiative D, legal cost savings satisfy the CFO

**C. Initiative C, largest financial opportunity, clean data, roadmap alignment**
Initiative C scores highest across all three dimensions. The $4.2M carrying cost opportunity is the largest financial impact, satisfying the CFO. Clean SAP data means it can move quickly. And supply chain roadmap alignment satisfies the CIO. Initiative A is strong but the scrap cost ($2.1M) is lower than C's opportunity, and it doesn't have the same roadmap breadth.


---


### Q.46. AnyCompany Packaging's leadership team has reviewed all five initiatives.

Wei Zhang (CFO) has asked for a recommendation before the end of the week. He wants to know: which initiatives should be funded, which should be paused, and which should be stopped, and why. You've completed your assessment. Here's what you know: - Initiative A (Vision QC expansion): strong data, high impact, medium readiness. The two legacy MES lines are a constraint but not a blocker, the other two lines can proceed. - Initiative B (Demand forecasting): high impact, but Sales and Operations need to agree on data ownership before this can move. The data fragmentation is solvable in 60 days. - Initiative C (GenAI pricing assistant): medium impact, low data readiness, no CIO support. The sales team's pricing data isn't structured for training. - Initiative D (Predictive maintenance): high impact, motivated team, but paper-based maintenance logs need digitization first. 90-day data prep required. - Initiative E (AI labor scheduling): the scheduling problem takes 6 hours/week per plant manager. That's 30 hours/week across five plants. But the task is deterministic, each plant manager follows the same rules every week. There's no variability that requires prediction. Wei asks, "Which two do we fund now, which do we pause with a clear condition, and which do we stop, and what's your reasoning for the stop decision?" **What is your recommendation?**

- A. Fund A and D now. Pause B (60-day data ownership resolution) and C (data structuring). Stop E, it's a rule-based automation problem, not an AI problem.
- B. Fund A and B now. Pause D (data prep) and E (union considerations). Stop C, the team isn't ready.
- C. Fund A and C now. Pause B and D. Stop E, scheduling is too simple for AI.
- D. Fund B and D now. Pause A (legacy MES constraint) and C. Stop E, no historical data.

**Fund A and D now. Pause B (60-day data ownership resolution) and C (data structuring). Stop E, it's a rule-based automation problem, not an AI problem.**
Right. A and D have the strongest combination of impact, data readiness, and organizational support, and both have clear paths to production. B is worth funding but needs the data ownership question resolved first; a 60-day condition is reasonable. C has both a data problem and an adoption problem, pausing it is appropriate, but it's not a stop. E is the critical filter: the scheduling task is deterministic. Every plant manager follows the same rules. There's no variability that requires prediction. A rules engine or a simple scheduling tool solves this at a fraction of the cost and complexity. Recommending AI for E would consume budget and credibility.


---


### Q.47. A regional distribution company is evaluating three AI proposals submitted by department heads.

- Proposal 1 (Finance): AI to approve or reject expense reports. Current process: 12 rules, 98% of reports follow the same pattern, 2% require manager review.

- Proposal 2 (Customer Service): AI to route incoming support tickets. 50,000 tickets/month, inconsistent categorization, 23% misrouted, resolution time 40% longer for misrouted tickets.

- Proposal 3 (HR): AI to predict employee attrition. 200 employees, 3 years of HR data, turnover is 18% annually and the pattern isn't obvious from exit interviews alone. Which proposals are appropriate for AI, and which should use rule-based automation instead?

- A. All three are appropriate for AI, each involves a decision that benefits from pattern recognition
- B. Proposal 1: rule-based. Proposal 2: AI. Proposal 3: AI
- C. Proposal 1: AI. Proposal 2: rule-based. Proposal 3: AI
- D. Proposal 1: rule-based. Proposal 2: AI. Proposal 3: rule-based, dataset is too small

**Proposal 1: rule-based. Proposal 2: AI. Proposal 3: AI**
Proposal 1 is a rule-based problem. Twelve rules cover 98% of cases, you can write the decision tree. AI adds cost and complexity without adding value. Proposal 2 is an AI problem: 50,000 tickets/month with inconsistent categorization is exactly the high-volume, high-variability pattern recognition problem AI is designed for. Proposal 3 is an AI problem: 18% annual turnover with no obvious pattern in exit interviews is a prediction problem. The dataset (200 employees, 3 years) is small but not disqualifying, the question is whether the pattern exists, not whether the dataset is large.


---


### Q.48. Saanvi Sarkar has reviewed the three options. She's asked you to present a recommendation to Wei Zhang (CFO) and Mateo Jackson (COO) before the end of the week.

Wei wants the best 3-year TCO. Mateo Jackson wants the system running before Q3 (5 months from now). Legal has flagged that shared IP on Option C is unacceptable, AnyCompany Packaging must own the model. **Given these constraints, which option best satisfies all requirements?&#32;**

- A. Build — full IP ownership, best long-term control, but 14-month timeline misses Mateo Jackson's Q3 deadline and the team is already stretched
- B. Buy — fastest deployment (8 weeks), but the 9% false-positive rate on flexible film adds \~$140K/year in hidden throughput cost, and AnyCompany Packaging owns no IP
- C. Buy as a bridge, then transition to Build in 18 months — two-phase approach manages timeline and IP risk
- D. Partner — 5-month timeline meets Mateo Jackson's Q3 deadline, lowest adjusted 3-year TCO, and IP terms can be renegotiated to full AnyCompany Packaging ownership before contract signing

**Partner — 5-month timeline meets Mateo Jackson's Q3 deadline, lowest adjusted 3-year TCO, and IP terms can be renegotiated to full AnyCompany Packaging ownership before contract signing**
Partner is the right call given the constraints. The 5-month timeline meets Mateo Jackson's Q3 deadline, the only option that does. The adjusted 3-year TCO (once the false-positive cost is added to Buy) makes Partner the most economical path. And the IP concern is solvable: Legal has flagged it, which means it's a negotiation item, not a dealbreaker. The recommendation should include a condition: contract signing is contingent on full IP ownership terms. If the integrator won't agree, escalate to Buy as a fallback.


---


### Q.49. A regional logistics company is evaluating implementation options for an AI-powered route optimization system.

Three options are on the table: - Build: 12 months, $1.1M upfront, $150K/year. Full customization for the company's unusual multi-modal routes. Requires hiring 2 ML engineers. IP owned by the company. - Buy: 6 weeks, $280K/year licensing. Standard route optimization, covers 80% of routes; the remaining 20% (multi-modal transfers) require manual override. Vendor has 40+ logistics deployments. - Partner: 4 months, $520K upfront, $80K/year. Co-developed with a logistics-focused AI firm. IP shared unless renegotiated. Partner has 3 deployments in similar companies. The VP of Operations needs the system live within 6 months. The CFO wants the best 3-year TCO. Legal has flagged that shared IP is unacceptable. **Which option do you recommend?**

Choose 1.
 A. Buy — fastest deployment, but 20% manual override rate creates ongoing operational cost and the company owns no IP
 B. Buy as a bridge, then transition to Build — manages timeline risk while preserving the build option
 C. Build — best long-term control and IP ownership, but 12-month timeline misses the VP's deadline
 D. Partner — meets the 6-month timeline, lowest 3-year TCO, and IP terms are negotiable before signing
 
**Partner — meets the 6-month timeline, lowest 3-year TCO, and IP terms are negotiable before signing**
Partner satisfies all three constraints. The 4-month timeline meets the VP's 6-month deadline. The 3-year TCO (Build: ~$1.55M; Buy: ~$1.12M adjusted for manual override cost; Partner: ~$840K) favors Partner once the manual override cost is factored in. And the IP concern is a negotiation item. Legal flagging it means it's solvable before signing, not a dealbreaker.


---


### Q.50. Wei Zhang has reviewed the portfolio. He's approved scaling Initiative A (Vision QC) to the remaining two lines and restarting Initiative B (Demand Forecasting).

He's asked you to recommend what to do with Initiative C (GenAI Pricing Assistant) and to propose a transition approach for Initiative D (Predictive Maintenance) as it moves from data prep to deployment. #### What is your recommendation for Initiative C?

- A. Continue the pause, give the data structuring work another 60 days before deciding
- B. Terminate, three months of pause with no progress on the blocking condition means the fundamental case is not being prioritized; redeploy the budget
- C. Scale, the sales team's skepticism is a change management problem, not a fundamental case problem
- D. Restart with a reduced scope, limit to the top 20% of accounts where pricing variability is highest

**Terminate, three months of pause with no progress on the blocking condition means the fundamental case is not being prioritized; redeploy the budget**
Three months of pause with no progress on the blocking condition is the signal. The data structuring work hasn't moved, which means either the team doesn't have the capacity to do it, or the initiative isn't a priority for the people who need to own it. Either way, the fundamental case is weakening. The sales team's skepticism hasn't improved. Terminating now and redeploying the budget to Initiative B (which has a clear path and a resolved blocking condition) is the right call. A pause with no deadline and no progress is a slow termination, it just costs more.


---


### Q.51. A financial services firm has five active AI initiatives. The annual AI budget sustains three at current investment levels.

Here is the current portfolio status: - Initiative A (Churn prediction): 6 months live. 34% reduction in churn among targeted customers. Model improving monthly. Sponsor is the Chief Revenue Officer. - Initiative B (Contract review automation): 8 months live. 15% adoption by the legal team. Model accuracy is 91% but attorneys don't trust the output. No recovery plan. - Initiative C (Demand forecasting for treasury): 4 months live. Accuracy at 79% (target: 88%). Data team says accuracy will improve with 2 more months of training data. - Initiative D (AI-assisted underwriting): Paused 3 months ago pending regulatory approval. Approval expected in 6 weeks. Strong business case, high feasibility. - Initiative E (Fraud detection upgrade): 2 months live. 22% reduction in false positives. Compliance team is a strong sponsor. Data flywheel active. Which three initiatives do you fund, and what do you recommend for the other two?

- A. Fund A, C, E. Pause D (regulatory approval pending). Terminate B (adoption failure with no recovery plan).
- B. Fund A, B, E. Pause C (below accuracy target). Terminate D (regulatory uncertainty).
- C. Fund A, D, E. Pause C (below accuracy target). Terminate B (adoption failure).
- D. Fund A, C, D. Pause E (too early to assess). Terminate B (adoption failure).

**A. Fund A, C, E. Pause D (regulatory approval pending). Terminate B (adoption failure with no recovery plan).**
A, C, and E are the right three to fund. A has proven results and a strong sponsor. E has early results, a data flywheel, and compliance sponsorship. C is below target but has a credible path to improvement (2 months of additional training data), pausing it would interrupt a model in training. D should be paused with a clear condition (regulatory approval in 6 weeks), not terminated. B is the termination: 15% adoption after 8 months with no recovery plan means the fundamental case (attorney trust) hasn't been solved. High model accuracy doesn't matter if no one uses the output.


---


### Q.52. Wei Zhang has reviewed the portfolio. He's approved scaling Initiative A (Vision QC) to the remaining two lines and restarting Initiative B (Demand Forecasting).

He's asked you to propose a transition approach for Initiative D (Predictive Maintenance) as it moves from data prep to deployment. Initiative D (Predictive Maintenance) is 60 days from completing data prep. Mateo Jackson (COO) wants it live on the Indiana extruder lines as quickly as possible. The extruders run 24/7 and an unplanned failure costs $180K. **What transition approach do you recommend for Initiative D?**

- A. Full deployment, deploy on all four lines simultaneously; the data prep has been thorough and the model is ready
- B. Parallel running, run the AI system alongside the existing maintenance schedule for 90 days before switching over
- C. Phased rollout, deploy on one extruder line first, validate performance for 30 days, then expand to the remaining three lines
- D. Rollback-only planning, deploy on all four lines with a defined rollback trigger if accuracy drops below 85%.

**Phased rollout, deploy on one extruder line first, validate performance for 30 days, then expand to the remaining three lines**
Phased rollout is the right approach here. The extruders run 24/7 and a failure costs $180K, that's a high continuity risk. Deploying on one line first limits the blast radius if the model behaves differently on live production data than it did in testing. Thirty days of live performance data on one line gives you the calibration evidence to expand confidently. Mateo Jackson gets the system live quickly (one line in 60 days), and the risk is contained.


---


### Q.53. A regional bank is replacing its 15-year-old fraud detection system with an AI model. The new model shows 30% fewer false positives in testing. 

Key facts: - The current system processes 2.4 million transactions per day with zero tolerance for monitoring gaps - 6 years of transaction data must be migrated to train the new model - The fraud operations team (12 analysts) has been trained on the new system but hasn't used it in production - The CFO has asked about the cost of running both systems simultaneously - The CTO wants the transition complete within 90 days Which transition approach do you recommend?

- A. Parallel running for 60 days, then full cutover — both systems run simultaneously, results compared daily, cutover when AI system matches current system performance
- B. Phased rollout — deploy on low-risk transaction types first (small-dollar, domestic), validate for 30 days, then expand to high-risk types
- C. Full deployment — the model has been tested thoroughly and the team is trained; a 90-day timeline doesn't allow for parallel running
- D. Rollback-only planning — deploy fully with a defined rollback trigger if false negative rate exceeds 0.1%

**Parallel running for 60 days, then full cutover — both systems run simultaneously, results compared daily, cutover when AI system matches current system performance**
Parallel running is the right approach for a zero-tolerance continuity environment processing 2.4 million transactions per day. The cost of a monitoring gap, missed fraud, far exceeds the cost of running two systems for 60 days. The 90-day CTO timeline is achievable: 60 days of parallel running plus a 30-day cutover window. The daily comparison gives the fraud operations team live experience with the new system before they're fully dependent on it.


---


### Q.54. Wei asks for the H2 recommendation. **Which initiatives should be scaled, which should continue as planned, and what is the appropriate use of the $600K in unallocated budget (from C and E terminations)?**

- A. Scale A (expand to remaining line), continue B (needs accuracy improvement before scaling), continue D (complete phased rollout), hold the $600K in reserve for H2 cost overruns
- B. Scale A and D, pause B (78% accuracy is below target, stop until it improves), use $600K to restart C with a new data vendor
- C. Scale all three active initiatives simultaneously, use $600K to fund a new initiative (AI customer service chatbot)
- D. Continue all three as planned, use $600K to accelerate D's phased rollout to all four lines immediately

**Scale A (expand to remaining line), continue B (needs accuracy improvement before scaling), continue D (complete phased rollout), hold the $600K in reserve for H2 cost overruns**
This is the right portfolio posture for H2. Initiative A has proven results (1.1% scrap reduction) and one line remaining, scaling it is low-risk and high-value. Initiative B is in training with early accuracy at 78% against an 85% target; continuing as planned (not scaling yet) is appropriate, you need more data before expanding scope. Initiative D has a strong early signal (0 failures in 30 days) but is mid-phased-rollout; completing the rollout as planned before expanding is the disciplined call. Holding the $600K in reserve is prudent, H2 cost overruns on active initiatives are more likely than a new initiative delivering value before year-end.


---


### Q.55. A regional insurance brokerage handles roughly 3 million property and casualty claims per year for the small carriers it represents.

The Chief Underwriting Officer has flagged that the current fraud detection process, a rules-based system installed 8 years ago, is missing an increasing volume of suspicious claims. The rules engine flags claims based on 340 fixed criteria (claim amount thresholds, prior claim history, timing patterns, geographic patterns). Two changes have occurred in the last 3 years: (1) fraud rings have adapted to the known rules and now structure claims to fall just below flagging thresholds, and (2) the volume of claims has doubled, but the rules have been updated only twice in that period because each update requires a 6-week review cycle involving compliance, legal, and IT. Fraud losses have grown from $18M/year to $41M/year.

Two options are on the table:

Option 1: Rebuild the rules-based system with a modern rules engine that supports faster updates (2-week cycle instead of 6-week). Expand from 340 criteria to approximately 900 criteria. Estimated implementation: $1.2M upfront, $180K/year.
Option 2: Deploy an AI-based anomaly detection model trained on 5 years of historical claims data. The model learns fraud patterns from historical outcomes and updates weekly. Explainability layer required by compliance is in place. Estimated implementation: $2.1M upfront, $340K/year.
Which option is the appropriate choice for this business task?


- A. Option 1 (modern rules engine), the cost difference is significant ($1.2M vs. $2.1M upfront, $180K vs. $340K annual) and rules-based systems have lower operational risk

(The cost difference is real, but the framing is wrong. The right comparison is not the technology cost ($900K upfront delta) but the business cost of continued fraud losses. Fraud losses have grown from $18M to $41M per year, a $23M annual gap that the rules-based system has failed to close. A $900K upfront investment that reduces the fraud loss growth curve is easily justifiable if the AI approach recovers even a fraction of the $23M gap.)


- B. Option 2 (AI-based anomaly detection), AI is the industry standard for fraud detection and the brokerage cannot afford to lag competitors on this capability

("AI is the industry standard" is not the reason to choose AI here. Adopting a technology because competitors use it, rather than because it fits the task characteristics, is a common failure mode. The reason to choose AI is that the specific task characteristics, evolving adversarial patterns, high volume, sufficient historical data, and available explainability, match AI's strengths, and match rules' weaknesses. That is the defensible argument.)


- C. Option 1 (modern rules engine), a rules-based system is easier to maintain and satisfies compliance and legal review requirements with fewer complications

(Rules-based systems are easier to maintain when the underlying decision logic is stable and adversaries do not adapt. Neither is true here. The fraud rings are adapting to the known rules by structuring claims below the flagging thresholds, this is a moving target that rules cannot keep pace with, regardless of how fast the rules engine can be updated. Expanding from 340 criteria to 900 criteria makes maintenance harder, not easier, and does not solve the fundamental problem that fraud patterns are changing faster than rules can be written.)


- D. Option 2 (AI-based anomaly detection), the task characteristics (evolving adversarial patterns, high volume, sufficient historical data, and available explainability) match AI, not rules; extending the rules engine perpetuates a losing race

(The task characteristics point to AI, not rules. Four factors align: (1) The patterns are evolving adversarially, fraud rings adapt to known rules, which means any static rules-based system is always fighting the last war. AI-based anomaly detection learns from new patterns as they emerge. (2) Volume is high (3 million claims per year), which supports the training data requirements for a machine learning model. (3) Five years of historical claims data with known fraud outcomes provides sufficient training signal. (4) The explainability layer required by compliance is available. Extending the rules engine is a losing race, the adversaries adapt faster than the rules can be written. The $900K higher upfront cost of Option 2 is justified by the $23M/year increase in fraud losses that the current approach has failed to prevent.)

**D**

---


### Q.55. A mid-market energy utility is deploying AI-powered outage prediction, identifying grid segments at elevated failure risk before outages occur.

The VP of Grid Operations needs the system integrated with the existing SCADA infrastructure and live within 12 months. The CFO wants the best 3-year TCO. The General Counsel has flagged that grid operational data is classified as critical infrastructure and cannot be processed by any third-party cloud service. The data science team has two engineers with ML experience but no grid domain expertise.

- Build: 18 months, $1.9M upfront, $280K/year. Full SCADA integration. Data stays on-premises. Requires hiring a grid domain expert ($180K/year). Team has ML capability but no grid domain knowledge.

- Buy (grid analytics vendor): 4 months, $520K/year. Vendor offers on-premises deployment to meet data classification requirement. Standard outage prediction models trained on 40+ utility datasets. Limited SCADA customization for the utility's specific grid topology.

- Partner (general systems integrator): 8 months, $900K upfront, $200K/year. On-premises deployment. Integrator has no grid domain experience but strong ML engineering capability. IP: full utility ownership.

- Partner (utility-focused AI firm with grid domain expertise): 10 months, $1.4M upfront, $160K/year. On-premises deployment. Co-developed with the utility's SCADA data. Partner brings grid domain expertise. IP: full utility ownership proposed.
Which option best satisfies all constraints?

**Options**
- A. Buy, fastest deployment and proven grid models, but limited SCADA customization may reduce accuracy for this utility's specific topology

(Buy is live in 4 months, well within the deadline. The on-premises deployment option satisfies the data classification requirement. But "limited SCADA customization for the utility's specific grid topology" is a material accuracy risk. Outage prediction models trained on 40+ other utilities may not capture the failure patterns specific to this grid. For a system that determines where to deploy maintenance crews, accuracy matters.)

- B. Build, best long-term control, but 18-month timeline misses the 12-month deadline and requires a domain expert hire

(Build is the right answer when the utility has the time, the capability, and the domain expertise. This utility has two of the three, but not the domain expertise, and not the time. The 18-month timeline misses the 12-month deadline by 6 months. Adding a domain expert hire addresses the expertise gap but adds $180K/year to the cost and does not solve the timeline problem.)

- C. Partner (general systems integrator), 8-month timeline, on-premises, full IP ownership, but no grid domain expertise creates a model accuracy risk

(The general systems integrator has a faster timeline (8 vs. 10 months) and lower TCO. But the integrator has no grid domain expertise. The utility's two ML engineers have ML capability but no grid domain knowledge either, which means the co-development team has strong engineering but no one who understands how grid failures actually propagate. The model may be technically sound but operationally wrong. The utility-focused partner's domain expertise is worth the 2-month and cost premium.)

- D. Partner (utility-focused firm), 10-month timeline meets the deadline, on-premises deployment, grid domain expertise, full IP ownership, and lowest 3-year TCO

(Partner (utility-focused firm) satisfies all constraints. The 10-month timeline meets the 12-month deadline. On-premises deployment satisfies the critical infrastructure data classification requirement. The partner's grid domain expertise addresses the team's gap; the utility's two ML engineers can work alongside the partner without needing to hire a domain expert. Full IP ownership is already proposed. 3-year TCO: Build ~$2.74M (note: $280K/year ongoing cost includes the domain expert salary), Buy ~$1.56M, Partner (general) ~$1.5M, Partner (utility-focused) ~$1.88M. The utility-focused partner's slightly higher TCO than the general integrator is justified by the domain expertise that reduces model accuracy risk.)

**D**

---


### Q.56. A regional hospitality chain operates 42 franchised hotels under a single brand. The corporate operations team is reviewing two proposals to modernize the room rate management process, which currently sets weekly rates using a manually maintained spreadsheet.

- Proposal 1 (AI-based): A vendor proposes an AI dynamic pricing system that adjusts room rates every 15 minutes based on real-time demand signals (search volume, competitor rates, local event data, and booking pace). Estimated implementation: $340K upfront, $80K/year. Expected revenue lift: 4–7% based on vendor case studies from larger chains (200+ properties).
- Proposal 2 (Rules-based automation): The internal operations team proposes a rules-based system with about 60 predefined pricing rules (day-of-week factors, seasonality bands, occupancy thresholds, local event calendars). Estimated implementation: $85K upfront, $12K/year. Expected revenue lift: 2–3%.
Key constraints: The chain has 3 years of booking data across 42 properties (approximately 180,000 booking records). Franchise partners require rate rules to be documented and explainable, franchise agreements guarantee partners the right to review and challenge any rate change. Local event data is available through public feeds. The chain's Chief Operating Officer has flagged that any rate change that a franchise partner cannot explain to a guest creates a franchise relationship risk.

**Which proposal is the appropriate choice, and why?**

**Options**
- A. Proposal 2 (rules-based), the explainability requirement, the modest data volume, and the well-understood pricing logic all point to rules; AI is not the appropriate solution for the described constraints

(Rules-based automation is the appropriate choice here because three factors point against AI: (1) The explainability requirement from franchise agreements makes any opaque pricing engine a contractual risk. Rules-based systems produce transparent decisions that franchise partners can review. (2) The pricing logic is well-understood, day-of-week, seasonality, occupancy, events, and codifies existing operational knowledge. AI is most valuable when the underlying decision logic is not fully understood and needs to be learned from data. When the logic is known, encoding it in rules is more direct. (3) The training data volume (180,000 records across 42 properties) is modest for the kind of multi-signal dynamic pricing the AI proposal envisions. Rules-based automation captures the majority of the value (2–3% lift) at a fraction of the cost and complexity. This is the "AI is not the right solution" answer.)

- B. Proposal 2 (rules-based), franchise partners will resist any pricing system that costs more than the current spreadsheet approach

(The cost differential between Proposal 1 and Proposal 2 is real but not the primary reason to choose rules-based automation. Framing franchise partner resistance as "cost objection" misreads the actual concern. Franchise partners will accept a more expensive system if it is explainable and defensible; they will reject a cheaper system that produces rate changes they cannot explain to guests. The reason to choose rules is contractual and operational, not budget.)

- C. Proposal 1 (AI), the revenue lift range (4–7%) exceeds Proposal 2 by a wide margin, and 3 years of booking data across 42 properties is sufficient training data

(The 4–7% revenue lift from Proposal 1 is drawn from vendor case studies at larger chains (200+ properties). That data does not generalize to a 42-property regional chain with 180,000 booking records. Vendor case study lift ranges assume the training data volume and market density of national brands. More importantly, the revenue comparison ignores the binding constraint: the franchise agreement requires that rate changes be explainable to partners. An AI dynamic pricing system that recomputes rates every 15 minutes based on multiple real-time signals cannot easily produce explanations that a franchise partner can review and challenge. The explainability constraint is not a preference; it is contractual.)

- D. Proposal 1 (AI), dynamic pricing is the industry standard for large chains, and adopting it positions the regional chain to compete on rate optimization

("Industry standard for large chains" is not the standard for a 42-property regional chain with an explainability requirement and 180,000 booking records. Adopting a technology because larger competitors use it, rather than because it fits the operational context, is a common failure mode in AI investment decisions. The costs of a poor fit, franchise disputes, unexplainable rate changes, underperformance against vendor promises, outweigh the reputational value of matching the industry standard.)

**A**


---


### Q.57. A national grocery chain is replacing its manual inventory replenishment process with an AI-powered system that automatically generates purchase orders for 45,000 SKUs across 180 stores.

The current process requires 12 buyers working full-time to manage replenishment. The AI system reduces this to 3 buyers for exception handling. Key facts: the system has been tested on 6 months of historical data with 91% order accuracy; the current process has never had a stockout rate above 2.1%; the VP of Supply Chain needs the system live within 4 months to capture Q4 holiday season savings; the buyers' union has flagged concerns about job displacement; and the CFO has asked about the cost of running both systems simultaneously. Three transition options are under evaluation.

- Full deployment: Deploy across all 180 stores and all 45,000 SKUs simultaneously. 4-month deadline met with margin.
- Parallel running: Run both systems simultaneously for 60 days across all 180 stores. Buyers review AI-generated orders before submission. Full cutover after 60 days. CFO estimates parallel running costs $280K in buyer overtime.
- Phased rollout by SKU category: Deploy AI for non-perishable, high-volume SKUs first (30% of SKUs, 70% of volume). Validate for 45 days. Then expand to perishables and long-tail SKUs.
- Phased rollout by store: Deploy at 30 pilot stores for 60 days, validate stockout rate against the 2.1% benchmark, then expand to remaining 150 stores. Timeline: 4 months total, tight but achievable.
Which transition approach is most appropriate, and what is the primary reason?

**Option**
- A. Phased rollout by store, limits blast radius, meets the deadline, and validates live performance before full exposure

(Phased rollout by store is the right approach. It limits the blast radius, if the AI performs differently on live data than on historical data, only 30 stores are affected, not 180. The 60-day pilot validates the 2.1% stockout benchmark in live conditions before full exposure. The 4-month deadline is achievable. The buyers' union concern is addressed by the phased approach, buyers remain fully involved during the pilot, which builds confidence and demonstrates that the 3-person exception-handling model works before it is applied at scale. The CFO's cost concern is addressed, phased rollout is cheaper than parallel running ($280K).)

- B. Full deployment, the 4-month deadline requires full deployment; the 91% accuracy in testing is sufficient validation

(Full deployment maximizes speed but eliminates the safety net. "91% accuracy in testing" means 9% of orders have errors, on 45,000 SKUs across 180 stores, that is 4,050 potentially incorrect orders per cycle. In testing, errors are caught and corrected. In full deployment with no parallel running, errors become stockouts or overstock. The holiday season is the worst time to discover that live performance differs from historical testing.)

- C. Parallel running, the safest approach; the $280K cost is justified by the continuity protection

(Parallel running is the safest approach, but the $280K cost is a real consideration, and the buyers' union concern about job displacement makes a 60-day period where buyers are doing double work (reviewing AI orders AND managing their current workload) a significant change management risk. Phased rollout achieves the same risk management at lower cost and with less operational burden on the buyers.)

- D. Phased rollout by SKU category, the most operationally logical approach; perishables carry the highest stockout risk

(Phased rollout by SKU category is operationally logical, but it creates a split-replenishment problem. Buyers are managing two systems simultaneously: AI for non-perishables and the current process for perishables. For a team already concerned about job displacement, managing two systems with different rules is a higher cognitive load. Phased rollout by store is cleaner, each store is either fully on the new system or fully on the old one.)

**A**

---

### Q.58. A specialty chemical manufacturer produces industrial coatings for aerospace and automotive customers. 

Quality assurance is the highest-cost function in the operation. Each batch is tested against 40 chemical and physical specifications; batches that fail final testing must be reprocessed or discarded, costing an average of $18K per failed batch. The company produces 220 batches per month, with a 6% failure rate. The Chief Operations Officer wants to apply AI to reduce batch failures. Four use cases have been proposed, each matching a different AI capability:

- Use case A: Predict which incoming raw material lots will produce batches that fail final testing, based on supplier data, arrival conditions, and prior batch performance.
- Use case B: Classify each failed batch by root cause category (raw material, process, environment, equipment) to support corrective action reporting.
- Use case C: Identify recurring failure patterns across raw material sources, environmental conditions, equipment settings, and shift teams to surface systemic root causes.
- Use case D: Recommend specific process parameter adjustments to the batch operator during production based on real-time sensor data.

Which use case best matches the highest-impact application of AI capabilities for the described business function?

- A. Use case B, classification of failed batches supports corrective action reporting and regulatory documentation

(Classification of failed batches by root cause category supports regulatory reporting and quality documentation. It does not reduce the failure rate. Failure rate reduction requires surfacing the systemic patterns that cause failures, not categorizing them after they occur. Classification is a downstream reporting capability, not the highest-impact use of AI for the described business problem.)

- B. Use case D, recommendation to operators enables real-time process adjustment during production

(Real-time process recommendation during production is a high-value capability, but it addresses failures at the point of production, not the root causes that drive the 6% failure rate. Operators can only adjust parameters within a narrow range during a batch; the systemic causes (raw material variability, equipment calibration drift, environmental effects) are addressed before a batch starts. Pattern recognition across all failure variables (use case C) is the capability that reduces failures at the source.)

- C. Use case C, pattern recognition identifies systemic root causes across variables, enabling process-level fixes that reduce failure rates at the source

(Pattern recognition is the highest-impact capability match here because the business problem is systemic. A 6% failure rate across 220 batches per month indicates that root causes are recurring, not random. Identifying which combinations of raw material source, environmental conditions, equipment settings, and shift teams correlate with failures enables process-level fixes that reduce the failure rate at the source. Prediction on raw material lots (use case A) addresses one variable in isolation and does not surface the interaction effects that drive systemic failures. Classification (use case B) produces reporting, not process improvement. Real-time recommendation (use case D) addresses failures during production, not the root causes that create them.)

- D. Use case A, prediction on raw material lots enables incoming-material quality holds, preventing failure-prone lots from entering production

(Prediction on raw material lots is a plausible use case with genuine business value, it enables quality holds on failure-prone lots before they enter production. But it addresses only one variable (raw materials) in isolation. If the root cause of failures is an interaction between raw materials, equipment settings, and environmental conditions, prediction on raw materials alone will not reduce the failure rate to its structural minimum. Pattern recognition across all failure variables (use case C) is the higher-impact match.)


**C**


---


### Q.59. Which transition approach is most appropriate given the constraints?

A mid-market wealth management firm is replacing its manual client portfolio rebalancing process with an AI-powered system that automatically generates rebalancing recommendations for 8,400 client portfolios. The current process requires 18 advisors spending 40% of their time on rebalancing. The AI system reduces this to advisors reviewing and approving AI recommendations, estimated at 15% of their time. Key facts: SEC regulations require that a licensed advisor approve every rebalancing recommendation before execution; the AI system has been validated on 3 years of historical portfolio data with 96% alignment to advisor decisions; the Chief Investment Officer needs the system live within 5 months; the advisory team is skeptical, they believe the AI "does not understand client relationships"; and the firm's largest clients (top 200 by AUM) have complex tax situations that the AI has not been tested on.

Which transition approach is most appropriate given the constraints?

- A. Parallel running for 90 days, advisors generate their own recommendations and review AI recommendations simultaneously; compare alignment before full cutover

(Parallel running for 90 days, advisors generating their own recommendations AND reviewing AI recommendations, doubles the rebalancing workload for 90 days. For a team that is already skeptical of the AI, asking them to do double work for 3 months is a change management risk that could harden resistance rather than build confidence. Phased rollout achieves the same validation with less operational burden.)

- B. Full deployment across all 8,400 portfolios, advisors retain approval authority, which manages the regulatory requirement; the 96% alignment rate is sufficient validation

(Full deployment across all 8,400 portfolios, including the 200 complex accounts the AI has not been tested on, is the highest-risk approach. "96% alignment on historical data" does not include the complex tax situations of the top 200 accounts. A 4% misalignment rate on complex portfolios could mean significant tax consequences for the firm's most valuable clients. Advisor approval authority manages the regulatory requirement but does not prevent the reputational damage of AI recommendations that advisors have to override repeatedly.)

- C. Rollback-only planning, deploy across all portfolios with a rollback trigger if advisor override rate exceeds 15%

(Rollback-only planning with a 15% override trigger means the AI has already generated recommendations that advisors overrode 15% of the time before the rollback is activated. For complex portfolios with tax implications, a 15% override rate represents real client impact, not just a performance metric. The rollback trigger is a recovery mechanism, not a prevention mechanism.)

- D. Phased rollout, deploy for standard portfolios first (8,200 portfolios, excluding the top 200 complex accounts), validate advisor alignment for 60 days, then expand to complex accounts

(Phased rollout is the right approach. The top 200 complex accounts have not been tested, deploying the AI on untested account types in the first wave is an unnecessary risk. Starting with the 8,200 standard portfolios validates live performance and builds advisor confidence before the complex accounts are added. The advisory team's skepticism ("does not understand client relationships") is an adoption risk that the phased approach addresses, advisors see the AI's recommendations alongside their own for 60 days on standard portfolios, which either builds confidence or surfaces the gaps before complex accounts are affected. The 5-month deadline is achievable. SEC approval authority is maintained throughout.)

---


### Q.60. A mid-market logistics company has six AI initiatives.

The CFO has asked for a portfolio review after a difficult Q3. Two initiatives missed their targets and the board is questioning the AI investment strategy. Budget for Q4 sustains four initiatives. The CFO wants clear criteria for every decision.

- A (Route optimization): 14 months live. Fuel cost down 9.2%. Model improving. Data flywheel active, more routes improve predictions. Economic sustainability strong.
- B (Predictive maintenance for fleet): 10 months live. Unplanned breakdowns down 31%. Sponsor (VP Fleet Operations) is retiring in 60 days. Successor not yet named.
- C (Demand forecasting for warehouse staffing): 8 months live. Accuracy at 74% (target: 85%). Staffing managers report the model "does not account for seasonal spikes." Data science team says the seasonal data exists but has not been incorporated, 45-day fix.
- D (AI-assisted customs documentation): 6 months live. 12% adoption by customs brokers. Accuracy at 96% but brokers say the output format requires manual reformatting before submission. No format fix planned.
- E (Customer churn prediction): Paused 6 months ago. The data integration with the CRM was blocked by a vendor contract dispute. Contract resolved last month. Ready to restart.
- F (AI pricing for spot freight): 3 months live. Win rate on spot quotes up 14%. Sponsor is the Chief Commercial Officer. Early data flywheel forming.
Which four initiatives should be funded, and what is the appropriate action for the other two?

**Options**
- A. Fund A, C, F, E. Pause B (sponsor transition risk). Terminate D (adoption failure).

(Pausing B because of the sponsor transition risk is premature. The VP retires in 60 days, which means there is time to name a successor before the transition creates a real risk. Pausing now interrupts a well-performing initiative unnecessarily. The right approach is to continue B with a 60-day condition to name a successor, not pause immediately.)

- B. Fund A, B, D, F. Pause C (below accuracy target). Terminate E (CRM integration just resolved, unproven).

(Funding D with 12% adoption and no format fix planned is a portfolio discipline failure. The accuracy is high, but adoption is the measure that matters. Terminating E because the CRM integration "just resolved" ignores the fact that the integration was the blocking condition; E is ready to move.)

- C. Fund A, B, F, E. Pause C (45-day seasonal data fix as condition). Terminate D (12% adoption, no format fix planned).

(A, B, F, and E are the right four. A has proven ROI and a strong data flywheel, so scale it. B has strong results (31% breakdown reduction) and the sponsor transition is a manageable risk. Pause B only if no successor is named within 60 days; for now, continue. F has strong early signals and CCO sponsorship. E has a resolved blocking condition, so restart it. C should be paused with the 45-day seasonal data fix as the condition: the accuracy problem is specific and solvable, not a fundamental case failure. D is the termination: 12% adoption after 6 months with no format fix planned means the team is not responding to the brokers' feedback. High accuracy does not matter if no one uses the output.)

- D. Fund A, B, C, F. Pause E (just restarted, needs validation). Terminate D (adoption failure).

(Continuing C without addressing the seasonal data gap perpetuates the accuracy problem. The data science team has identified a specific, 45-day fix. Pausing C with that fix as the condition is more disciplined than continuing at 74% accuracy. Pausing E because it "just restarted" ignores the resolved blocking condition.)

**C**


---


### Q.61. A national insurance carrier is implementing AI-powered claims triage, automatically routing and prioritizing incoming claims based on complexity, fraud risk, and required expertise.

Four options are under evaluation. The Chief Claims Officer needs the system live within 9 months to meet a regulatory commitment. The CISO requires that claims data not leave the carrier's private cloud. The CFO wants the best 5-year TCO. Legal has flagged that any co-developed model must be fully owned by the carrier.

- Build: 16 months, $2.8M upfront, $220K/year. Full customization for the carrier's claim taxonomy. Data stays on private cloud. Requires hiring 3 ML engineers and a claims domain specialist.
- Buy (established insurtech vendor): 6 weeks, $380K/year. CISO-approved private cloud deployment available. Standard claim categories cover 75% of the carrier's claim types; the remaining 25% require manual routing rules added post-deployment.
- Partner (claims AI specialist firm): 7 months, $1.1M upfront, $140K/year. Co-developed on the carrier's private cloud. Full claim taxonomy coverage. IP negotiable, currently proposed as joint ownership.
- Buy (general-purpose AI platform, self-configured): 3 months, $180K/year. Requires 6 months of internal configuration by the carrier's IT team before it handles claims routing. Data stays on private cloud.

**Which option best satisfies all constraints?**
- A. Partner, 7-month timeline meets the deadline, private cloud deployment, full taxonomy coverage, and IP terms are negotiable to full carrier ownership

(Partner satisfies all four constraints. The 7-month timeline meets the 9-month regulatory deadline with margin. Private cloud deployment satisfies the CISO. Full claim taxonomy coverage eliminates the manual routing gap. And joint IP ownership is a negotiation item; Legal flagging it means it is solvable before signing. The recommendation should include a condition: full carrier IP ownership before contract execution. 5-year TCO: Build ~$3.9M, Buy ~$2.1M (adjusted for manual routing cost), Partner ~$1.8M, Platform ~$1.1M (but Platform bears the highest configuration risk and the tightest timeline).)

- B. Buy (general-purpose platform), private cloud and lower cost, but 3 months + 6 months configuration = 9 months total, and the carrier bears all configuration risk

(The general-purpose platform's timeline math is the trap: 3 months to deploy + 6 months of internal configuration = 9 months total, which exactly meets the deadline, but with zero margin. Any configuration delay pushes past the regulatory commitment. And the carrier bears all configuration risk with a platform not designed for claims routing. The 5-year TCO looks attractive, but the risk profile is high for a regulatory-driven deadline.)

- C. Buy (established vendor), fastest deployment and CISO-approved, but 25% manual routing gap creates ongoing operational cost and the carrier owns no IP

(Buy (established vendor) is live in 6 weeks, well within the deadline. But the 25% manual routing gap is a material operational cost. Claims that fall outside the standard categories require manual routing, which means the efficiency gain is limited to 75% of volume. Over 5 years, the manual routing cost likely exceeds the savings from faster deployment. And the carrier owns no IP; vendor dependency is a long-term risk in a regulated industry.)

- D. Build, full IP ownership and private cloud, but 16-month timeline misses the 9-month regulatory commitment

(Build gives the best long-term position: full IP, full customization, private cloud. But the 16-month timeline misses the 9-month regulatory commitment by 7 months. A regulatory commitment is a hard deadline, not a preference. Missing it has compliance consequences that outweigh the long-term benefits of building.)


**A**


---


### Q.61. A global media company has eight AI initiatives across three business units.

The new Chief AI Officer has been asked to rationalize the portfolio, and the board wants no more than five active initiatives, with clear scale/pause/terminate recommendations for the rest. Current status at the 18-month mark:

- A (Content recommendation engine): 18 months live. Subscriber retention up 8%. Data flywheel strong. Economic sustainability concern: compute costs have tripled as the subscriber base grew, margin on the initiative is now negative.
- B (Ad targeting optimization): 14 months live. CPM up 22%. Strong sponsor (Chief Revenue Officer). Model stable. No data flywheel, performance plateaued 4 months ago.
- C (Automated subtitle generation): 10 months live. 91% accuracy. 78% adoption by production teams. Saves 3.2 hours per episode. Organizational sustainability strong, process is documented, not dependent on any individual.
- D (Churn prediction): 6 months live. Accuracy at 71% (target: 82%). Data science team says accuracy will improve with 6 more months of behavioral data. Sponsor is the VP of Subscriber Growth.
- E (AI-assisted content moderation): Paused 8 months ago pending legal review of liability implications. Legal review completed last month, approved with conditions. Ready to restart.
- F (Personalized push notifications): 4 months live. 34% open rate improvement. Sponsor just left. No successor named. No data flywheel.
- G (Automated sports highlights): 2 months live. Early accuracy at 88%. Production team adoption at 62%. Sponsor is the VP of Sports Content.
- H (AI dubbing for international markets): Proposed. No development started. Business case: $12M/year in dubbing cost savings. Data: 8 years of dubbed content available for training.


**Which five initiatives should be continued, and what is the appropriate action for the remaining three?**

- A. Scale B, C, E. Continue D, G. Pause A (margin problem). Terminate F. Defer H.

(Scaling E immediately after legal approval skips the scoping step. The approval came with conditions that need to be incorporated into the implementation plan before scaling. Pausing A is the right instinct, but the recommendation should include a specific condition (compute cost optimization plan) and a deadline, not an open-ended pause.)

- B. Scale C, B. Continue D, G. Restart E. Pause F (60-day sponsor condition). Pause A (negative margin, pause condition: submit a compute cost optimization plan within 30 days). Defer H (no development started).

(This is the right portfolio posture. C and B are the scale candidates: C has strong adoption, proven savings, and organizational sustainability; B has strong revenue impact and sponsor support despite plateauing. D and G continue as planned: D is below target but has a credible improvement path; G is early but showing strong signals. E restarts with the legal conditions in place. F is paused with a 60-day sponsor condition: the results are real but an initiative without a sponsor is organizationally fragile.

A is the hardest call: the recommendation engine has strong subscriber impact, but negative margin at scale is an economic sustainability failure. The right move is to pause A pending a compute cost optimization plan, not terminate. It cannot continue at current investment without addressing the margin problem. H is deferred: the business case is strong but no development has started, and adding a new initiative while rationalizing the portfolio contradicts the board's directive.)

- C. Scale A, B, C. Continue D, G. Pause E (just approved, needs scoping). Terminate F (no sponsor). Defer H.

(Scaling A despite negative margin is an economic sustainability failure. Strong subscriber retention does not justify an initiative that costs more to run than it generates. Pausing E because it "just got approved" ignores the fact that the legal review was the blocking condition, so it is ready to restart.)

- D. Scale A, C, G. Continue B, D. Pause E. Terminate F. Defer H.

(Scaling G after 2 months is premature. The signals are positive but insufficient to justify scaling investment. Continuing A without addressing the negative margin problem perpetuates the economic sustainability failure.)


---


### Q.62. A regional airline operates a fleet of 78 aircraft.

Unscheduled maintenance events, where an aircraft is grounded outside its planned maintenance windows, cost an average of $110K per event in delays, rebookings, and rerouted crew, and the airline experiences roughly 40 such events per year. The VP of Maintenance Operations wants to apply AI to reduce unscheduled events. Four use cases have been proposed:

- Use case A: Predict which aircraft components are likely to fail before their next scheduled maintenance window, based on sensor telemetry, operating conditions, and component age.
- Use case B: Classify incoming maintenance requests by urgency tier to support technician workload balancing.
- Use case C: Identify recurring failure patterns across component types, aircraft models, and route profiles.
- Use case D: Recommend parts ordering schedules to the parts management team based on projected maintenance demand.

**Which use case best matches the highest-impact application of AI capabilities for the described business function?**

- A. Use case D, recommendation of parts ordering schedules improves supply chain readiness for maintenance work

(Recommendation of parts ordering schedules is a supply chain optimization capability. It ensures parts are available when maintenance is performed but does not reduce the frequency of unscheduled maintenance. If the airline still experiences 40 unscheduled events per year with better parts availability, the cost impact is unchanged. Prediction on the component-failure side is where the value comes from.)

- B. Use case C, pattern recognition across component types and route profiles supports fleet-level design conversations with the manufacturer

(Pattern recognition across component types and route profiles is a valuable capability for long-term fleet strategy conversations with manufacturers, but it operates at a timescale (years, fleet-wide) that does not directly reduce unscheduled events in the current operating environment. Prediction operates at the timescale of the actual business problem, the next maintenance window for a specific aircraft.)

- C. Use case B, classification of maintenance requests supports workload balancing and technician utilization

(Classification of maintenance requests by urgency supports operational efficiency and technician workload balancing. It does not reduce the frequency of unscheduled maintenance events, which is the stated business problem. Workload balancing addresses what happens after unscheduled events occur, not how to prevent them.)

- D. Use case A, prediction of component failures before scheduled windows enables preemptive maintenance, directly reducing unscheduled events

(Prediction is the highest-impact match here because the business problem is preventing unscheduled events, and prediction is the capability that enables preemption. Sensor telemetry, operating conditions, and component age are the inputs a predictive model needs to forecast component failures before they force an aircraft out of service. Moving components into scheduled maintenance windows converts unscheduled $110K events into planned maintenance activity. This is a direct one-to-one match between the AI capability and the business outcome.)

**D**
