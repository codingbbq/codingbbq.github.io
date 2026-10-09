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

**D**

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

**B**

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

---

### Q.63. An AI-powered customer service chatbot has been live for six months at a regional insurance company.

The data shows: average handle time reduced by 40%, quarterly cost savings of $180K, CSAT score up 8 points, and employee satisfaction up 12 points (agents now handle complex cases only). The CFO is asking for the ROI case. The CHRO is asking about workforce impact. The CIO is asking about adoption and integration health. **Which KPIs should the team lead with for the CFO, and which for the CHRO?**

- A. CFO: CSAT up 8 points, employee satisfaction up 12 points. CHRO: $180K quarterly savings, 40% handle time reduction.
- B. CFO: $180K quarterly savings, 40% handle time reduction. CHRO: Employee satisfaction up 12 points, agents now handling complex cases only.
- C. CFO: $180K quarterly savings, CSAT up 8 points. CHRO: 40% handle time reduction, employee satisfaction up 12 points.
- D. Both audiences should receive all four metrics, the CFO and CHRO will each focus on what matters to them.

**CFO: $180K quarterly savings, 40% handle time reduction. CHRO: Employee satisfaction up 12 points, agents now handling complex cases only.**
The CFO's question is financial: what did this cost, and what did it return? Lead with the $180K quarterly savings and the 40% handle time reduction, both translate directly to cost. The CHRO's question is workforce: what happened to the people? Lead with employee satisfaction up 12 points and the shift to complex-case handling, both speak to workforce quality and engagement. CSAT is a customer metric; it is not the lead for either the CFO or the CHRO.


---


### Q.64. A regional distribution company launched an AI-powered route optimization system four months ago.

The VP of Operations reports that delivery times have improved by 18%. The CFO asks: "Compared to what?" The team realizes that no formal baseline was established before the system launched. A new warehouse manager was also hired the same month the system went live, and she reorganized the dispatch process. **Which baselines should have been established before the system launched?**

- A. Average delivery time for the 12 months prior to launch, broken down by route type and season
- B. Average delivery time for the month immediately before launch
- C. The industry benchmark for delivery time in regional distribution
- D. The delivery time target set in the original business case

**A. Average delivery time for the 12 months prior to launch, broken down by route type and season**
The right baseline is 12 months of pre-launch delivery time data, broken down by route type and season. Twelve months captures seasonal variation. Breaking down by route type prevents the average from hiding variation across different route categories. This baseline would also allow the team to separate the AI system's impact from the warehouse manager's dispatch reorganization.

---

### Q.65. Which of the following best represents the right approach for Wei Zhang's board slide?

- Vision QC scrap rate down from 3.2% to 2.1% on three live lines; clean baseline; estimated cost savings $890K annualized; false-positive rate down from 9% to 2.8%.
- Demand Forecasting forecast accuracy at 78%, target 85%; no pre-launch accuracy baseline; carrying cost baseline $4.2M/year; model running for 4 months. 
- Predictive Maintenance not yet in production; zero ROI to report; historical baseline 4 failures/year at $180K each. 
- The board is a PE firm. They care about EBITDA impact, payback period, and portfolio risk. They are not interested in technical metrics. **Which of the following best represents the right approach for Wei Zhang's board slide?**


- A. Lead with Vision QC's proven results ($890K annualized savings, clean baseline), acknowledge Demand Forecasting's accuracy gap and the missing baseline as a risk, and frame Predictive Maintenance as a pipeline initiative with a quantified opportunity ($720K/year cost avoidance potential)
- B. Lead with all three initiatives equally, present the 78% forecast accuracy as a positive result, and note that Predictive Maintenance is on track
- C. Defer the board presentation until Demand Forecasting reaches its 85% accuracy target and Predictive Maintenance is in production, presenting incomplete results undermines credibility
- D. Lead with the total AI budget committed ($3M) and the total potential value across all three initiatives ($2.1M+ annualized), without distinguishing between proven and projected results

**A. Lead with Vision QC's proven results ($890K annualized savings, clean baseline), acknowledge Demand Forecasting's accuracy gap and the missing baseline as a risk, and frame Predictive Maintenance as a pipeline initiative with a quantified opportunity ($720K/year cost avoidance potential)**

This is the right approach for a PE board audience. PE firms are sophisticated — they know that not every initiative delivers in the first six months. What they're evaluating is whether the team is measuring the right things and managing risk honestly. Leading with Vision QC's proven results establishes credibility. Acknowledging the Demand Forecasting baseline gap as a risk (rather than hiding it) demonstrates measurement discipline. Framing Predictive Maintenance as a pipeline initiative with a quantified opportunity ($720K/year) gives the board a forward-looking number without overstating current results.


---

### Q.66. Predictive Maintenance is now in production on the Indiana extruder lines. 

Mateo Jackson (COO) has asked for the ROI case before the H2 board update. Here is what the team knows.
**Investment costs:** 
- Build cost (internal data science team + infrastructure): $1.4M (Year 1) 
- Annual compute and storage: $65K/year - Data science maintenance (0.5 FTE): $80K/year 
- Paper log digitization (one-time): $120K (Year 1 only) **Results (first 6 months of production, Indiana lines only):** 
- Unplanned failures: 0 in 6 months (historical rate: 4/year at $180K each = $720K/year) 
- Planned maintenance cost reduction: maintenance team now schedules proactively; parts inventory reduced by $85K 
- Technician time recovered: 6 hours/week per technician, 4 technicians, at $75/hour fully loaded = $93.6K/year Wei Zhang asks for the 2-year ROI and payback period. 

Which calculation is correct?

- A. Year 1 costs $1,665K; Year 1 benefits $898.6K; Net Year 1 −$766.4K; Year 2 net $753.6K; payback approximately 22 months; 2-year ROI −0.8% (near break-even by end of Year 2)
- B. Year 1 costs $1,400K (build only); Year 1 benefits $720K (failure avoidance only); payback approximately 23 months
- C. Year 1 costs $1,665K; Year 1 benefits $720K (failure avoidance only); payback 28 months
- D. Year 1 costs $1,400K; Year 1 benefits $898.6K; payback 19 months

**A. Year 1 costs $1,665K; Year 1 benefits $898.6K; Net Year 1 −$766.4K; Year 2 net $753.6K; payback approximately 22 months; 2-year ROI −0.8% (near break-even by end of Year 2)**
This is the complete calculation. Year 1 costs include all four cost categories: build ($1.4M), compute/storage ($65K), data science maintenance ($80K), and log digitization ($120K) = $1,665K. Year 1 benefits include all three benefit categories: failure avoidance ($720K), parts inventory reduction ($85K), and technician time recovered ($93.6K) = $898.6K. The 2-year ROI of −0.8% (near break-even by end of Year 2) is correct and expected for a capital-intensive build initiative in Year 1. The payback period of approximately 22 months is the honest answer — Wei Zhang needs this number, not a rosier version.


--- 


### Q.67. A financial services firm has three AI initiatives at the six-month mark. No initiative has produced measurable ROI yet.

- Initiative A (Churn prediction): 78% adoption. Data pipeline: 98% uptime, freshness under 1 hour. Sponsor (CRO) attending monthly reviews. Model accuracy: 84%, improving 1.5% per month.
- Initiative B (Contract review automation): 23% adoption. Data pipeline: 94% uptime. Sponsor (General Counsel) has been reassigned; no replacement named. Model accuracy: 91%, flat for 8 weeks. - Initiative C (Demand forecasting for treasury): 51% adoption. Data pipeline: 96% uptime. Sponsor (CFO) engaged. Model accuracy: 79%, improving 0.8% per month. One in five predictions flagged as unreliable. **Which initiative is at highest risk, and what is the primary signal?**

- A. Initiative A, accuracy at 84% is below the typical 90% threshold for production AI systems
- B. Initiative B, 23% adoption combined with no active sponsor is the highest-risk combination
- C. Initiative C, one in five predictions flagged as unreliable indicates a fundamental model problem
- D. All three are equally at risk, none has produced measurable ROI at six months

**B. Initiative B, 23% adoption combined with no active sponsor is the highest-risk combination**
Initiative A's trajectory (improving 1.5% per month) is the important signal, not the current accuracy number. All other indicators are strong: 78% adoption, healthy pipeline, engaged sponsor. On track.


---


### Q.68. An AI initiative at a regional bank was budgeted at $500K for the first year.

At the six-month mark, the team has spent $380K. Compute costs are running 3x the estimate because experiments are being run on full production data. Storage costs are climbing because no data retention policy was established. The team has requested a $120K GPU cluster to accelerate model iteration. 

**Which cost controls should be implemented?**

- A. Approve the $120K GPU cluster request, increase the annual budget to $620K, and establish a data retention policy going forward
- B. Implement data sampling for experiments (run on 15% of production data), establish a 90-day retention policy for superseded model artifacts, and defer the GPU cluster request pending a utilization review
- C. Pause all model experiments until the budget is back on track, then resume with a revised compute budget
- D. Terminate the initiative, a 76% budget consumption at six months with no ROI indicates the initiative is not financially viable

**B. Implement data sampling for experiments (run on 15% of production data), establish a 90-day retention policy for superseded model artifacts, and defer the GPU cluster request pending a utilization review**

Option B addresses both root causes. Data sampling directly addresses the 3x compute overrun. A 90-day retention policy addresses the storage cost growth. Deferring the GPU cluster request is the right call — adding a $120K GPU cluster without understanding utilization will likely make the overrun worse.


---


### Q.69. Wei Zhang has reviewed the portfolio health data. He has asked you to recommend an intervention plan for Demand Forecasting before the H2 board update. 

Here is the full picture. 

- Accuracy plateau: 81% for 6 weeks, target 85%. Akua Mansa believes the plateau is caused by the 8% data drop in the customer demand feed. The model is training on incomplete data. 
- Compute overrun: $67K/year actual vs. $48K projected. Akua's team has been running full-production-data experiments to diagnose the accuracy plateau; each experiment run costs approximately $800 in compute. 
- Adoption gap: 39% of Sales and Operations planners are still using manual override. The primary reason: the model's output does not include the customer-specific demand signals that planners know from experience. 
- Sponsor status: Wei Zhang is engaged. Saanvi Sarkar (CIO) is attending reviews. No sponsor gap. 

**Which intervention plan best addresses the root causes?**

- A. Fix the data pipeline (resolve the 8% record drop), implement data sampling for experiments, and address the adoption gap by adding customer-specific demand signals to the model's input features
- B. Pause the initiative until accuracy reaches 85%, then restart with a revised data strategy
- C. Increase the compute budget by 40% to accommodate the experiment volume, and continue diagnosing the accuracy plateau
- D. Terminate the initiative. 81% accuracy after 8 months with a 40% compute overrun and 39% adoption gap indicates the fundamental case is not working

**A. Fix the data pipeline (resolve the 8% record drop), implement data sampling for experiments, and address the adoption gap by adding customer-specific demand signals to the model's input features**

This is the right intervention because it addresses all three root causes. The data pipeline fix addresses the most likely cause of the accuracy plateau — the model is training on incomplete data. Data sampling for experiments addresses the compute overrun — running experiments on full production data is the specific behavior driving the 40% overrun. Adding customer-specific demand signals addresses the adoption gap — planners are overriding the model because it does not know what they know. All three interventions address root causes rather than symptoms.


---


### Q.70. It is the day before the PE board meeting. Wei Zhang has asked you to review the final presentation and flag any gaps before he walks in.

The presentation has three parts: financial results, portfolio health, and the next-half recommendation. Financial results: Vision QC: $890K annualized savings, approximately 8-month payback (phased rollout), 2-year ROI 203% (Year 1 investment basis); clean baseline. Demand Forecasting: 81% accuracy against an 85% target; no pre-launch accuracy baseline; carrying cost baseline $4.2M/year; intervention plan in place. Predictive Maintenance: 0 unplanned failures in 6 months against a historical 4 per year at $180K each; 22-month payback. Portfolio health: Vision QC: all leading indicators green; on budget. Demand Forecasting: accuracy plateau (yellow), compute overrun 40% above projection (red); intervention plan in place. Predictive Maintenance: all leading indicators green; on budget. Next-half recommendation: "AnyCompany Packaging will continue investing across all three initiatives." 

**Which gap represents the highest risk to Wei Zhang's credibility with the board, and what should replace it?**

