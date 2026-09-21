- AWS AI Business Strategist

### Q.1. The CDO's deadline is Friday. A vendor proposal lands in your inbox the same week and contains the following sentence: "Our system runs inference in real time on each new transaction to produce a fraud score." Which two AI concepts does the vendor's sentence reference, and how would you translate them for the CDO?

- A. Inference and prediction: the model making a decision on new data, and the fraud score it produces
- B. Algorithm and model: the underlying recipe and the trained system
- C. Training and algorithm: the process that produced the model and the recipe behind it
- D. Model and training: the trained system and the process that built it

**Inference and prediction: the model making a decision on new data, and the fraud score it produces** 
Inference is the model making a decision on new data, and the fraud score is the prediction it produces. Recognizing the pair lets you translate the line for a non-technical audience: "The system applies what it has already learned to score every new transaction as it happens."


---


### Q.2. The CDO needs the rest of the list classified before the briefing goes to the board. Two example systems will set the pattern. - System X: Auto-assigns returns to a destination using a fixed table of return reason → warehouse. - System Y: Predicts which products a customer is most likely to buy next, based on three years of purchase history. The CDO asks you to classify both before the rest of the list goes through. Which classification of System X and System Y is most accurate, and what does it imply about how to brief the board?

- A. System X is machine learning; System Y is generative AI
- B. System X is rules-based automation; System Y is machine learning
- C. System X is generative AI; System Y is rules-based automation
- D. Both System X and System Y are generative AI
 
**System X is rules-based automation; System Y is machine learning**
A fixed lookup table is rules someone wrote, which is automation, not AI. A model that learns patterns from historical data is machine learning. Neither system generates new content, so generative AI does not apply. Calling System X "AI" in the briefing would lump automation in with the company's actual ML work and inflate the picture for the board.


---
 
 
### Q.3. The Director of Merchandising wants to use AI to summarize the themes in 50,000 customer support call recordings from the past year. The data team forwards the question to you before they scope the work. Which data type description fits the input, and what does it imply for the work?

- A. Structured data; the AI can read the recordings directly from existing dashboards
- B. Unstructured data; extracting themes will require processing the audio or the transcripts before the AI can act on it
- C. Semi-structured data; the AI can use the existing fields without any further processing
- D. Structured data; recordings convert automatically to rows and columns at intake
 
**Unstructured data; extracting themes will require processing the audio or the transcripts before the AI can act on it**
Audio recordings have no fixed schema, which makes them unstructured. Extracting value from unstructured data requires processing. In this case, transcription and analysis of the language inside the calls. That processing is the budget and time investment to plan for before scoping the AI work itself.


---


### Q.4. The Director of Merchandising flagged three known defects (missing category labels, duplicate customer records, inconsistent currency/date formats). A consultant brought in to review the training data for AnyCompany Retail's customer-service AI pilot surfaces a fourth, less visible problem: the dataset over-represents complaints from one region and under-represents complaints from three others. Which AI consequence is most likely from the consultant's finding, and how should you describe the risk to the CDO?

- A. The model will be confident about the over-represented region and unreliable on the others
- B. The model will run more slowly on the under-represented regions during inference
- C. The model will refuse to make predictions for the under-represented regions on its own
- D. The model will automatically detect and correct the imbalance at inference time
 
**The model will be confident about the over-represented region and unreliable on the others**
The model will be confident about the over-represented region and unreliable on the others
Biased samples produce confident predictions where the model has seen many examples and unreliable predictions where it has not. The risk is silent: the model still produces an answer, but the answer is wrong for the under-represented segments. The right framing for the CDO is that the over-represented region's accuracy will mask the failure on the others until a customer or a regulator notices.


---


### Q.5. The same vendor proposes training a customer service routing model on the past four years of support tickets. The previous two years used a ticket platform that AnyCompany Retail retired last quarter and is no longer collecting new tickets in. The CDO asks you for the recommendation before the vendor's proposal goes to procurement. Which response best applies the principles of appropriate training data, and what would you tell the vendor?

- A. Use all four years of support ticket data; more training data always improves model accuracy
- B. Use only the oldest two years of data; older data is more stable and better understood at this point
- C. Reject the proposal entirely; any change in source systems makes the training data unusable
- D. Use only the most recent two years; older data depends on a feature the company no longer collects