- A. The Predictive Maintenance 22-month payback. Reframe it as a cost avoidance story rather than an ROI story, because the board expects a payback inside 18 months.
- B. The Demand Forecasting compute overrun. Present the intervention plan before the board asks about it, so the red status arrives with a fix attached.
- C. The Demand Forecasting missing accuracy baseline. Remove that initiative from the financial results until the baseline has been reconstructed from historical data.
- D. The next-half recommendation. A board approving spend cannot act on a statement that the company will continue investing in all three. Replace it with a per-initiative call, scale, continue, or intervene, each tied to the evidence already in the deck and to the signal that would change the call.

**D. The next-half recommendation. A board approving spend cannot act on a statement that the company will continue investing in all three. Replace it with a per-initiative call, scale, continue, or intervene, each tied to the evidence already in the deck and to the signal that would change the call.
This is the gap that matters. The first two parts of the deck are strong, with proven results on one initiative, a diagnosed problem with a plan on another, and clean indicators on the third. The recommendation then asks the board to approve continued spend without saying what the spend buys or what would change the decision. Everything needed is already in the deck. Vision QC has proven results and green indicators, which supports scaling. Demand Forecasting is mid-intervention, which supports continuing at current level with a defined checkpoint. Predictive Maintenance is performing but early, which supports completing the current rollout before expanding. A recommendation that names the call per initiative, ties each to its evidence, and states the signal that would reverse it is what a board can actually act on.


---


### Q.71. A national consumer electronics retailer has deployed an AI-powered product recommendation engine on its e-commerce site. 

Nine months into deployment, the Chief Digital Officer is preparing an update for the executive team. Three executives will attend and each has a different primary interest:

The CFO wants to know whether to continue the initiative next fiscal year based on financial return.
The Chief Marketing Officer wants to understand how the recommendation engine is affecting brand perception among younger customers.
The Chief Human Resources Officer, who owns customer service, wants to know whether recommendation-related customer service inquiries have changed.
The AI team has proposed four KPI packages, each with a different emphasis:

Package A: One universal KPI set for all three executives, revenue lift, average order value increase, customer satisfaction, customer service inquiry volume, brand perception NPS
Package B: Audience-specific KPI sets, CFO gets revenue lift and average order value; CMO gets brand perception NPS and younger-customer engagement metrics; CHRO gets customer service inquiry volume and inquiry resolution time
Package C: Financial KPIs for the CFO only, and a single combined qualitative report for the CMO and CHRO
Package D: A single scorecard combining all KPIs with the CFO's metrics highlighted, since the CFO is the primary decision-maker on next-year budget
Which KPI package is the most appropriate for this stakeholder mix?

- A. Package C, the CFO's financial ask is the primary business question; the other executives can share a qualitative view

Prioritizing the CFO's financial ask is defensible in one respect, budget continuation is a real decision, but treating the CMO and CHRO as a single audience with a combined qualitative report ignores the fact that their decisions are different. The CMO evaluates brand and audience effects; the CHRO evaluates operational load. Those are different questions that need different data. Combining them into one qualitative view weakens both.

- B. Package B, audience-specific KPI sets match each executive's decision context; tangibles for the CFO, intangibles for the CMO, mixed operational metrics for the CHRO

Audience-specific KPI packages match the KPI selection to the decision each executive is making. The CFO's decision is financial (continue next fiscal year), so tangibles (revenue lift, average order value) are primary. The CMO's decision is about brand and audience (how the recommendation engine affects younger customers), so intangibles (brand perception NPS, younger-customer engagement) are primary. The CHRO's decision is operational (has customer service load changed?), so operational metrics (inquiry volume, resolution time) are primary. Each executive gets the KPIs that answer their question. This is the correct application of "distinguish appropriate KPIs", the right KPI depends on the audience and the decision, not on the initiative alone.

- C. Package A, a single KPI set is easier to maintain and ensures all executives see the same information

A single universal KPI set is easier to maintain but does not serve any of the three executives well. The CFO does not need brand perception NPS to decide budget continuation. The CMO does not need customer service inquiry volume to assess brand impact. The CHRO does not need revenue lift to evaluate customer service load. Presenting all five KPIs to all three executives forces each of them to filter the report for the metrics that matter to their decision, which reduces the report's usefulness for each audience.

- D. Package D, highlighting the CFO's metrics acknowledges the primary decision-maker while keeping the other executives informed

Highlighting the CFO's metrics on a combined scorecard acknowledges the decision hierarchy but still forces the CMO and CHRO to work with metrics that were not selected for their decisions. Audience-specific KPI packages achieve the same acknowledgment of decision hierarchy (the CFO gets the financial metrics) while also serving the other executives' decisions directly.

**B**

---


### Q.72. A Chief Digital Officer at a consumer products company is presenting the company's AI value story to a new board member who has a background in regulatory compliance.

The board member asks three questions in sequence:

Question 1: "Your AI-powered product recommendation engine has a 94% click-through rate. How do you know it is not steering customers toward higher-margin products at the expense of the products that best meet their needs?"
Question 2: "Your AI-powered supply chain optimization system makes autonomous reorder decisions for 8,000 SKUs. What happens when it makes a wrong decision that results in a stockout or an overstock event?"
Question 3: "Who is accountable when one of your AI systems causes a customer harm or a business loss?"
Which benchmark category does each question map to, and which response correctly addresses all three?

- A. Question 1: Fairness. Question 2: Safety. Question 3: Governance. Response: "We assess recommendation equity across product categories quarterly, we have defined error containment thresholds and human review triggers for supply chain decisions, and we have named model owners with documented accountability for each production system."

Each question maps to a specific benchmark category. Question 1 is a Fairness question: the board member is asking whether the recommendation engine produces equitable outcomes for customers, or whether it optimizes for company margin at the customer's expense. This is a fairness concern, not a trust or performance concern. Question 2 is a Safety question: the board member is asking about error containment and what happens when the system makes a wrong decision. Safety benchmarks define the acceptable error rate and the containment mechanism. Question 3 is a Governance question: accountability structures, model ownership, and the audit trail for decisions and errors. Option A correctly maps all three and provides a substantive response to each: quarterly equity assessment (Fairness), defined error containment thresholds and human review triggers (Safety), and named model owners with documented accountability (Governance)

- B. Question 1: Performance. Question 2: Safety. Question 3: Controllability. Response: "Our recommendation engine has a 94% click-through rate confirming customer acceptance, we have guardrails on reorder quantities to prevent extreme decisions, and supply chain managers can override the system at any time."

A 94% click-through rate is a Performance indicator, not a Fairness indicator. High click-through does not confirm that the recommendations are equitable across product categories or that they meet customer needs versus optimize for company margin. Question 1 is asking about equity, not performance. Question 3 is a Governance question about accountability, not a Controllability question about override capability.

- C. Question 1: Fairness. Question 2: Controllability. Question 3: Governance. Response: "We have not yet completed a formal recommendation equity assessment but plan to do so, we allow supply chain managers to override reorder decisions, and we are in the process of naming model owners for each system."

The benchmark category mapping is correct, but the response is inadequate. "Have not yet completed a formal assessment but plan to do so" is not a substantive response to a Fairness question from a board member. "In the process of naming model owners" is not a substantive response to a Governance question. The board member is asking whether the company has these controls in place, not whether they are planned. Option A provides substantive responses; Option D acknowledges gaps without demonstrating that the controls are operational.

- D. Question 1: Trust. Question 2: Controllability. Question 3: Governance. Response: "We provide customers with explanations for each recommendation, we allow supply chain managers to override any autonomous reorder decision, and we have a named model owner accountable for each production system."

Question 1 is a Fairness question, not a Trust question. Trust benchmarks measure whether users can understand and explain the system's recommendations. The board member is asking whether the recommendations are equitable for customers, which is a Fairness question. Question 2 is a Safety question, not a Controllability question. Controllability covers human override capability. Safety covers what happens when the system makes an error and how the error is contained. The board member is asking about error consequences, not override capability.

**A**

---


### Q.73. A regional airline is preparing to deploy an AI-powered crew scheduling optimizer, which will replace a decades-old manual scheduling process. 

The VP of Flight Operations wants to prove business value 12 months after deployment. The AI team has 6 weeks before the system goes live and has proposed capturing baseline data during that window. Available operational data includes:

- Crew utilization rate (percent of duty hours flown vs. available duty hours), tracked daily for the past 5 years
- Overtime cost per pay period, tracked by base and by crew role, past 3 years
- Trip trade rate (percent of trips crew members voluntarily swap with other crew members), tracked past 2 years
- Crew satisfaction survey scores, quarterly for past 3 years
- Regulatory rest-rule violations, tracked as compliance events, past 5 years
- On-time departure rate influenced by crew availability, tracked but not attributed to scheduling specifically
- Additional context: The airline's largest crew base is transitioning to a new labor agreement in month 4 after deployment. The current scheduling manager, who has 22 years of tenure and knows the informal rules, is retiring 30 days after deployment.

Which baseline capture approach best positions the airline to prove the AI system's business value 12 months after deployment?

- A. Capture only tangible cost baselines (overtime cost, utilization rate) during the 6-week window before deployment, since intangibles are subjective and hard to defend

Tangible-only baselines answer "did overtime cost drop?" but not "did overtime cost drop because of the AI or because of something else?" Crew scheduling touches multiple dimensions, cost, utilization, compliance, satisfaction. If the airline wants to prove value across the full picture, the baseline must span the same dimensions. Intangibles are harder to measure but not "subjective and hard to defend", crew satisfaction survey scores and trip trade rate are quantifiable, and both correlate with scheduling quality. Omitting them leaves gaps that make the 12-month value story incomplete.

- B. Establish a multi-dimensional baseline during the 6-week window (utilization, overtime, trip trade, satisfaction, rest-rule compliance) AND document the two known confounders (labor agreement change in month 4, scheduling manager retirement at day 30) so post-deployment measurement can control for them

This is the correct baseline approach for three reasons: (1) It is multi-dimensional, spanning the operational KPIs the AI is expected to affect (cost, utilization, compliance, satisfaction). Single-dimension baselines cannot support multi-dimensional value stories. (2) It captures the baseline in the window immediately before deployment, which controls for trend drift and provides a clean "before" state. (3) It documents the two known confounders, the labor agreement change and the scheduling manager retirement. Both events will affect the operational KPIs regardless of whether the AI is deployed. Documenting them upfront allows post-deployment measurement to isolate the AI's effect from the confounding events. Without that documentation, the 12-month value story is exposed to the challenge "how does the team know the improvement came from the AI and not from the labor agreement change?" A baseline that includes both the metrics and the confounders is the defensible approach.

- C. Capture the full 5 years of historical data as the baseline, since more historical data produces a more stable baseline

Five years of historical data is useful context, but historical averages do not always represent the current baseline state accurately. Operations change over time. Fleet composition, route network, and crew size may all have shifted. The baseline that matters is the state of the operation immediately before AI deployment, so that any changes after deployment can be attributed to the AI change, not to trend drift over five years. Historical data supports the baseline; it does not replace it.

- D. Defer baseline capture until 3 months after deployment so the new system's initial performance can serve as its own baseline

Using post-deployment performance as its own baseline eliminates the ability to measure change. If the AI system's month-1 performance is the baseline, then any improvement over that baseline is an improvement over an already-optimized state, not an improvement over the pre-AI operation. This defeats the purpose of baseline measurement, which is to isolate the change the AI produced.

**B**


---


### Q.74. A Chief Underwriting Officer at a national insurance company is reviewing a 10-month leading indicator report on an AI-powered underwriting recommendation system. The data shows:

 Overall model accuracy: 81% against the target of 88%.
 Accuracy on standard commercial policies (75% of volume): 89%.
 Accuracy on complex commercial policies (25% of volume): 54%.
 Adoption by junior underwriters (58% of the underwriting team): 74%.
 Adoption by senior underwriters (42% of the underwriting team): 21%.
 Data pipeline health: 98% uptime. Training data is a 3-year historical claims dataset that a recent audit found has a 12% error rate in the historical loss estimates.
 Sponsor (VP of Underwriting): engaged, attending weekly reviews.
 Compute costs: on budget.
 The Chief Underwriting Officer asks: "What is the most important thing we need to fix before the annual board review in 60 days?"

Which response correctly identifies the highest-priority leading indicator issue?

- A. The 81% accuracy on standard policies is the highest priority. The model is 7 points below target, and the board will ask why the accuracy target has not been met after 10 months.

The 81% accuracy gap (7 points below target) is a concern, but it is a downstream effect of the training data quality problem. Presenting the accuracy gap to the board without identifying the root cause signals that the team does not understand why the model is underperforming. The board will ask "why is it at 81%?" and the honest answer is "because 12% of the training data contained errors." That is the answer that needs to be prepared.

- B. The 12% data quality error in historical claims data is the highest priority. Training data errors are a root cause that affects model accuracy on all policy types and cannot be resolved by any other intervention.

The 12% data quality error in historical claims data is the highest priority because it is a root cause that affects every other leading indicator. A model trained on data with 12% error contamination will have a structural accuracy ceiling that cannot be overcome by retraining on more of the same data. The 81% accuracy on standard policies and the 54% accuracy on complex policies are both downstream effects of the training data problem. Fixing the data quality issue is the prerequisite for improving accuracy, which is the prerequisite for improving adoption among senior underwriters. Addressing the symptoms (accuracy, adoption) without fixing the root cause (training data errors) will produce incremental improvements that plateau. The board review in 60 days is a constraint, but the right answer to "what is the most important thing to fix?" is the root cause, not the most visible symptom.

- C. The adoption gap among senior underwriters is the highest priority. Senior underwriters handle the highest-value policies, and their non-adoption means the initiative is not reaching its highest-impact use cases.

Senior underwriter non-adoption is a real concern, but it is a symptom of the accuracy problem on complex commercial policies, not an independent leading indicator issue. Senior underwriters are not using the system because it performs at 54% on the policy types they handle. Addressing adoption without fixing the accuracy problem will not change their behavior. The root cause is the training data quality issue.

- D. The 54% accuracy on complex commercial policies is the highest priority. A model that performs at 54% on a policy category is producing recommendations that are wrong nearly half the time, which creates underwriting liability.

The 54% accuracy on complex commercial policies is a serious concern, but complex commercial policies were not in the original scope. The model was not designed or trained for that use case. The 54% accuracy is expected for an out-of-scope application. The in-scope accuracy problem (81% on standard policies against an 88% target) is more directly attributable to the training data quality issue and more relevant to the board review.


**B**

---


### Q.75. A regional credit union deployed an AI-based fraud detection upgrade 18 months ago. The Chief Financial Officer is preparing the annual ROI analysis for the board. The following data has been compiled:

 Implementation cost: $1.2M in Year 1 (already amortized). Annual compute and model retraining: $150K/year.
 Prevented fraud losses: $1.8M/year (measured as reduction from the 3-year pre-deployment baseline of $2.9M/year in fraud losses, so current annual loss is $1.1M).
 False positive reduction: 22% fewer false positive alerts. The savings from investigation time recovered are estimated at 2 analyst FTEs at $85K each per year.
 Customer experience improvement: 34% reduction in false decline events at point of sale. Member satisfaction scores up 6 points. Estimated member retention value: $220K/year.
 Compliance documentation: additional $65K/year to maintain regulatory documentation for the AI model.
 The CFO asks the team to calculate the annual net benefit and the payback period on the Year 1 implementation cost.

Which calculation is correct?

- A. Annual net benefit: $1.8M + ($85K × 2) − $150K = $1.82M. Payback period: about 8 months. Member retention value should be excluded because it is not directly attributable to fraud detection.

Excluding member retention value on the grounds that "it is not directly attributable to fraud detection" applies too narrow a definition of attribution. The false decline reduction is directly caused by the AI model's more accurate fraud scoring, and the member retention value is a direct downstream effect of that reduction. When a benefit has a traceable causal chain from the AI investment, it belongs in the ROI. Excluding it understates the actual return and creates an incomplete business case.

- B. Annual net benefit: $1.8M + ($85K × 2) + $220K − $150K − $65K = $1.975M. Payback period: about 7 months. The full multi-source benefit is included and the compliance documentation cost is subtracted.

This is the correct multi-source ROI calculation. Annual benefits: $1.8M (prevented losses) + $170K (analyst FTE savings, 2 × $85K) + $220K (member retention from reduced false declines) = $2.19M. Annual costs: $150K (compute and retraining) + $65K (compliance documentation) = $215K. Annual net benefit: $2.19M − $215K = $1.975M. Payback period on the $1.2M Year 1 implementation cost: $1.2M ÷ $1.975M/year = about 0.61 years, roughly 7.3 months. All three benefit sources have a traceable causal chain to the AI investment (direct fraud detection, false positive reduction, false decline reduction) and both cost sources are ongoing operational costs directly attributable to the AI system. This is the defensible calculation for a board presentation.

- C. Annual net benefit: $1.8M + $220K − $150K − $65K = $1.805M. Payback period: about 8 months. Analyst FTE savings should be excluded because the analysts were reassigned, not eliminated.

Excluding analyst FTE savings because "the analysts were reassigned, not eliminated" misapplies the ROI framework. When labor is freed up from one activity and redeployed to another activity that produces value, the freed labor represents recovered capacity and belongs in the benefit calculation. The FTE cost is a real cost the credit union no longer needs to attribute to fraud investigation. Excluding it understates the operational efficiency gain.

- D. Annual net benefit: $1.8M − $150K = $1.65M. Payback period: about 8 months.

This calculation captures only the direct fraud loss savings and the compute cost. It omits three material items: the analyst time savings from fewer false positives ($170K/year), the member retention value from fewer false declines ($220K/year), and the compliance documentation cost ($65K/year). ROI calculations must include the full picture of benefits and costs. Selective inclusion produces a misleadingly low ROI figure and understates the actual return.


**B**


---


### Q.76. A VP of Operations at a mid-market logistics company is conducting a six-month portfolio review of three AI initiatives.

The company's CFO has asked for a recommendation: which initiative should receive additional investment, which should be placed on a performance improvement plan, and which should be terminated?

Here is the leading indicator data:

Initiative A (Route optimization): 88% adoption by dispatch team. Data pipeline health: 99.1% uptime, GPS data refreshed every 2 minutes. Sponsor (COO) attending monthly reviews. Model accuracy: 89%, improving 0.5% per month. Compute costs: on budget.

Initiative B (Customer churn prediction): 19% adoption by the customer success team. Data pipeline health: 93% uptime, CRM data feed is 48 hours stale. Sponsor (Chief Revenue Officer) has been reassigned; no replacement named. The company's Chief Revenue Officer role is currently in a search process, with a candidate expected to be named within 30 days. Model accuracy: 83%, flat for 12 weeks. Compute costs: 55% over budget due to full-production-data experiments.

Initiative C (Demand forecasting for fleet capacity): 67% adoption by the capacity planning team. Data pipeline health: 96% uptime. Sponsor (VP of Operations) engaged. Model accuracy: 77%, improving 2.1% per month. Compute costs: on budget. Capacity planners report the model does not yet incorporate seasonal demand patterns, which they are adding manually.

Which recommendation is correct?

- A. Invest in Initiative C (highest accuracy improvement trajectory). Place Initiative A on a performance improvement plan (89% accuracy is below the 95% threshold for production logistics systems). Terminate Initiative B.

There is no universal 95% accuracy threshold for production logistics systems. Accuracy thresholds depend on the specific use case, the cost of errors, and the baseline the model is improving from. Initiative A at 89% and improving is in a strong position. Placing it on a performance improvement plan based on an arbitrary threshold ignores the trajectory and the strong leading indicator profile.

- B. Invest in Initiative A (all leading indicators strong). Place Initiative C on a performance improvement plan (seasonal gap is a structural model problem). Place Initiative B on a performance improvement plan (sponsor gap is addressable with a replacement).

Option B is the correct recommendation. Initiative A has all leading indicators in a strong position: high adoption, healthy data pipeline, engaged sponsor, improving accuracy, on budget. Additional investment is justified. Initiative C has a specific, addressable gap (seasonal demand patterns not yet incorporated) but strong fundamentals: 67% adoption, engaged sponsor, improving accuracy trajectory (2.1% per month), on budget. A performance improvement plan with a clear deliverable (incorporate seasonal patterns into the model) is the right intervention, not termination. Initiative B is the most complex case. The combination of 19% adoption, no active sponsor, 48-hour stale data, flat accuracy, and a 55% compute overrun is a serious leading indicator profile. However, termination is premature if the sponsor gap can be resolved quickly. The right recommendation is a performance improvement plan with a 30-day deadline: name a replacement sponsor, fix the data feed, implement data sampling to address the compute overrun. If any of those conditions is not met at 30 days, termination becomes appropriate.

- C. Invest in Initiative A (all leading indicators strong, on trajectory). Place Initiative C on a performance improvement plan (accuracy below threshold, seasonal gap). Terminate Initiative B (low adoption, no sponsor, stale data, compute overrun).

Terminating Initiative B is premature if the sponsor gap can be resolved. The leading indicator problems are serious but diagnosable: the data feed staleness is a technical fix, the compute overrun is addressable with data sampling, and the sponsor gap can be resolved by naming a replacement. Termination is appropriate when the fundamental business case no longer holds. Here, the case is intact; the execution has multiple fixable problems. A performance improvement plan with a hard deadline is the right intervention before termination.

- D. Invest in Initiative A (all leading indicators strong). Place Initiative B on a performance improvement plan (diagnosable problems). Terminate Initiative C (77% accuracy after six months is below acceptable threshold).

Initiative C should not be terminated. A 77% accuracy rate improving at 2.1% per month is a strong trajectory. At that rate, the model reaches 85% accuracy in approximately four months. The seasonal gap is a known, addressable problem that the capacity planning team is already working around manually. Terminating an initiative with an engaged sponsor, improving accuracy, and an addressable gap is a portfolio discipline failure.

**B**

---


### Q.77. A regional healthcare system has deployed an AI-powered patient triage assistant in its urgent care clinics.

The system helps intake staff prioritize incoming patients based on symptom descriptions, medical history, and current clinic load. Six months into deployment, the Chief Financial Officer has asked for a KPI report to justify continued investment. The CFO is presenting to the board in three weeks. The board is finance-oriented and has asked for a return-on-capital analysis for all technology investments.

The AI operations team has proposed four KPI mixes for the CFO's board presentation:

- Mix A: Tangibles only, average patient wait time reduction (minutes), staff hours saved per week, revenue per patient encounter
- Mix B: Intangibles only, patient satisfaction (NPS delta), staff satisfaction, community reputation score
- Mix C: Both, tangibles primary with intangibles as supporting context, wait time reduction, staff hours saved, revenue per encounter, PLUS patient satisfaction and staff satisfaction as supporting evidence
- Mix D: Both, intangibles primary with tangibles as supporting context, patient satisfaction and staff satisfaction, PLUS wait time reduction and staff hours saved
Which KPI mix is the most appropriate for the CFO's board presentation?

- A. Mix C, tangibles align with the board's return-on-capital ask, while intangibles substantiate the case with the qualitative signals that finance-oriented boards increasingly expect

Mix C is the right structure because it maps directly to the audience and the ask. The board asked for return-on-capital, so tangibles lead: wait time reduction converts to throughput capacity, staff hours saved converts to labor cost, revenue per encounter converts to revenue. Those are the numbers the board's model runs on. Intangibles serve as the supporting layer, patient satisfaction and staff satisfaction are the leading indicators that predict whether the tangible results will hold. A finance-oriented board evaluating a technology investment wants both: the numbers, and the qualitative signals that confirm the numbers will persist. Leading with tangibles respects the ask; including intangibles as supporting context strengthens the case.

- B. Mix D, intangibles matter most in healthcare, and board members should be educated on the full value story

Intangibles matter, but leading with them for a board that has explicitly asked for return-on-capital does not answer the question the board asked. The board's framing sets the primary structure of the presentation. Educating the board on the full value story is legitimate, but it must be built on top of the numbers the board asked for, not in place of them.

- C. Mix A, the board asked for return-on-capital, which is a financial measure; intangibles complicate the analysis
 