**Use only the most recent two years; older data depends on a feature the company no longer collects** 
Use only the most recent two years; older data depends on a feature the company no longer collects
Training data should reflect inputs the model will see in production. Tickets from a retired platform will not be available at inference time, so a model trained on them depends on a feature the company cannot supply going forward. Tell the vendor to scope the model to the two recent years on the new platform and to flag the recency caveat in the design.


---


### Q.6. The vendor's proposal includes this language: "Our AI platform aligns with ISO/IEC 42001 and uses terminology consistent with ISO/IEC 23053." The CEO is on a call with the vendor next week and asks the CDO to surface what the citation actually means before the call. Which conclusion about the vendor's claim is most accurate, and what should the CEO ask on the call?

- A. The vendor has been independently certified by an external auditor to the published standard
- B. The vendor has self-declared alignment; the buyer should ask what specifically is aligned and whether an independent audit has happened
- C. The vendor's AI platform is guaranteed to be safe, bias-free, and ready for any use case
- D. The vendor is using marketing jargon and the citation can be ignored as vendor noise
 
**The vendor has self-declared alignment; the buyer should ask what specifically is aligned and whether an independent audit has happened**
The vendor has self-declared alignment; the buyer should ask what specifically is aligned and whether an independent audit has happened
Alignment means a self-declared mapping of internal practices to the standard. It is a meaningful signal that warrants follow-up questions about specifics, evidence, and whether an independent audit has happened. The CEO's strongest questions test the claim without assuming either the best or the worst: which 42001 clauses are you implementing, are you self-aligned or independently certified, when was your last internal review, and where in your documentation can our team see the mapping?


---


### Q.7. A European partner asks AnyCompany Retail to describe its AI systems using terminology both organizations and their regulators can interpret consistently. Which framework addresses that request, and what does it provide?

- A. ISO/IEC 42001, which provides a shared vocabulary for describing AI systems
- B. ISO/IEC 42001, which certifies that an organization governs its AI responsibly
- C. ISO/IEC 23053, which certifies that an organization governs its AI responsibly
- D. ISO/IEC 23053, which provides a shared vocabulary for describing AI systems

**ISO/IEC 23053, which provides a shared vocabulary for describing AI systems**
ISO/IEC 23053 is a framework for describing AI systems, and its contribution is a shared vocabulary that lets other organizations and regulators interpret a description consistently. A partner asking for consistent terminology is asking for exactly that reference point, which is what makes cross-border procurement conversations workable.


---


### Q.8. A vendor proposes training a churn prediction model on a customer dataset in which each record includes a field marking whether the customer submitted a cancellation request. The model reports near-perfect accuracy in testing. What should the digital strategy team recommend?

- A. Approve the model, and ask the vendor to retest it on a larger sample of customers
- B. Exclude the cancellation field, because customer requests are too sensitive to model
- C. Exclude the cancellation field, because it will not be available before a customer leaves
- D. Approve the model, because near-perfect test accuracy demonstrates the approach works

**Exclude the cancellation field, because it will not be available before a customer leaves**
Data that correlates with the outcome but is not available at prediction time has to be excluded. The model appears accurate because it notices that the customer already canceled, which is information the business does not have when it needs the prediction. Tell the vendor to retrain without the field and to report accuracy again, because the honest number will be lower and far more useful.


---


### Q.9. AnyCompany Retail's European and United States point-of-sale systems were never reconciled after an integration, so the two record transaction values in different currencies and dates in different formats. What is the most likely effect on a model trained on the combined data?

- A. The model will convert the currencies and dates during training to a single standard
- B. The model will flag the inconsistency so the data team can correct the records
- C. The model will produce accurate results for the larger region and no results for the smaller
- D. The model will treat identical values as different values, fragmenting its view of reality

**The model will treat identical values as different values, fragmenting its view of reality**
Inconsistent formatting causes the system to treat the same value as multiple different values, and its view of reality fragments. A model that reads euros and dollars as the same unit misreads every European transaction by the difference between the currencies. Naming the defect precisely matters, because the fix is upstream reconciliation rather than a better model.


---


### Q.10. A vendor describes a "smart AI engine" for assigning loyalty tiers. Under questioning, the vendor confirms that a customer who spends more than a set amount in twelve months always receives Gold status, and that the thresholds are set by the vendor's staff. What should the digital strategy team conclude?

- A. The system is generative AI, because it produces a tier assignment for each customer
- B. The system is machine learning, because tier assignment varies from customer to customer
- C. The system is rules-based automation, because fixed thresholds set by staff are written rules
- D. The system is machine learning, because it processes twelve months of spending history

**The system is rules-based automation, because fixed thresholds set by staff are written rules**
The system is rules-based automation, because fixed thresholds set by staff are written rules
Two of the three diagnostic questions settle this. The system follows thresholds people wrote rather than patterns learned from data, and the same input always produces the same output. That makes it automation rather than AI. The practical consequence is that the team should not pay AI prices for a rules engine in different packaging.


---


### Q.11. A vendor proposes training a demand forecasting model on five years of AnyCompany Retail sales history. Two of those years cover a period when store closures pushed nearly all sales online, and shopping patterns have since returned to a mix of store and online purchases. Which recommendation best applies the principles of appropriate training data?

- A. Use only the two unusual years, because they contain the highest online sales volume
- B. Limit the training window to the period that reflects current patterns, and document why
- C. Use all five years, because a longer history always produces a more reliable forecast
- D. Use all five years, and let the model determine which periods remain relevant


**Limit the training window to the period that reflects current patterns, and document why**
Recency and relevance both apply here. Data from a period when the business operated very differently is not predictive of current behavior, so a model trained on it forecasts a world that no longer exists. Scoping the window to the period that matches today's mix, and documenting the choice, gives the forecast a defensible basis and tells the vendor which years are in scope.


---


### Q.12. A merchandising analyst reads a status report from the engineering team that includes the sentence, "The system was shown two years of returns data until it could identify which items were likely to be sent back." Which core AI concept does the sentence describe?

- A. Prediction, because the sentence describes items identified as likely returns
- B. Algorithm, because the sentence describes the processing steps engineers wrote
- C. Training, because the system learned the pattern from historical examples
- D. Inference, because the system is producing an answer about which items qualify

**Training, because the system learned the pattern from historical examples**
Training is the process of feeding a system historical examples where the answer is already known until it learns the pattern. The phrase "was shown two years of returns data until it could identify" describes that process. Recognizing training in a status report lets a strategist ask the next useful question: how recent is the data the system learned from?


---


### Q.13. A slide sent to the board lists two initiatives under one "AI" heading: a tool that writes personalized product descriptions, and a scorer that rates each support ticket for urgency. Which classification of the two initiatives is most accurate?

- A. Both are generative AI, because both produce an output from customer data
- B. The description tool is generative AI; the urgency scorer is machine learning
- C. The description tool is machine learning; the urgency scorer is generative AI
- D. Both are rules-based automation, because both follow instructions engineers wrote

**The description tool is generative AI; the urgency scorer is machine learning**
The second diagnostic question asks what the system is doing. A tool that produces new text is generative AI, and a system that sorts items into categories or produces a number is classical machine learning. Both belong under the AI umbrella, but labeling them identically on a board slide invites the board to expect generative capabilities from a scoring model.


---


### Q.14. After a loyalty system migration, some AnyCompany Retail customers appear in the customer database two or three times with slightly different contact information. The data team asks the digital strategy team what this means for a planned recommendation model. Which consequence is most likely?

- A. The model will exclude the repeated customers because their records conflict
- B. The model will merge the repeated records automatically during training
- C. The model will weight the repeated customers more heavily than it should
- D. The model will run more slowly because it processes the additional records

**The model will weight the repeated customers more heavily than it should**
Duplicate records cause some examples to carry more weight than they should. A customer appearing three times acts like three customers, so the model treats that behavior as triple-weighted evidence and its learned patterns skew toward the over-counted ones. The right framing for leadership is that the defect distorts what the model learns rather than announcing itself as an error.


---


### Q.15. A dashboard built for the digital strategy team displays the line, "Customer 4412 has an 82 percent likelihood of lapsing this quarter." Which core AI concept does that line represent?

- A. The prediction, because it is the output the trained system produced
- B. The algorithm, because a percentage is the result of a calculation
- C. The model, because the trained system is what appears on the dashboard
- D. The training data, because customer records are what the system learned from

**The prediction, because it is the output the trained system produced**
A prediction is the actual output a model produces: the recommendation, the score, or the answer. An 82 percent likelihood is a score, which makes it a prediction. Separating the prediction from the system that made it helps a strategist ask how the score should be acted on and how often it is wrong.