Tangibles-only aligns with the board's return-on-capital ask on the surface but leaves the story incomplete. Boards evaluating technology investments increasingly ask for the qualitative signals that back up the numbers, because those signals predict whether the tangible results will persist. Wait time reduction is a valid tangible KPI, but a board reviewing it in isolation may ask "will this hold up as adoption changes?" The answer to that question lives in the intangible KPIs: patient satisfaction, staff satisfaction. Without them, the CFO is presenting the numbers without the context that makes them defensible.
 
- D. Mix B, a board that asks for return-on-capital is telling the CFO that intangibles are secondary; tangibles alone answer the question

A board asking for return-on-capital is signaling how it will evaluate the investment, not that intangibles are irrelevant. Leading with intangibles inverts the priority the board set. The CFO's job is to answer the question asked first, then broaden the picture. Mix D is defensible for a different board (one focused on mission or brand), but not this board.


**A**


---


### Q.78. The CFO's question: which cost driver contributes the largest share of the overrun, and what is the appropriate first action?

A regional real estate services firm deployed an AI-powered lease analysis system 10 months ago to extract structured data from tenant lease documents (average 42 pages each, roughly 8,000 leases processed per year). The CFO is reviewing a Q3 budget variance report and has flagged that the initiative is running 72% over budget. The team has provided the following cost breakdown:

 Compute costs (document processing, model inference): $340K/year, budgeted at $180K. Overrun driven by the team running the full document through the model every time a lease is amended, rather than reprocessing only the changed pages.
 Storage costs: $85K/year, budgeted at $50K. Overrun driven by retaining full-resolution document images for every version of every lease indefinitely, with no retention policy in place.
 Model retraining: $110K/year, budgeted at $80K. Team has been retraining the model monthly to incorporate new lease types.
 Human review of low-confidence extractions: $180K/year, budgeted at $200K. Slightly under budget.
 Compliance documentation: $45K/year, budgeted at $40K. Slightly over budget.
 Vendor licensing: $120K/year, budgeted at $120K. On budget.
 Total actual: $880K/year.
 Total budgeted: $670K/year.
 Variance: $210K over (31% over-budget).
 The CFO's question: which cost driver contributes the largest share of the overrun, and what is the appropriate first action?

- A. Compute costs, the $160K overrun is the largest single driver. Action: implement incremental processing so only changed pages are reprocessed on lease amendments.

Compute costs are the largest single overrun ($160K over on a budget of $180K, nearly a doubling of the compute line). The specific cause is documented: the team is reprocessing the full 42-page lease every time a single page is amended, rather than reprocessing only the changed pages. Incremental processing is the direct fix and would return compute costs close to budget. This is the correct first action because it targets the biggest driver with a specific, actionable fix. The storage overrun ($35K) is the second-largest driver and should be addressed next by establishing a document retention policy, but that fix is less mature and lower-magnitude than the compute fix. Cost optimization discipline prioritizes the largest overrun with the clearest fix, which is compute.

- B. Human review costs, reassign review to junior staff to reduce labor cost. Action: renegotiate reviewer rates.

Human review is under budget, not over. Reassigning review to junior staff addresses a cost that is already performing better than expected and does not touch the actual overrun. The variance drivers are elsewhere.

- C. Vendor licensing, although currently on budget, licensing is the largest absolute line item and offers the biggest optimization target. Action: renegotiate the vendor contract.

Vendor licensing is on budget, not over. It is the largest absolute line item ($120K), but absolute size is not what matters for a variance analysis, variance is. Renegotiating a contract that is meeting its budget target does not address the $210K overrun and consumes leadership attention that should be focused on the actual variance drivers.


- D. Model retraining costs, the $30K overrun signals over-frequent retraining. Action: reduce retraining cadence to quarterly.

Model retraining costs are $30K over budget, a real overrun but not the largest driver. Reducing retraining cadence to quarterly is a defensible action but addresses roughly $30K of the $210K total overrun. The compute overrun ($160K) is over five times larger. Prioritizing retraining before compute misaligns the fix with the magnitude of the problem.


**A**

---


### Q.79. A VP of Digital Strategy at a mid-market insurance company is preparing a board presentation on the company's AI portfolio.

The company has two production AI systems: a claims processing automation system (live 18 months) and a customer risk scoring system (live 9 months). The board has asked for a responsible AI update alongside the financial results. Here is the benchmark status for each system:

#### Claims processing automation:

	Performance: 96% straight-through processing rate. Average claims cycle time reduced from 14 days to 3 days.
	Fairness: Assessed. No statistically significant difference in processing time or approval rates across demographic groups.
	Safety: Error containment defined. All claims above $50K reviewed by a human adjuster before payment.
	Trust: Claimants receive an automated explanation of their claim status. Adjusters can see the top 5 factors driving each recommendation.
	Controllability: Adjusters can override any recommendation. Override rate: 4%.
	Privacy and Security: Claimant data encrypted. Access restricted to claims and data science teams.
	Governance: Model owner named (VP of Claims). Quarterly review cadence. Audit trail for all model updates.
	Customer risk scoring:

#### Performance: 84% concordance with manual underwriter assessments.
	Fairness: Not assessed. No demographic analysis of risk score distributions.
	Safety: Score floor and ceiling guardrails in place.
	Trust: Underwriters see a risk tier (1 to 5) but no explanation of which factors drove the score.
	Controllability: Underwriters can override the score. Override rate: 31%.
	Privacy and Security: Customer data encrypted. Access controls in place.
	Governance: No formal model owner. No documented review cadence.
	
	
The board asks: "Which system is better managed from a responsible AI perspective, and what is the most important gap to close in the weaker system?"

Which response is correct?

- A. The claims processing system is better managed. The most important gap in the customer risk scoring system is the Fairness benchmark, because an unassessed risk scoring system in insurance has direct regulatory exposure under fair lending and anti-discrimination requirements.

The claims processing system is clearly better managed across all seven benchmark categories: Fairness is assessed, Governance is formalized, Trust is supported by explainability, and Controllability shows a healthy 4% override rate. The customer risk scoring system has gaps in Fairness, Trust, and Governance. The most important gap is Fairness. An insurance risk scoring system that has never analyzed whether its scores are distributed equitably across demographic groups is exposed to fair lending and anti-discrimination regulatory requirements. Insurance is a heavily regulated industry, and risk scoring systems that produce disparate outcomes for protected classes can result in regulatory action, fines, and license risk. The Fairness gap is the highest-risk unmeasured benchmark because the exposure is unknown and potentially material. The Trust gap (31% override rate, no explainability) is a real concern but is downstream of the Fairness gap in terms of regulatory risk.


- B. The customer risk scoring system is better managed because its 84% concordance rate is more conservative and appropriate for a risk-sensitive application than the claims system's 96% automation rate, which may be moving too fast for a high-stakes insurance context.

An 84% concordance rate is not evidence of better management. It means the system agrees with manual underwriters 84% of the time, which is a Performance benchmark, not a responsible AI benchmark. The claims system's 96% straight-through processing rate reflects strong performance on a well-governed, fully benchmarked system. Comparing automation rates across different use cases does not indicate which system is better managed from a responsible AI perspective.


- C. Both systems are equally well managed. The claims system has stronger governance and explainability; the risk scoring system has stronger safety guardrails and a more conservative automation posture. The gaps in each system offset the strengths of the other.

The two systems are not equally well managed. The claims system has been assessed across all seven benchmark categories and has formal governance in place. The customer risk scoring system has three unaddressed gaps (Fairness, Trust, Governance) and a 31% override rate that signals a structural trust problem. These are not equivalent profiles.

- D. The claims processing system is better managed. The most important gap in the customer risk scoring system is the Trust benchmark, because a 31% override rate indicates underwriters do not trust the system's output and are reverting to manual judgment on nearly one in three decisions.

The Trust gap is a real concern. A 31% override rate is significantly higher than the 4% rate on the claims system, and it likely reflects underwriters' inability to understand or validate the risk score. However, the Trust gap is a business efficiency problem, not a regulatory exposure. The Fairness gap is a regulatory exposure. In insurance, an unassessed risk scoring system is a higher-priority gap than an unexplained one.

**A**

---


### Q.80. A specialty foods manufacturer deployed an AI demand forecasting system 24 months ago to reduce waste in a highly perishable product line. The CFO is preparing a two-year retrospective for the executive team. The following data has been compiled:

	Implementation cost: $850K in Year 1 (fully amortized). Ongoing compute and data pipeline costs: $95K/year.
	Waste reduction: 38% reduction in perishable product waste. Baseline waste was $3.6M/year; current waste is $2.23M/year. Annual savings: $1.37M/year.
	Stockout reduction: 41% reduction in retailer stockout events. Value of recovered sales (products that would have stocked out): $480K/year.
	Retailer relationship value: The two largest retail customers (representing 34% of revenue) have cited the improved fill rate in renewing their supply agreements. The CFO estimates that retaining these accounts is worth $2.4M/year in preserved revenue, but the AI system is one of several factors those retailers considered.
	Workforce impact: Two demand planners were promoted into new strategic roles when their forecasting workload dropped. Their prior salary cost of $95K each per year continues as they remain on payroll in the new roles.

The CFO asks whether the retailer relationship value should be included in the ROI calculation and, if so, at what value.

Which ROI approach is the most defensible for the executive team presentation?

- A. Include a partial, defensible share of the retailer relationship value (for example, 30–50 percent) as a supporting intangible with the range disclosed, and present the tangible benefits as the primary ROI figure. Annual tangible net benefit: $1.37M + $480K − $95K = $1.755M. With disclosed partial retention value ($720K to $1.2M/year), total range: $2.475M to $2.955M/year.

This is the correct approach for two reasons: (1) It separates the tangible ROI (waste reduction, stockout recovery) from the intangible retention value, and presents the tangible figure as the primary ROI. The executive team can act on the tangible number without depending on the harder-to-verify retention estimate. (2) It includes the retention value as a disclosed range (30–50 percent of the retailer-cited value) with the range shown to the audience. This is honest attribution: the AI contributed to retention but was not the sole factor. Presenting the range invites the executive team to weigh the assumption. This is the defensible ROI structure for a mixed-source benefit story. The demand planner salaries are correctly excluded because the salary cost continues (the planners were promoted, not eliminated), so there is no cost savings to attribute.

- B. Include the full retailer relationship value AND the demand planner salary savings ($190K/year), since both are documented effects of the AI initiative. Annual net benefit: $1.37M + $480K + $2.4M + $190K − $95K = $4.345M.

This calculation makes two errors: it claims the full retailer retention value (over-attributing to the AI), and it also claims $190K in demand planner salary savings. The planners were promoted, not eliminated, their salary continues on the books. The freed workforce capacity has real value, but it is not a salary saving. Combining an over-attributed retention figure with a non-existent salary saving compounds the overstatement.

- C. Include full retailer relationship value ($2.4M/year) because the retailers explicitly cited the improved fill rate. Annual net benefit: $1.37M + $480K + $2.4M − $95K = $4.155M.

Attributing the full $2.4M retailer relationship value to the AI initiative overstates the case. The retailers cited the improved fill rate as one of several factors in renewing the supply agreements. Product quality, pricing, service levels, and existing relationships also contributed. Claiming the full retention value overstates the AI's causal contribution and exposes the CFO to a valid challenge from the executive team ("would we have retained those retailers anyway?"). ROI figures are most defensible when they claim what the initiative caused, not what it correlates with.


- D. Exclude retailer relationship value entirely because it is not directly attributable and cannot be measured cleanly. Annual net benefit: $1.37M + $480K − $95K = $1.755M.

Excluding retailer relationship value entirely understates the case in the other direction. The retailers explicitly cited the improved fill rate, that is direct evidence that the AI system contributed to retention. Ignoring documented evidence produces a conservative but incomplete picture. The right approach is to include a defensible partial share, not to exclude the whole thing.

**A**


---


### Q.81. Which assessment best fits the evidence?

A regional bank learns that its largest competitor has announced an AI-powered "relationship intelligence platform" that uses AI to analyze customer financial behavior across all product lines and proactively surface personalized offers before the customer knows they need them. The announcement cites one enterprise customer pilot. The competitor's LinkedIn profile shows two data scientists and a "Head of AI" hired six months ago. No technology partner announcements. The competitor operates on a core banking system installed in 2008.

**Which assessment best fits the evidence?**

- A. The competitor's move is a feature upgrade to their existing product suite. A matching personalization feature can be delivered within six months.
- B. The announcement is PR only. No response is warranted until the competitor demonstrates customer switching.
- C. The competitor's platform is a business model change that will generate significant switching costs within 12 months. The bank must respond with a comparable platform immediately.
- D. The competitor has announced an AI ambition, not a capability. The evidence (two data scientists, one pilot, legacy core banking infrastructure) suggests the platform is 18–24 months from production deployment. The bank's response window is open.

**D**
Rationale: The evidence maps to an early-stage ambition, not a production capability. Two data scientists cannot sustain a multi-product relationship intelligence platform. One pilot is adoption, not scale. A 2008 core banking system is a significant infrastructure constraint for real-time AI — modernizing it is a multi-year effort that typically precedes a production AI platform. The bank's response window is open. The right use of it is monitoring the competitor's capability signals (hiring, partnerships, technology investments) and protecting key customer relationships proactively.


---


### Q.82. Sofía Martínez has called a leadership meeting for Friday. 

She has asked you to prepare a one-page assessment of the competitor's announcement before the meeting. Here is the full picture from Akua Mansa's analysis. - Data Assets: Partial. Sensor coverage on newer lines confirmed; full-fleet coverage unconfirmed. - Technical Infrastructure: Aspirational. No evidence of production-scale customer API. - Organizational Capability: Partial. Three-person data science team; multi-plant sustainability uncertain. - Customer Integration: Early. One customer reference; no procurement system integration. - Market signal: Two of AnyCompany Packaging's top-ten CPG accounts have asked whether AnyCompany offers comparable capabilities. Neither has issued an RFP or indicated a switch intention. **Which assessment best fits the evidence and is most useful for Friday's leadership meeting?**


- A. The competitor's move is a business model change that threatens AnyCompany Packaging's largest accounts. Immediate investment in a comparable platform is required to avoid losing those accounts within 12 months.
- B. The competitor's announcement represents an early-stage business model ambition. The current capability is partial, but the trajectory is toward platform competition. The response window is open but not indefinitely. The immediate priority is protecting customer relationships through communication, not technology investment.
- C. The competitor's move is a feature upgrade, not a business model change, because the customer integration is only at one account. AnyCompany Packaging should match the feature set within six months and move on.
- D. The competitor's announcement is primarily PR. The capability gaps across all four dimensions suggest the platform is not yet operational. No response is warranted until customer accounts show active switching behavior.

**B**

Rationale: The competitor's capability is partial across all four dimensions — this is not a fully operational platform. But the trajectory matters: they acquired sensor hardware, they are building a data science team, and they have a customer reference. The direction is toward platform competition even if the current reality is early-stage. Two top-ten accounts asking questions is a relationship signal, not a switching signal. The right immediate action is a proactive conversation, not a technology emergency. The response window is open, and the right use of it is informed planning, not reactive investment.


---


### Q.83. A national pharmacy chain learns that a competitor has deployed an AI-powered medication adherence platform.

Patients receive proactive outreach when the AI predicts they are at risk of missing a refill, based on purchase history, diagnosis codes, and pharmacy interaction data. The platform has been live for 14 months across 80% of the competitor's locations. Three major health insurers have integrated the competitor's adherence data into their care management programs. Patient retention at competitor locations is 18% higher than the industry average. **Which classification correctly describes the competitor's move, and what evidence supports it?**

- A. Business model change. The 18% patient retention advantage is the evidence. Any retention difference this large must reflect a fundamental model shift.
- B. Business model change. The value creation locus has shifted from dispensing medication to managing health outcomes. Insurer integration generates switching costs that deepen over time, and 14 months of live deployment with multi-insurer integration represents a significant head start.
- C. Feature upgrade. The medication adherence capability can be replicated within six months by the pharmacy chain's existing data science team.
- D. Feature upgrade. The AI capability is still in the pharmacy domain. The competitor has not entered a new market or industry.

**B**

Rationale: This is a textbook business model change. All three indicators are present. Value creation locus: the competitor is no longer competing on prescription fulfillment speed, price, or convenience — they are competing on health outcomes and care management. Switching cost: three major insurer integrations mean the competitor's data is embedded in insurer workflows; replacing the pharmacy means rebuilding those integrations from scratch. Response timeline: 14 months of live deployment and 80% location coverage means this is production-scale, not pilot. The response window is closing, not open.


---


### Q.84. A mid-market regional grocery chain is assessing its AI investment posture.

Industry data shows: approximately 30% of comparable grocery chains have at least one AI initiative in production (most commonly demand forecasting and personalization). The leading 10% are deploying customer-facing AI (dynamic offers, autonomous checkout, conversational shopping assistants). The grocery chain currently has one AI initiative in production (demand forecasting, in line with peers). The CEO has asked whether to accelerate investment to match the leading 10% or to maintain current pace. **Which investment posture recommendation is most consistent with the industry maturity context?**

- A. Maintain current pace. The industry is in Stage 2, the grocery chain is in line with peers, and accelerating to Stage 3 pace in a Stage 2 industry creates stranded investment risk.
- B. Accelerate to match the leading 10%. First-mover advantage in customer-facing AI will be decisive, and waiting will close the window permanently.
- C. Accelerate investment specifically in customer-facing AI — the leading 10% are building compounding data assets that will be hard to displace once the industry reaches Stage 3.
- D. Pause investment entirely. With only 30% industry adoption, the market hasn't proven the value of AI in grocery, and the risk of overinvestment is high.

**A**

Rationale: The grocery chain is in line with the industry median (one production deployment, most common use case). Stage 2 investment posture for an "in line" position means selective expansion: pick use cases where the chain has proprietary data or operational context that competitors lack. Accelerating to match the leading 10% means investing at Stage 3 pace in a Stage 2 industry. The customer-facing AI capabilities the leading players are building are not yet valued by the market median, and building them before the market is ready creates stranded investment. The right move is to deepen the current production deployment and identify the next selective expansion candidate, not to chase the leading edge.


---


### Q.85. A regional home services marketplace learns that a competitor has deployed two AI capabilities in the past year.

The first is an AI-powered scheduling optimizer that reduces technician idle time by 22%, lowering operational costs. The second is an AI-powered matching engine that uses homeowner project history, technician skill profiles, and real-time availability to match homeowners with the best-fit technician for each job. The matching engine has been live for 11 months. Two national home warranty companies have integrated the competitor's matching API into their claims fulfillment workflow. Homeowner repeat booking rates on the competitor's platform are 34% higher than the industry average. **Which comparison of these two capabilities correctly applies the distinguishing factors for sustainable competitive advantage versus operational improvement?**

- A. The scheduling optimizer is the sustainable competitive advantage because it produces measurable cost savings (22% reduction in idle time). The matching engine is an operational improvement because matching is a standard marketplace feature.
- B. Both are sustainable competitive advantages. The scheduling optimizer and the matching engine both use AI to create value that competitors cannot replicate within 12 months.
- C. Neither is a sustainable competitive advantage. Both capabilities are technology features that competitors can replicate by licensing similar AI tools from vendors.
- D. The scheduling optimizer is an operational improvement: it reduces cost within the existing model, generates no switching cost, and can be matched by competitors deploying similar optimization tools. The matching engine is a sustainable competitive advantage: the value creation locus has shifted from listing availability to predicting fit, the home warranty API integrations generate switching costs, and the 11 months of homeowner preference data creates a response timeline competitors cannot compress.

**D**