---


### Q.16. The catalog team proposes an AI project that would draw on AnyCompany Retail's product catalog entries. Each entry carries fixed attributes such as SKU, price, and color, along with a free-text narrative description that varies in length and style. How should the data be classified, and what does the classification imply?

- A. Semi-structured data, because fixed attributes sit alongside free-text content
- B. Unstructured data, because the narrative descriptions have no fixed schema
- C. Structured data, because catalog entries are stored in a single business system
- D. Structured data, because every entry contains the same fixed attribute fields

**Semi-structured data, because fixed attributes sit alongside free-text content**
Semi-structured data has some structure but not a fixed schema across all records, and product catalog entries with structured attributes plus narrative descriptions are the module's example of it. The classification matters because the free-text half will need processing before AI can use it, while the attribute half is ready to work with.


---


### Q.17. You sit down with the prompts the VP Marketing forwarded. The marketing manager wrote this one: "Write something good about our new winter coat for the website." The output is generic and off-brand. The team is asking you which revision actually fixes it. Which revision applies the most prompt engineering principles correctly, and what would you tell the team?

- A. "Write something better about our new winter coat for the website" (the same prompt with one different adjective)
- B. "Write a 100-word product description for the AnyCompany Retail AnyProduct-1 winter coat for women's cold-weather travel. Brand voice: approachable, modern, trend-aware. Format: 2 sentences of feature, 1 sentence of feel, 1 sentence of value."
- C. "Write product descriptions for all of our winter coats. Make sure they are short, persuasive, brand-appropriate, accurate, scannable, accessible, professional, and friendly across the catalog."
- D. "Try again with the winter coat description and improve it for our website" (the same prompt rephrased)

**"Write a 100-word product description for the AnyCompany Retail AnyProduct-1 winter coat for women's cold-weather travel. Brand voice: approachable, modern, trend-aware. Format: 2 sentences of feature, 1 sentence of feel, 1 sentence of value."**
The revision applies all four principles. Clarity (one task, named product). Specificity (length, audience). Context (brand voice). Structured output (sentence-by-sentence format). The tool now has what it needs to produce on-brand output.


---


### Q.18. The team is using the tool to write personalized emails. Each prompt includes the customer's full 18-month purchase history. The marketing writers report that the AI sometimes "forgets" the most recent purchases and references items from over a year ago. The VP Marketing wants an explanation by Friday, before deciding on the vendor's larger-context-window upgrade. What is the most likely explanation, and what does it tell you about whether the upgrade is the right fix?

- A. The history exceeds the context window, and recent items get pushed out as more is added
- B. The model is malfunctioning and needs to be retrained on the latest production data
- C. The history exceeds the context window, and only the earliest information remains in view
- D. The AI is hallucinating randomly; this behavior is unrelated to prompt size or input length

**The history exceeds the context window, and recent items get pushed out as more is added**
When inputs exceed the context window, the earliest information falls out of view. The model writes from whatever survives. The cheaper fix is to send a summary of older purchases plus full detail on recent ones, not a larger window. Test that fix before approving the upgrade. Buying the upgrade locks in three times the per-prompt cost without confirming the existing window was being used well.


---

### Q.19. The vendor's two proposals land on your desk. Customer service wants a chatbot that answers questions about AnyCompany Retail's specific products, return policies, and store hours. The information changes weekly. The Director of CX wants your input before the kickoff meeting Monday. Which adaptation technique is the best fit for the customer service chatbot, and why?

- A. Fine-tuning, because the chatbot needs to learn the company's customer service style and tone
- B. Fine-tuning, because customer service answers require consistent vocabulary across the team
- C. RAG, because the answers need to be grounded in company-specific information that changes weekly
- D. Neither, because the off-the-shelf tool can produce the answers if the prompts are written well

**RAG, because the answers need to be grounded in company-specific information that changes weekly**
RAG fits when answers need to be grounded in company-specific information that changes regularly. The library is updated as policies and products change; the model stays the same. Fine-tuning would have to be retrained for every weekly update, which is expensive and slow. A useful question for the vendor: "How often does the retrieval library need to be updated, and who owns that update process?" That exposes operational reality before the contract is signed.


---

### Q.20.A team wants an assistant that answers customer questions from the current returns policy and does so in the company's established brand voice. Which approach addresses both needs?

- A. Fine-tuning alone, because a retrained model absorbs both the voice and the policy
- B. Fine-tuning combined with retrieval-augmented generation, because the gaps differ
- C. Neither technique, because grounding and voice requirements conflict with each other
- D. Retrieval-augmented generation alone, because the policy library governs both needs

**Fine-tuning combined with retrieval-augmented generation, because the gaps differ**
The two techniques are not exclusive, and a common production pattern pairs a fine-tuned voice model with a retrieval-connected reference library so the system writes on brand and answers from current information. Two distinct gaps, information and voice, call for the technique that closes each.

---


### Q.21. A pilot prompt template pastes a customer's complete two-year support history into every request. For the most active customers, the tool writes summaries that leave out part of the history while reading as though nothing were missing. Which explanation fits the pattern?

- A. The tool has been trained on outdated support records and needs to be retrained
- B. The tool ranks each contact record by importance and reports only the significant ones
- C. The model is producing random errors that have no relationship to the prompt length
- D. The prompt sends more than the window holds, so some history never arrives

**The prompt sends more than the window holds, so some history never arrives**
The context window is the limit on how much the model can hold at once, covering both the prompt and the response. When a prompt sends more than the window holds, part of what was sent does not reach the model, and the output still reads as complete. Which part gets left out depends on the tool, so the reliable move is to send less per prompt and spot-check the output against what was actually sent.

---


### Q.22. A writer needs copy that matches a structure and rhythm the brand has used successfully before, and describing the voice in adjectives has produced inconsistent results. Two prompts are under consideration. Prompt 1: "Write a product description for the hiking jacket in our usual brand voice, which is warm and confident." Prompt 2: "Here are two descriptions that match our brand voice: [example 1] [example 2]. Write one for the hiking jacket in the same voice." Which prompt is stronger, and why?

- A. Prompt 1, because naming the voice attributes directly states the requirement
- B. Prompt 2, because a longer prompt gives the tool more total instruction
- C. Prompt 1, because a shorter prompt leaves the tool more room to write
- D. Prompt 2, because concrete examples convey structure that adjectives cannot

**Prompt 2, because concrete examples convey structure that adjectives cannot**
Prompt 2 supplies examples so the tool can match the pattern, which is the right move when a task has a style or structure the tool needs to learn from the team's own work. Adjectives such as "warm and confident" mean different things to different readers, and the examples carry rhythm and sentence shape that no adjective conveys. The outcome is copy closer to brand on the first pass and less rewriting.


---


### Q.23. A vendor offers a model tier with a context window four times larger than the current one at three times the per-prompt cost, presenting it as the fix for inconsistent output. The team's prompts currently send each customer's full purchase history. What should the product manager verify before deciding?

- A. Whether the larger window is available at a discount for a longer contract term
- B. Whether a competing vendor offers a comparable window at a lower price point
- C. Whether the current prompts can be trimmed so the existing window is sufficient
- D. Whether the larger window also improves the accuracy of the model's writing

**Whether the current prompts can be trimmed so the existing window is sufficient**
Most context-window problems can be solved upstream of the model by sending less per prompt, such as summarizing older history and sending recent items in full. Testing the cheaper fix first establishes whether the existing window was being used well, which is the question the upgrade decision actually rests on. Published research on long inputs found that models with much larger windows were no better at using the information inside them, so the upgrade may not deliver what the pitch promises.


---


### Q.24. Two writers submit prompts for the same email campaign task. Prompt 1: "Write five subject lines for the spring sale email that will get a high open rate from our best customers." Prompt 2: "Write five subject lines for the spring sale email to loyalty members. Each under 45 characters. Mention the discount. Avoid exclamation points." Which prompt is stronger, and why?

- A. Prompt 2, because it sets concrete constraints the tool is able to honor
- B. Prompt 2, because requesting five variations gives the writer more options
- C. Prompt 1, because describing customers as the best ones signals a premium tone
- D. Prompt 1, because naming the open-rate goal focuses the tool on business results

**Prompt 2, because it sets concrete constraints the tool is able to honor**
Prompt 2 replaces an outcome the tool cannot observe with limits it can actually apply: a character count, a required element, and a punctuation rule. Specificity narrows the range of possible outputs, so the writer gets five usable lines instead of five generic ones. The business payoff is subject lines that fit the send template without manual trimming.


---