Rationale: Option D correctly applies all three distinguishing factors. For the scheduling optimizer: value creation locus is unchanged (the marketplace still connects homeowners with technicians; scheduling just reduces cost), no switching cost is generated (neither homeowners nor technicians are locked in by the scheduling logic), and response timeline is short (competitors can deploy similar optimization without rebuilding customer workflows). For the matching engine: value creation locus has shifted from availability listing to predictive fit intelligence, switching cost is generated through the home warranty API integrations (warranty companies have rebuilt their claims workflow around the competitor's matching), and the response timeline is extended because 11 months of homeowner preference data and two enterprise integrations cannot be replicated quickly.


---


### Q.86. A regional cold-chain logistics provider learns that its largest competitor, a national operator, has announced an AI-powered "real-time visibility platform."

The platform gives customers a live view of shipment location, temperature history, and predicted arrival time, accessible via a customer portal and API. The competitor has 14 months of live deployment across 60% of its fleet. Three major food manufacturers have integrated the competitor's API into their supply chain management systems. The regional provider's current state: traditional EDI-based shipment tracking (location updates every 4 hours); no customer-facing AI capabilities; primary competitive advantage is dedicated account teams with deep knowledge of each customer's distribution network and exception handling protocols; ten-year average account relationship. Customer survey (run last month): 80% of customers rate "relationship and exception handling" as their primary reason for staying; 40% rate "real-time visibility" as "important" or "very important," up from 15% two years ago. Fleet size: 420 trucks. Competitor fleet: 2,800 trucks. **Which strategic response recommendation is most defensible given the evidence?**

- A. Pivot: the regional provider cannot compete with a national operator on technology infrastructure. Invest instead in deepening the exception handling capability with AI, making the relationship advantage more defensible rather than trying to match the visibility feature.
- B. Hold: 80% of customers cite relationship as the primary reason for staying, which means the AI visibility gap is not a material threat. No technology investment is warranted.
- C. Accelerate: invest in a real-time visibility platform immediately, matching the competitor's capability within 12 months. The 40% customer importance rating and the competitor's API integrations signal that the window is closing.
- D. Hold: the competitor's platform is in production and customer-integrated. The regional provider's relationship advantage is validated by 80% of customers and is hard to replicate. Protect accounts through proactive communication. Invest in the visibility gap incrementally, not at emergency pace.

**D**

Rationale: Hold with incremental investment is the right posture for three reasons. First, the relationship advantage is validated and genuinely durable: 80% customer retention based on account knowledge and exception handling is hard for a national operator to replicate, even with AI. Second, the competitor has a 14-month production lead and fleet scale (2,800 vs. 420 trucks) that makes emergency catch-up both expensive and unlikely to close the gap. Third, the 40% "real-time visibility is important" signal is rising (from 15% two years ago) — this is a leading indicator that should inform incremental investment planning, not emergency response.


---


### Q.87. A regional specialty coffee roaster with 85 cafes learns that a national chain competitor has deployed an AI-powered loyalty and personalization platform.

The platform tracks purchase history across all channels, predicts the next likely purchase, and sends proactive offers before the customer decides to visit. The competitor has 14 months of live deployment. Three loyalty program integrations with large employers. The roaster's current competitive position: premium specialty coffee that national chains do not offer, a staff training program that produces barista expertise customers specifically mention in reviews, and an average customer relationship of 4.2 years. Customer survey: 72% cite "product quality and barista expertise" as primary value. 28% say they "wish the roaster had a better loyalty app." **Which strategic response is most defensible?**

- A. Pivot: compete exclusively on coffee quality and barista expertise. Do not invest in loyalty technology. It is not the source of the roaster's differentiation.
- B. Accelerate: the employer loyalty integrations are a switching-cost-generating move that will be difficult to displace once it reaches the roaster's customer base.
- C. Accelerate: the competitor's 14-month deployment and employer integrations represent a closing window. Invest immediately in a comparable loyalty platform to prevent customer switching.
- D. Hold with targeted investment: the 72% quality and expertise signal is the durable advantage. The 28% loyalty app gap is real but not a switching signal. Invest in a basic digital loyalty experience that closes the most visible gap without attempting to match the competitor's full platform.

**D**

Rationale: The 72% quality and expertise retention signal is validated, hard to replicate, and not threatened by the competitor's loyalty platform. The competitor's AI tells you what to order next, but it does not improve the product or the barista. The 28% "wish we had a better loyalty app" is a gap to close, not a crisis. Investing in a basic digital loyalty experience that closes the visibility gap is proportional to the signal. A full platform match is disproportionate to a 28% satisfaction gap that is not driving churn.


---


### Q.88. Which allocation of the $900K and which strategic response is most defensible?

Sofía Martínez has asked for a final recommendation before Monday's leadership meeting. She has three constraints: the $3M AI budget is 70% committed to the current portfolio (Vision QC, Demand Forecasting, Predictive Maintenance). The remaining 30% ($900K) is unallocated. She needs a response she can take to the two accounts with renewal questions, a recommendation for how to allocate the $900K, and a position she can defend to the PE board. Here is the full picture. - Competitor assessment: capability is partial across all four dimensions; customer integration at one account; no evidence of production-scale API; three-person data science team; response window open, not indefinitely. - Industry position: packaging sector in Stage 2 (Early Adoption); AnyCompany Packaging in line with the industry median on production AI; behind the sector median on customer-facing AI, but the sector median is also low (less than 10% of comparable companies have customer-facing capabilities); one competitor is ahead of the sector median, not the majority. - Competitive advantage profile: relationship depth, custom formulation, and plant proximity are hard to replicate and customer-validated; Vision QC proprietary data is an emerging AI advantage that needs investment to compound; customer survey: two of ten accounts have renewal questions about AI capabilities. **Which allocation of the $900K and which strategic response is most defensible?**

Choose 1.
 A. Pivot: allocate the full $900K to an AI-powered custom formulation and scheduling platform. Do not invest in customer-facing AI. Compete on formulation flexibility and proximity, not data transparency.
 B. Hold with no new investment: the competitor's capability is partial, the industry median is low, and the relationship advantage is intact. Preserve the $900K for the existing portfolio's operational needs.
 C. Accelerate: allocate the full $900K to building a customer-facing defect telemetry API, targeting the two accounts with renewal questions. The competitor's announcement changes the basis of competition, and AnyCompany Packaging must respond directly.
 D. Hold with targeted investment: allocate $600K to deepening the Vision QC data asset and building a limited customer-facing defect data capability for the top two accounts (pilot scope, not full platform). Allocate $300K to an AI-powered custom formulation scheduling tool that deepens the hardest-to-replicate advantage. Communicate proactively to all ten accounts.

**D**

Rationale: This is the most defensible allocation for three reasons. First, the $600K Vision QC data investment is the right move regardless of the competitor's announcement — the proprietary defect data asset is AnyCompany Packaging's most distinctive AI advantage, and it compounds with continued investment. Building a limited customer-facing pilot for the two accounts with renewal questions is a targeted response to a specific signal, not a reactive full-platform build. Second, the $300K custom formulation investment deepens the advantage that 70% of accounts already cite as their primary value. Third, the proactive account communication is the immediate action that holds the relationship while the technology roadmap is being built.


---


### Q.89. A regional food service distributor supplies 1,200 restaurants across four states with a mix of dry goods, produce, and refrigerated products. The executive team is reviewing two AI investment proposals with a $2M budget for one initiative. The board wants to understand which proposal represents an operational improvement and which represents a business model change, because the board's evaluation criteria are different for each.

Proposal A (Dynamic route optimization): AI reoptimizes delivery routes every 15 minutes based on real-time order updates, traffic, and driver availability. Expected result: 18% reduction in delivery miles, 12% reduction in fuel and vehicle costs, faster delivery for time-sensitive orders. The distributor continues to bill customers on the current model (per-case wholesale pricing plus delivery fees).
Proposal B (Autonomous replenishment with consumption-based billing): AI monitors real-time inventory levels at each restaurant using sensor data (weight-sensing shelves, refrigerator sensors) and automatically triggers replenishment orders. Restaurants pay for what they consume in a period, not what they order. The distributor takes responsibility for maintaining inventory levels within agreed ranges. Requires new legal agreements, new billing infrastructure, restaurant-side sensor deployment, and a new operating team to manage restaurant-side inventory across 1,200 sites.
Which proposal represents an operational improvement and which represents a business model change?

A. Proposal A is an operational improvement; Proposal B is a business model change. Proposal A optimizes an existing process (delivery) within the current business model. Proposal B changes what the distributor sells (from cases delivered to inventory levels maintained), how customers pay (from per-case orders to consumption-based billing), and what the distributor is responsible for (its warehouse plus restaurant-side inventory).

B. Proposal A is a business model change; Proposal B is an operational improvement. Proposal A changes how customers experience delivery. Proposal B is a more efficient version of the existing order-and-replenish process.

C. Both proposals are business model changes. Any AI investment at this scale ($2M) represents a change to how the distributor operates, and the board should evaluate both as strategic transformations.

D. Both proposals are operational improvements. Both use AI to make an existing process (delivery in A, replenishment in B) more efficient. Neither changes what the distributor sells.

**A**

This is the correct distinction. An operational improvement makes an existing process more efficient without changing the underlying business model, the customer value proposition, the revenue model, and the scope of responsibility remain the same. Proposal A does exactly this: it optimizes delivery routes but does not change what the distributor sells (cases), how it charges (per-case wholesale plus delivery), or what it is responsible for (its warehouse to the customer's dock). A business model change alters what the company sells, how it charges, or what it takes responsibility for. Proposal B does all three: it sells "maintained inventory levels" instead of "cases delivered," it charges based on consumption instead of orders, and it extends responsibility from the warehouse into the customer's own inventory. These are different investment decisions with different risks, different competencies required, and different measurement frameworks. Recognizing which is which is the core of this distinction.


---


### Q.90. Which investment posture is most appropriate given the industry maturity stage and the competitive evidence?

A regional business bank serving mid-market commercial clients ($10M–$500M in annual revenue) is reviewing its AI investment strategy. The CIO reports the following industry data: approximately 68% of comparable business banks now have AI in production across credit decisioning, fraud detection, and treasury management workflows. The leading 15% have moved to AI-driven client advisory platforms and AI-powered commercial loan structuring. The industry is characterized as Growth (Stage 3). The regional bank currently has AI in production for fraud detection and credit decisioning, matching the median adoption. It has no AI capability in treasury management workflows or client advisory. The bank's competitive position: 12-year average client relationship with mid-market commercial clients, relationship managers with deep sector expertise (manufacturing, healthcare, professional services), and a client survey showing 78% cite "relationship manager expertise and responsiveness" as the primary reason for banking there. However, a separate survey shows 42% of the bank's clients under age 55 are using competitor AI tools (from other banks) for financial insight, up from 18% four years ago.

Which investment posture is most appropriate given the industry maturity stage and the competitive evidence?

- A. Close to industry median by adding AI to treasury management workflows (currently unaddressed), and invest selectively in AI-assisted client advisory tools that support, not replace, the relationship manager. The bank is at median on two of four production areas; treasury management is now table-stakes at 68% industry adoption. Client advisory is not yet median but the 42% signal on under-55 client behavior warrants a proportionate advisory investment.

- B. Pivot from AI investment entirely. The 78% relationship manager signal shows that AI is not what clients value. Invest instead in expanding the relationship management team.

- C. Match the leading 15% posture across all four capabilities (fraud, credit, treasury, advisory). The 42% signal that clients under 55 are using competitor AI tools shows that failing to match leaders creates client attrition risk.

- D. Match industry median (fraud + credit decisioning only). The bank already meets the median; the 78% relationship manager signal is the durable advantage, and further AI investment is not warranted.


**A**

Two moves are warranted, and neither is aggressive relative to the industry stage. First: close the treasury management gap. This is a table-stakes capability at 68% industry adoption; not having it is a widening client experience gap. Investment here matches industry median in a Growth-stage industry, which is the disciplined posture. Second: invest selectively in AI-assisted client advisory tools that support the relationship manager, not replace them. The 42% under-55 client signal (using competitor AI tools) is a real trend, and it needs a response, but the response must protect the relationship manager advantage that 78% of clients value. AI-assisted tools that give the relationship manager better insight to share with clients strengthen the relationship rather than substituting for it. This is the "hold with targeted investment" posture calibrated to a Growth-stage industry with a durable relationship advantage.


---


### Q.91. A national consumer electronics retailer is comparing two AI investments to allocate its innovation budget. The Chief Strategy Officer wants to invest in the one that creates a more sustainable competitive advantage, and needs to articulate the reasoning to the board.

Investment 1 (AI-powered inventory forecasting using industry benchmark data): A vendor offers an AI forecasting service that pools anonymized inventory and sales data across 400+ retailers globally. The retailer's forecasting improves by 15%, matching the improvement other subscribers report. Cost: $180K/year.
Investment 2 (AI-powered customer product matching using the retailer's 12-year purchase history, service records, and product ownership data across 8 million loyalty members): The retailer builds a matching engine that recommends products based on each customer's actual product ownership timeline, service history, and household product mix. The data required is unique to the retailer, no competitor has the same 12-year loyalty history for the same customer base. Expected result: 24% increase in relevant recommendation clicks, 11% increase in repeat purchase rate, both improving further as the loyalty data set continues to grow.
Which investment creates a more sustainable competitive advantage, and what is the distinguishing factor?

- A. Both investments produce equivalent competitive advantages because both use AI to improve customer or operational outcomes.

- B. Investment 1 (inventory forecasting) because vendor-provided AI is faster to deploy and lower risk, which allows the retailer to concentrate innovation budget on other areas.

- C. Investment 1 (inventory forecasting) because the 15% improvement is a proven benchmark, while Investment 2's 24% is a projection.

- D. Investment 2 (customer product matching) because it applies AI to a resource, the retailer's 12-year loyalty history for 8 million customers, that competitors cannot replicate. The AI is the enabling technology; the sustainable advantage comes from the proprietary data resource underneath.

**D**

This is the correct comparison. Sustainable competitive advantage from AI comes from applying AI to proprietary resources, data, workflows, customer relationships, or physical assets that competitors cannot easily copy. Investment 2 uses the retailer's 12-year loyalty history, service records, and household product mix data for 8 million customers. This data is unique to the retailer and grows every quarter, which means the advantage widens over time. Even if a competitor acquires the same AI matching engine technology tomorrow, the competitor cannot generate the underlying data without 12 years of loyalty operations. Investment 1, by contrast, uses pooled industry benchmark data available to any subscribing retailer. It produces operational improvement but no differentiated position.


---


### Q.92. A regional airline operates 78 aircraft on short-haul routes between mid-sized cities.

The executive team is reviewing two AI initiatives and needs to identify which one is more likely to produce a sustainable competitive advantage versus an operational improvement.

Initiative 1 (AI-powered fuel-burn optimization): An AI model recommends optimal flight profiles (climb rate, cruise altitude, descent path) to minimize fuel burn based on aircraft weight, weather, and route. Expected result: 2.8% reduction in fuel cost per flight. The underlying technology is available from three commercial vendors and used by many airlines globally.
Initiative 2 (AI-powered network optimization using proprietary customer data): The airline has 11 years of customer booking data, cancellation patterns, and route preferences unique to its regional network. An AI system uses this proprietary data to optimize schedule design, which routes to fly, at which frequencies, at which times, in ways competitors cannot replicate without the same data history in the same regional market. Expected result: 4.5% revenue lift and 6% load factor improvement, both compounding as the data set grows over time.
Which initiative is more likely to produce a sustainable competitive advantage, and why?


- A. Initiative 2 (network optimization using proprietary data) because the 11-year proprietary regional data set is a resource competitors cannot replicate. Sustainable advantage comes from AI applications that use resources unique to the company, not from AI applications that are widely available from commercial vendors.

- B. Neither initiative produces a sustainable advantage because AI capabilities can be copied by competitors within 12-18 months of any deployment.

- C. Initiative 1 (fuel-burn optimization) because fuel is the largest single cost line and reducing it produces the largest financial impact.

- D. Both initiatives produce sustainable advantages because both improve financial performance over time.

**A**

Sustainable competitive advantage from AI comes from applying AI to resources that competitors cannot easily replicate. The 11-year proprietary regional booking data is exactly that, a data resource that a competitor cannot obtain without operating in the same market over the same time period. AI-powered network optimization built on this data produces routing and schedule decisions that competitors cannot copy, because they lack the underlying data. This creates a widening advantage over time as the data set continues to grow. Initiative 1, by contrast, uses a widely available capability with commodity fuel-burn optimization vendors. It produces value but not competitive differentiation. Every airline can capture the same 2.8% fuel savings by buying the same vendor product. Applying AI to proprietary resources (data, workflows, customer relationships, physical assets) is the pattern that produces sustainable advantage; applying AI to widely available capabilities is operational improvement.


---


### Q.93. A regional streaming service with 2.4M subscribers learns that a national competitor has deployed an AI-powered content recommendation and personalization engine.

The competitor's engine personalizes not just what content is shown, but thumbnail images, content descriptions, and notification timing for each subscriber. The competitor has 16 months of live deployment. Two major content studios have begun offering the competitor exclusive early-window releases based on the platform's demonstrated viewer engagement data. The regional service's competitive position: exclusive rights to regional sports and local news content that the national competitor cannot offer, an average subscriber relationship of 3.8 years, and a subscriber survey showing 74% cite "local and regional content" as their primary reason for subscribing. A recent survey also shows 38% of subscribers rate their recommendation experience as "poor or fair", up from 22% two years ago.

Which strategic response is most defensible?

- A. Hold with targeted investment: the 74% regional content retention signal is the durable advantage. The 38% recommendation dissatisfaction is a real gap but is not yet driving churn. Invest in a recommendation improvement that closes the most visible gap for subscribers, without attempting to match the national competitor's full personalization stack.

- B. Hold: the 74% regional content signal is strong enough that no technology investment in personalization is justified. The competitor's personalization advantage does not threaten local content access, which is the primary subscription driver.

- C. Pivot: the regional service cannot compete with a national operator's personalization technology. Invest instead in deepening the regional content library and local news coverage to make the content advantage more defensible.

- D. Accelerate: the 16-month deployment, studio exclusive relationships, and 38% dissatisfied recommendation experience together signal that the window for the regional service to retain subscribers is closing rapidly. Invest immediately in a comparable personalization engine.

**A**

Option A correctly reads the evidence. The 74% regional content retention signal is validated, hard to replicate, and not threatened by the competitor's personalization engine. A better recommendation algorithm does not give the national competitor access to regional sports rights or local news. The 38% poor or fair recommendation experience trending upward over two years is a real gap that needs to be closed, but it is a satisfaction gap, not a switching signal. A targeted recommendation improvement that addresses the most visible subscriber complaints is proportional to the evidence. Accelerating to match the full national personalization stack is disproportionate to a gap that has not yet driven churn. Holding with no investment ignores a trend that is worsening.


---


### Q.94. A regional specialty retail chain operating 88 stores in six states sells outdoor and technical apparel.

The CEO is reviewing an industry landscape report that shows the following: approximately 15% of comparable specialty retailers now use AI-powered demand forecasting or personalization, and the leading 5% are deploying AI-powered visual search, virtual try-on, and predictive customer service across their digital and in-store experiences. Industry analysts characterize outdoor and technical apparel retail as Emerging (Stage 2) in AI adoption. The chain's competitive position: 44% of revenue is from a proprietary product line designed in-house that has strong brand loyalty; store staff have deep product knowledge that customers value; and the chain's e-commerce platform is functional but limited. A recent survey of top customers shows they value "expert staff" (72%) and "quality of proprietary product line" (68%) as their top two reasons for shopping there. Digital experience ranks fourth in importance (34%). The CFO has proposed either matching the leading 5% investment posture (multiple AI capabilities across digital and in-store) or continuing to invest at industry pace.

Which investment posture is most appropriate for the described industry maturity stage?

- A. Match the leading 5% posture but only in the digital channel, since the chain's digital experience is the ranked-fourth weakness. In-store AI investment is not needed given the expert staff signal.

- B. Match the leading 5% posture. Emerging-stage industries reward early movers with disproportionate market share gains, and the chain should not risk falling behind.

- C. Invest at industry pace (match the median 15% adoption). The chain is not underinvested, and matching median AI investment preserves competitive parity while protecting capital for the proprietary product line, which is the primary differentiator.

- D. Hold, the 72% expert staff and 68% proprietary product signals show that AI is not what drives shopping decisions. No AI investment is warranted until customer preferences shift.

**C**

Investing at industry pace is the right posture for an Emerging (Stage 2) industry, and specifically appropriate to this chain's competitive profile. Emerging-stage industries reward disciplined followers over aggressive leaders. The 15% median adoption line is where proven capabilities have accumulated enough evidence to be worth investing in, without paying the premium of leading-edge R&D that has not yet demonstrated durable returns. Investing at industry pace also preserves capital for the two competitive strengths the customer survey validates: the proprietary product line (44% of revenue, strong brand loyalty) and expert staff (72% cite it). Both of these advantages compound with continued investment. AI investment matching the industry median keeps the chain from becoming a digital laggard without diverting capital from the actual sources of competitive strength.


---


### Q.95. A regional wealth management firm serving 1,800 high-net-worth clients learns that a national competitor has launched an "AI-powered portfolio intelligence platform."

The platform provides clients with real-time portfolio analysis, tax-loss harvesting recommendations, rebalancing alerts, and a conversational interface for financial questions. The competitor has 10 months of live deployment at 12% of its client base. Three fintech integrations with popular personal finance aggregation tools bring the platform's recommendations directly into clients' financial dashboards. The regional firm's competitive position: advisors with 8-year average client relationships, deep knowledge of each client's estate planning and business ownership context, and a client survey showing 81% cite "my advisor understands my full financial picture" as the primary reason for staying. A separate survey shows 29% of clients under 50 rate digital access and self-service tools as "very important", up from 11% five years ago.

Which strategic response is most defensible?

- A. Pivot: the regional firm cannot match a national operator's AI investment. Invest instead in expanding the estate planning and business ownership advisory capabilities that the competitor's AI platform cannot replicate.

- B. Hold with targeted investment: the 81% advisor relationship retention signal is the durable advantage and is not threatened by the competitor's platform. The 29% digital access signal among under-50 clients is a generational trend requiring a proportionate response, a client-facing digital portal that provides portfolio visibility and basic self-service without attempting to match the full AI platform.

- C. Accelerate: the fintech integrations and 29% digital access signal among under-50 clients indicate the window for the regional firm to retain the next generation of high-net-worth clients is closing. Invest immediately in a comparable AI client platform.

- D. Hold: the 81% advisor relationship signal is strong enough that no digital investment is warranted. The competitor's platform serves a different segment (clients who prefer self-service over advisor relationships) and does not threaten the regional firm's client base.

**B**

The 81% advisor relationship retention signal is validated, hard to replicate, and not threatened by the competitor's AI platform. A conversational interface does not replace an advisor who knows a client's estate structure, business ownership situation, and family dynamics. The 29% digital access signal among under-50 clients trending from 11% over five years is a generational shift that requires a proportionate response. The under-50 cohort is the next generation of the firm's client base. Ignoring their digital access expectations creates churn risk over a 10-year horizon, not a 12-month horizon. A client-facing digital portal that provides portfolio visibility and basic self-service closes the most visible gap without building infrastructure that competes with the advisor relationship. Full AI platform parity is disproportionate to the evidence and would be difficult to sustain on a regional firm's economics.


---


### Q.96. Which competitive assessment is most defensible?

A regional automotive parts retailer with 210 store locations across four states learns that a national competitor has deployed an AI-powered "vehicle profile assistant" for its e-commerce site. Customers enter their vehicle year, make, and model, and the assistant recommends compatible parts, cross-sells related components (for example, brake pads plus rotors plus fluid), and suggests preventive maintenance items based on typical service intervals. The competitor has launched the assistant in 12 of its 45 metro markets and reports early results: online basket size up 22% in launch markets and repeat purchase rate up 14%. The competitor operates on a modern e-commerce platform and has an in-house data science team of 8. The regional retailer's competitive position: 210 physical locations concentrated in mid-market cities where the national competitor has smaller footprint, an average customer relationship of 6.4 years, and a customer survey showing 68% cite "trusted local counter staff" as the primary reason for shopping there. Online sales are 14% of the retailer's total revenue.

Which competitive assessment is most defensible?

- A. Moderate, focused threat. The competitor's advantage is concentrated in the e-commerce channel, which is 14% of the retailer's revenue. The counter-staff advantage (68% cite it as primary reason) protects the larger in-store channel. The right response is targeted online capability improvement, not full parity with the competitor.

- B. Low threat. The retailer's counter-staff advantage and 6.4-year relationships insulate it from the competitor's AI capability, which only affects online transactions.

- C. Structural threat requiring pivot. The retailer cannot compete with the competitor's data science capability, so it should exit online sales and focus entirely on the physical store channel.

- D. High threat requiring emergency response. The competitor's 22% basket lift and 14% repeat rate demonstrate the AI advantage is real, and the retailer must match it within 12 months.

**A**

This is the correct competitive assessment because it reads the evidence at the right resolution. The competitor's advantage is genuine but channel-specific: online is 14% of the retailer's revenue, and that channel has real gaps the AI would help close. The retailer's 68% counter-staff signal is a durable advantage that AI-powered e-commerce does not threaten, customers who value trusted counter staff are not switching to a competitor's website because of a better cross-sell engine. The right response is a proportionate, targeted online capability improvement (vehicle profile compatibility, cross-sell recommendations for the e-commerce site) that closes the online gap without attempting to replicate the competitor's full data science operation. This is the "hold with targeted investment" posture applied to a channel-specific threat.


---


### Q.97. A specialty book publisher focused on academic and professional titles learns that a large competitor has deployed an AI-powered "reader recommendation and reading path" engine on its digital platform. Readers receive personalized recommendations, curated topical reading paths, and adaptive summaries of key chapters. The competitor has 24 months of live deployment across its full catalog of 45,000 titles. Three research libraries and two corporate learning platforms have integrated the competitor's platform as their default academic reading source. The specialty publisher's competitive position: a catalog of 8,200 titles concentrated in three specialized professional domains (law, medicine, engineering) where the competitor's coverage is broader but shallower; long-standing editorial relationships with domain experts who peer-review titles pre-publication; and 34 years of trust as the reference publisher in these three domains. Reader survey shows 71% of specialty publisher readers cite "editorial quality and domain expertise" as the primary reason for choosing its titles. However, a separate survey of readers under 40 shows 47% expect "AI-assisted reading tools" from any modern publishing platform, up from 19% four years ago.

Which competitive assessment is most defensible?

- A. Structural threat requiring platform parity. The competitor's 24-month lead and the 47% under-40 expectation signal that specialty publishing is being redefined around AI tools, and the specialty publisher must match the full platform capability.

- B. Focused threat on the reader-experience layer. The competitor's advantage is at the reading tool layer, not the editorial layer. The specialty publisher's editorial reputation remains durable, but the under-40 expectation signal requires proportionate investment in AI-assisted reading tools that complement, not replace, the editorial value.

- C. Threat to library integrations only. The competitor's advantage is real for institutional accounts (libraries, corporate learning platforms), but individual readers are not affected. The specialty publisher should focus on retaining its editorial reputation and let the library segment go.

- D. Zero threat. The 71% editorial-quality signal insulates the specialty publisher from AI-driven competition; readers who value editorial expertise will not switch platforms based on recommendation engines.

**B**

This is the correct assessment because it separates the two competitive layers cleanly. The editorial layer, peer-reviewed titles, 34-year reputation, domain expertise, is a durable advantage that AI cannot replicate. The reader-experience layer (recommendation engines, adaptive summaries, reading paths) is where the specialty publisher is behind. The 47% under-40 expectation signal is a generational trend that requires a proportionate response: AI-assisted reading tools that fit the specialty focus (law, medicine, engineering) and complement editorial quality. The response magnitude is targeted, not full parity: build the reader tools that match the specialty publisher's domain focus, not the full breadth of the national competitor's platform. This preserves the editorial advantage while closing the generational expectation gap.


---


### Q.98. A regional home builder constructs 340 homes per year in three metro areas. The executive team is evaluating two AI investments. The Chief Executive wants to categorize each investment correctly before presenting them to the private equity investors who own the company, because the investors treat business model changes as strategic initiatives requiring board approval, while operational improvements can be approved by the executive team alone.

Proposal 1 (AI construction sequencing): An AI system optimizes the sequence of trades on each construction site (framing, electrical, plumbing, drywall, finishing) based on weather forecasts, trade crew availability, and material delivery schedules. Expected result: 12% reduction in average build cycle time, 7% reduction in idle-time waste, more predictable delivery dates. The builder continues to sell homes at a fixed contract price; the customer relationship, product line, and revenue model are unchanged.
Proposal 2 (AI-driven customization-at-scale with dynamic pricing): The builder shifts to a "configurable home" model. Customers use an AI-powered design tool to customize floor plans, finishes, and features. The AI generates real-time pricing based on complexity, material availability, and current labor rates. The builder shifts from selling pre-designed home models to selling customized home builds at dynamic prices. Requires new legal contracts (customization scope, change orders, pricing model), new customer sales process, new operations model for handling per-home customization, and new relationships with material suppliers who can support faster-turn customization.
Which proposal requires board approval as a business model change, and why?

- A. Neither proposal requires board approval, the executive team can approve both because AI is a technology decision, not a business decision.

- B. Both proposals require board approval because AI investments at this scale represent strategic changes that private equity investors will want to review.

- C. Proposal 1 requires board approval because it directly affects construction operations, which are the primary business function of a home builder.

- D. Proposal 2 requires board approval because it changes the product (from pre-designed models to customized builds), the revenue model (from fixed contract price to dynamic pricing), and the operational model (from series production to per-home customization). Proposal 1 is an operational improvement within the existing business model.

**D**

This is the correct classification. Proposal 2 changes three structural elements of the business: the product (customized builds instead of pre-designed models), the revenue model (dynamic pricing instead of fixed contract), and the operational model (per-home customization instead of series production). Each of these changes has downstream effects, legal contract redesign, sales process redesign, material supply chain redesign, and per-home operations management. The AI is the enabling technology, but the business model change is what matters for governance. Proposal 1 uses AI to optimize an existing process (construction sequencing) without changing the business model. It is an operational improvement. Recognizing this distinction ensures that Proposal 2 gets the strategic review it needs and Proposal 1 does not get inappropriate governance overhead.


---


### Q.99. A product team argues that Responsible AI practices are primarily a compliance obligation — something imposed by legal and regulatory teams that adds overhead without improving the product itself.

They want to defer RAI activities until regulators require them. Which of the following best describes why this view is incomplete?

- A. RAI is primarily about avoiding lawsuits — the main value is legal protection, and product quality benefits are incidental side effects of compliance work.
- B. RAI practices create value across four dimensions: building better products through principles like fairness and robustness, enabling structured auditing to catch unintended harms before they reach users, providing governance to manage AI systems at organizational scale, and proactively mitigating reputational and legal risk.
- C. RAI is primarily about operational efficiency — it standardizes AI development processes so teams can ship faster with less coordination overhead.
- D. RAI is primarily about public relations — it provides language and frameworks to communicate trustworthiness to customers, which drives adoption regardless of whether the underlying systems are actually improved.

**B**

RAI practices create value across four dimensions: building better products through principles like fairness and robustness, enabling structured auditing to catch unintended harms before they reach users, providing governance to manage AI systems at organizational scale, and proactively mitigating reputational and legal risk.
Responsible AI delivers value across four distinct dimensions that go well beyond compliance. It improves product quality by embedding fairness, explainability, and robustness from the start. It provides audit and mitigation tools to detect biased, inaccurate, or unsafe outputs before they affect real people. It establishes governance structures, ownership, and repeatable processes for managing AI at organizational scale. And it proactively mitigates reputational damage and legal exposure, particularly for user-facing applications. Treating RAI as purely a compliance exercise misses three of these four value drivers.


---


### Q.100. Which responsible AI dimension focuses on ensuring that an AI system treats all user groups equitably?

- A. Fairness
- B. Transparency
- C. Robustness
- D. Privacy

**A**
Fairness is the responsible AI dimension that ensures AI systems provide equitable treatment and outcomes across different user groups, avoiding bias and discrimination.


---


### Q.101. What is the primary purpose of explainability in responsible AI systems?

- A. To make AI decisions understandable to users
- B. To protect user data from unauthorized access
- C. To ensure consistent performance across environments
- D. To prevent malicious attacks on the system

**A**
Explainability in responsible AI ensures that users can understand how and why an AI system makes specific decisions, enabling trust and accountability.


---


### Q.102. Which responsible AI dimension addresses protecting sensitive user information in machine learning models?

- A. Privacy
- B. Safety
- C. Explainability
- D. Fairness

**A**
Privacy is the responsible AI dimension that focuses on protecting sensitive user information, ensuring data confidentiality, and preventing unauthorized access to personal data in AI systems.


---


### Q.103. Your company launched an AI-powered loan approval system that consistently denies applications from applicants in certain zip codes. These zip codes correlate strongly with predominantly minority communities. The model was trained on 10 years of historical lending data, and no one reviewed the training data for demographic patterns before deployment. Which Responsible AI dimension is most at risk in this scenario?

- A. Transparency
- B. Fairness
- C. Safety
- D. Controllability

**B**
The AI system is producing disparate outcomes that correlate with race and ethnicity, driven by biased historical data that was never reviewed. Fairness requires that you evaluate training data and model outputs for discriminatory patterns and ensure the system does not systematically disadvantage any group.


---


### Q.104. Your healthcare organization deployed an AI triage system in its emergency department that prioritizes patients based on symptom severity.

After one week, nurses report that the system consistently assigns lower urgency scores to patients who describe symptoms in non-English languages (processed through a built-in translation layer). Two patients with serious cardiac symptoms were triaged as low-priority because the translation layer misinterpreted their symptom descriptions. Both patients experienced delayed treatment. What should the AI strategist recommend?

- A. Halt deployment
- B. Escalate to a governance body
- C. Implement additional oversight controls
- D. No action needed

**A**
This is correct because the system is actively causing life-threatening patient harm through misclassification of serious cardiac symptoms, and no amount of monitoring can acceptably mitigate the risk of death or permanent injury while the flawed system remains live.

---


### Q.105. A national insurance company uses an AI system to estimate home repair costs for property damage claims.

A claims manager notices that for hurricane damage claims in coastal regions, the system's repair estimates are consistently 15–20% lower than what licensed contractors actually quote. The system was trained primarily on inland property damage data. No claims have been finalized yet—all estimates are reviewed by a human adjuster before a payout is issued, but adjusters report feeling pressure to stay close to the AI's figures. What should the AI strategist recommend?


- A. Halt deployment
- B. Escalate to a governance body
- C. Implement additional oversight controls
- D. No action is needed

**C**
This is correct because the system has a known accuracy gap for coastal hurricane claims but existing human review has prevented customer harm, so the appropriate response is to strengthen controls by flagging affected claims for independent contractor verification, adding training-data disclaimers, and explicitly empowering adjusters to override the AI.

---

### Q.106. A healthcare organization has deployed an AI model that recommends treatment pathways for patients.

Three months after launch, the clinical AI team is reviewing whether the model's recommendations have shifted from its validated baseline, tracking output quality across different patient demographics, and verifying that the model is only being used for the patient population and clinical conditions it was originally trained to support. Which stage of the AI project lifecycle does this represent?

- A. Design
- B. Build
- C. Operate
- D. Not a stage of the AI project lifecycle

**C**
The Operate stage is where you deploy and monitor the AI system in production. This includes checking for model drift, ensuring outputs remain aligned with responsible AI standards over time, and confirming the model is used within its intended context — for example, a model trained on adult patients should not be applied to pediatric populations without revalidation.


---


### Q.107. An online streaming platform uses an AI recommendation engine to suggest movies and TV shows to subscribers based on their viewing history and preferences. The system updates recommendations on each user's homepage every time they log in. Does this AI solution require human oversight?

- A. Yes, human oversight is required.
- B. No, human oversight is not required.
- C. Maybe, human oversight depends on the type of viewing history and preferences are needed.
- D. More information required to determine if human oversight is required.

**B**
This is a low-stakes scenario where the AI system's output—a movie or show suggestion—does not directly impact an individual's rights or safety. The consequences of an incorrect recommendation are minimal. Standard automated monitoring for content quality, recommendation diversity, and potential bias is sufficient. Human oversight of individual outputs is not required for this use case.
---


### Q.108. A hospital is deploying an AI system that analyzes radiology images and generates preliminary diagnoses for patients. The system flags potential tumors and recommends whether a biopsy is needed. The hospital plans to send the AI-generated recommendations directly to patients through their online health portal without a radiologist reviewing the results first. Does this AI solution require human oversight?

- A. Yes, human oversight is required.
- B. No, human oversight is not required.
- C. Maybe, human oversight depends on the type of medical diagnoses.
- D. More information required to determine if human oversight is required.

**A**
This is a high-stakes healthcare scenario where the AI system's output directly impacts patient safety and medical decisions. A misidentified tumor—whether a false positive or a false negative—can lead to unnecessary invasive procedures or delayed treatment for a life-threatening condition. A qualified radiologist must review and validate the AI-generated diagnosis before it reaches the patient. AI should assist clinical decision-making, not replace it.


---


### Q.109. A government agency uses an AI chatbot to help citizens complete benefit applications.

The system is configured to automatically block any response that includes language recommending a citizen waive their legal rights, that contains personally identifiable information of other applicants, or that provides guidance outside the scope of the benefits program. Blocked responses are replaced with a standard message directing the citizen to a human caseworker. Which type of safeguard is being used in this scenario?

- A. Confidence thresholds
- B. Hallucination detection
- C. Guardrails
- D. Escalation criteria

**C**
Guardrails are automated filters that block harmful, biased, or policy-violating outputs before they are delivered to the end user. In this scenario, the system automatically blocks responses that could cause harm—such as advising citizens to waive legal rights, exposing other applicants' personal data, or providing out-of-scope guidance—and replaces them with a safe default response.


### Q.110. A financial services company uses an AI system to generate investment summaries for clients.

Before any summary is delivered, the system cross-references its generated output against three independent market data sources. If the AI-generated summary contains claims that cannot be verified by at least two of the three sources, the summary is held back and flagged for analyst review. Which type of safeguard is being used in this scenario?

- A. Confidence thresholds
- B. Hallucination detection
- C. Guardrails
- D. Audit trails

**B**
Hallucination detection uses multi-source verification or consistency checks to identify when an AI system generates outputs that are fabricated or unsupported by source data. In this scenario, the system cross-references its output against three independent market data sources—a classic multi-source verification approach—and flags outputs that cannot be corroborated.

---


### Q.111. Your team has deployed a credit scoring model to production.

After three months, you notice approval rates have shifted significantly, and you suspect the input data distribution has drifted from what the model was trained on. You need to detect and alert on these changes automatically. Which AWS service should you use?


- A. Amazon SageMaker Clarify
- B. Amazon SageMaker Model Monitor
- C. Amazon Bedrock Guardrails
- D. AWS CloudTrail

**B**
Model Monitor continuously tracks data quality, drift, and model performance in real time against baselines you define.


---


### Q.112. As an AI strategist at Meridian Financial Services, you are responsible for ensuring the company's customer-facing AI systems deliver accurate, compliant, and trustworthy information about its lending products. 

Your company, Meridian Financial Services, offers two personal loan products:

Standard Loan: 7.9% APR, up to $25,000, 3–5 year terms
Preferred Loan: 5.4% APR, up to $50,000, 3–7 year terms, requires credit score of 720+

A customer asked your AI chatbot: "What's the interest rate on your Preferred Loan?" 

The chatbot response, "Our Preferred Loan offers a competitive 4.9% APR for amounts up to $50,000 with flexible terms of 3–7 years. A credit score of 720 or higher is required to qualify."

Which element of the chatbot's response is a hallucinations?

- A. $50,000 maximum
- B. 4.9% APR
- C. 3–7 year terms
- D. 720 credit score

**B**
The verified rate is 5.4% APR. The AI generated a lower, more attractive rate that sounds plausible but is factually wrong. Delivering incorrect pricing to a customer creates legal and trust risks.


---


### Q.113. As an AI strategist at this insurance company, your team will use an AI system to process claims and recommend payout amounts.

You want to ensure that complex or sensitive decisions never bypass professional oversight. 

You need the claims processing system to have built-in checks that automatically route high-value, minor-filed, or disputed claims to senior adjusters for human review—ensuring that complex or sensitive decisions never bypass professional oversight. 


The system will be configured so that any claim involving a payout recommendation above $50,000, any claim filed by a policyholder under the age of 18, or any claim categorized under a disputed policy type will be automatically routed to a senior claims adjuster for manual review before a decision is issued.

Which type of safeguard does the AI strategist need to recommend in this scenario?

- A. Confidence thresholds
- B. Hallucination detection
- C. Guardrails
- D. Escalation criteria

**D**
That is correct. Escalation criteria are predefined rules that determine when an AI output must be flagged for human review. In this scenario, the system uses three clear, predefined rules—payout amount above $50,000, policyholder under 18, or disputed policy type—to automatically route claims to a senior adjuster. These are textbook escalation criteria that ensure high-risk or sensitive cases receive human oversight before a final decision is made.