### Q.25. A vendor proposes fine-tuning a model on AnyCompany Retail's archive of past marketing copy so that output matches the brand voice by default. Which consideration should the product manager raise before the proposal advances?

- A. Fine-tuning requires the brand voice to change frequently to justify the investment
- B. Fine-tuning cannot influence writing style, so the proposal addresses the wrong problem
- C. Fine-tuning retrains the model on proprietary content, which raises data-governance questions
- D. Fine-tuning eliminates the need for prompt engineering across the marketing team

**Fine-tuning retrains the model on proprietary content, which raises data-governance questions**
Because fine-tuning retrains a model on proprietary company content, it carries data-governance and security implications that the security organization needs to weigh. Raising it as a data-handling decision rather than only a quality upgrade puts that review before the vendor commitment instead of after it.


---


### Q.26. A writer is deciding between two prompts for the same product page. Prompt 1: "Write a description for the wool throw blanket, then write five subject lines for the campaign email, and suggest a headline for the landing page." Prompt 2: "Write a description for the wool throw blanket for the home goods page. Audience: shoppers furnishing a first apartment. Format: three sentences." Which prompt is stronger, and why?

- A. Prompt 1, because the tool can keep the campaign consistent across all three pieces
- B. Prompt 1, because handling three related deliverables at once saves the writer time
- C. Prompt 2, because a single task with context and format produces reliable output
- D. Prompt 2, because a three-sentence limit is the strictest constraint available

**Prompt 2, because a single task with context and format produces reliable output**
Clarity means one task per prompt, and Prompt 2 pairs that single task with an audience and an output shape. Prompt 1 carries three tasks, so the tool splits its attention and tends to serve one well and the others poorly. Writing three focused prompts takes marginally longer and produces output the team can actually ship.


---


### Q.27. A marketing writer submits this prompt to the pilot tool: "Write a nice description of our new travel duffel bag." The output is bland and reads like generic retail copy. Which revision applies the prompt engineering principles most completely?

- A. "Write a 90-word travel duffel description for business travelers. Voice: approachable. Format: two feature sentences, then one value sentence."
- B. "Write a description of our new travel duffel bag, and make sure it performs well against competitor product pages."
- C. "Write a description of the travel duffel that is short, persuasive, on-brand, accurate, friendly, scannable, and professional."
- D. "Write a nice, polished, appealing description of our new travel duffel bag for the website."

**"Write a 90-word travel duffel description for business travelers. Voice: approachable. Format: two feature sentences, then one value sentence."**
The revision applies all four principles at once: clarity in a single named task, specificity in the word count and audience, context in the stated voice, and structured output in the sentence-by-sentence shape. The business outcome is copy the writer can ship with light editing, which is the difference between the pilot saving time and merely relocating it.


---


### Q.28. Two prompts in the pilot contain nearly the same number of characters, but one consistently costs more to run. That prompt is dense with product SKUs, customer identifiers, and brand names. Which explanation accounts for the cost difference?

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


### Q.30. A second vendor pitches an "AI-powered invoice processing system" the same week the customer service vendor is pitching its agent platform. The current invoice system matches invoices to purchase orders by following a fixed set of rules. The vast majority of invoices match cleanly. Most exceptions follow predictable patterns. The Director of Operations asks whether this is a good AI use case before the proposal goes any further. Based on the four task characteristics, which evaluation is strongest, and what would you tell the Director of Operations?

- A. Yes; AI will improve accuracy on this task because it learns patterns from historical invoice data
- B. Yes; AI is the modern best practice and the existing rule-based system is outdated by today's standards
- C. No; predictability is high, data is structured, and decision variability is low, so rules fit this task
- D. No; AI cannot reliably process invoices because the input format varies too much across vendors

**No; predictability is high, data is structured, and decision variability is low, so rules fit this task**
All four characteristics point to rules as the right fit. Predictability is high. Data is structured. Decision variability is low. The cost of an unpredictable AI failure is higher than the cost of a predictable rules failure. Replacing a working rules system with AI here adds cost without value. Tell the Director of Operations the vendor is over-claiming and recommend keeping the existing engine.


---


### Q.31. The vendor's proposal describes a system that, given a customer complaint, decides on its own which steps to take, looks up the order in the CRM, checks return eligibility, processes the return, and emails the customer, all without a person running each step. The marketing team's existing tool only drafts email copy when a writer prompts it. The Director of CX asks which two capabilities make the proposed system an agent and the marketing tool not one. Which pair of core capabilities distinguishes the proposed agent from the marketing tool?

- A. Autonomy and tool use; the proposed system decides its own next step and acts on real systems, not just generating text
- B. Speed and accuracy; the proposed system processes complaints faster and more correctly than the marketing tool produces its copy
- C. Personalization and scale; the proposed system serves more customers at once and tailors each response more closely than before
- D. Training data and model size; the proposed system runs on a larger model trained on much more data than before

**Autonomy and tool use; the proposed system decides its own next step and acts on real systems, not just generating text**
Autonomy and tool use are the two capabilities that make a system an agent. Autonomy means the system decides its own next step inside the perceive-reason-act loop. Tool use means it reaches into real systems to look things up and take actions. The marketing tool has neither; it generates text on request. Agent-to-agent communication and orchestration are the other two core capabilities, and they show up only when more than one agent is involved.


---


### Q.32. The vendor's proposal for AnyCompany Retail's customer service describes a supervisor agent that reads each ticket and routes it to one of three specialized agents (billing, returns, escalation) based on ticket content. The vendor wants approval next week. The Director of CX has asked you for a recommendation. Which multi-agent pattern is the vendor proposing, and what is the most important question to ask before approving?

- A. Sequential handoff; ask whether the agents can run in a different order than the vendor proposes
- B. Supervisor-worker; ask what happens when the supervisor misclassifies a ticket and routes wrongly
- C. Parallel processing; ask whether the agents can communicate with each other during execution
- D. Supervisor-worker; ask how fast the system processes each customer service ticket end to end

**Supervisor-worker; ask what happens when the supervisor misclassifies a ticket and routes wrongly**
The supervisor decides which worker to invoke for each request, which is the supervisor-worker pattern. The most consequential question is what happens at the moment of misclassification, because that error compounds into wrong worker actions that the customer experiences. Approve with conditions: a defined accuracy threshold for the supervisor, a human-review step for high-cost actions like refunds, and a published rollback procedure.


---


### Q.33. A separate AnyCompany Retail product recommendation engine launched alongside the GenAI pilot with strong click-through rates. Six weeks later, click-through has dropped to pre-AI levels. The data team confirms the model and prompts have not changed. Customer browsing patterns have shifted with a seasonal turn. The Director of Merchandising forwards the metrics to you and asks for a diagnosis before responding to the team. What is the most likely cause, and what should the team do next?

- A. Data drift; investigate input distributions and plan retraining on data that includes the new patterns
- B. The model has malfunctioned during the seasonal turn; retrain it now on the original training data
- C. Performance drift only; the issue will self-correct as customers return to their old browsing patterns
- D. The system was never actually working in production; roll back the AI deployment immediately

**Data drift; investigate input distributions and plan retraining on data that includes the new patterns**
Customer browsing patterns have shifted, which is data drift. The model is operating on inputs it was not trained on. The visible symptom is the click-through drop, which is performance drift. The cause is upstream. Investigate the inputs first, then plan retraining on data that includes the new patterns. The same diagnosis applies to the marketing GenAI pilot's slipping open rates: the world around the model has moved.


---


### Q.34. The CISO's findings show that a meaningful share of employees use personal generative AI accounts for work tasks, including drafting customer communications. Some are pasting customer information into prompts. The CISO wants a starting classification for the personal-account use specifically before the framework goes to the CEO on Friday. Which classification is most appropriate for the personal-account use, and what governance action should accompany it?

- A. Approved; communicate that employees can use personal AI accounts as long as they are careful with the content
- B. Blocked for all generative AI use across the company; revisit the policy decision in six months
- C. Under evaluation indefinitely; do not communicate to employees until the security review is complete
- D. Blocked for personal-account use of sensitive data; place the enterprise version under evaluation with alternatives

**Blocked for personal-account use of sensitive data; place the enterprise version under evaluation with alternatives**
The personal-account pattern is not acceptable for sensitive data, but the underlying use case is real. The framework's job is selectivity: block the unsafe pattern, evaluate the enterprise version that has appropriate data terms, and communicate both with alternatives. Employees comply when they understand what is available. The same logic applies across the rest of the CISO's flagged tools: block what fails review, evaluate what may fit, and name approved alternatives so the workforce does not move to harder-to-monitor tools.
