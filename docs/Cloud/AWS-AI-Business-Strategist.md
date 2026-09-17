AWS AI Business Strategist

### Q.1. The CDO's deadline is Friday. A vendor proposal lands in your inbox the same week and contains the following sentence: "Our system runs inference in real time on each new transaction to produce a fraud score." Which two AI concepts does the vendor's sentence reference, and how would you translate them for the CDO?

A. Inference and prediction: the model making a decision on new data, and the fraud score it produces
B. Algorithm and model: the underlying recipe and the trained system
C. Training and algorithm: the process that produced the model and the recipe behind it
D. Model and training: the trained system and the process that built it
 
A) Inference is the model making a decision on new data, and the fraud score is the prediction it produces. Recognizing the pair lets you translate the line for a non-technical audience: "The system applies what it has already learned to score every new transaction as it happens."


---


### Q.2. The CDO needs the rest of the list classified before the briefing goes to the board. Two example systems will set the pattern. - System X: Auto-assigns returns to a destination using a fixed table of return reason → warehouse. - System Y: Predicts which products a customer is most likely to buy next, based on three years of purchase history. The CDO asks you to classify both before the rest of the list goes through. Which classification of System X and System Y is most accurate, and what does it imply about how to brief the board?

A. System X is machine learning; System Y is generative AI
B. System X is rules-based automation; System Y is machine learning
C. System X is generative AI; System Y is rules-based automation
D. Both System X and System Y are generative AI
 
B) A fixed lookup table is rules someone wrote, which is automation, not AI. A model that learns patterns from historical data is machine learning. Neither system generates new content, so generative AI does not apply. Calling System X "AI" in the briefing would lump automation in with the company's actual ML work and inflate the picture for the board.


---
 
 
### Q.3. The Director of Merchandising wants to use AI to summarize the themes in 50,000 customer support call recordings from the past year. The data team forwards the question to you before they scope the work. Which data type description fits the input, and what does it imply for the work?

A. Structured data; the AI can read the recordings directly from existing dashboards
B. Unstructured data; extracting themes will require processing the audio or the transcripts before the AI can act on it
C. Semi-structured data; the AI can use the existing fields without any further processing
D. Structured data; recordings convert automatically to rows and columns at intake
 
B) Audio recordings have no fixed schema, which makes them unstructured. Extracting value from unstructured data requires processing. In this case, transcription and analysis of the language inside the calls. That processing is the budget and time investment to plan for before scoping the AI work itself.


---


### Q.4. The Director of Merchandising flagged three known defects (missing category labels, duplicate customer records, inconsistent currency/date formats). A consultant brought in to review the training data for AnyCompany Retail's customer-service AI pilot surfaces a fourth, less visible problem: the dataset over-represents complaints from one region and under-represents complaints from three others. Which AI consequence is most likely from the consultant's finding, and how should you describe the risk to the CDO?

A. The model will be confident about the over-represented region and unreliable on the others
B. The model will run more slowly on the under-represented regions during inference
C. The model will refuse to make predictions for the under-represented regions on its own
D. The model will automatically detect and correct the imbalance at inference time
 
A) The model will be confident about the over-represented region and unreliable on the others
Biased samples produce confident predictions where the model has seen many examples and unreliable predictions where it has not. The risk is silent: the model still produces an answer, but the answer is wrong for the under-represented segments. The right framing for the CDO is that the over-represented region's accuracy will mask the failure on the others until a customer or a regulator notices.


---


### Q.5. The same vendor proposes training a customer service routing model on the past four years of support tickets. The previous two years used a ticket platform that AnyCompany Retail retired last quarter and is no longer collecting new tickets in. The CDO asks you for the recommendation before the vendor's proposal goes to procurement. Which response best applies the principles of appropriate training data, and what would you tell the vendor?

A. Use all four years of support ticket data; more training data always improves model accuracy
B. Use only the oldest two years of data; older data is more stable and better understood at this point
C. Reject the proposal entirely; any change in source systems makes the training data unusable
D. Use only the most recent two years; older data depends on a feature the company no longer collects
 
D. Use only the most recent two years; older data depends on a feature the company no longer collects
Training data should reflect inputs the model will see in production. Tickets from a retired platform will not be available at inference time, so a model trained on them depends on a feature the company cannot supply going forward. Tell the vendor to scope the model to the two recent years on the new platform and to flag the recency caveat in the design.


---


### Q.6. The vendor's proposal includes this language: "Our AI platform aligns with ISO/IEC 42001 and uses terminology consistent with ISO/IEC 23053." The CEO is on a call with the vendor next week and asks the CDO to surface what the citation actually means before the call. Which conclusion about the vendor's claim is most accurate, and what should the CEO ask on the call?

A. The vendor has been independently certified by an external auditor to the published standard
B. The vendor has self-declared alignment; the buyer should ask what specifically is aligned and whether an independent audit has happened
C. The vendor's AI platform is guaranteed to be safe, bias-free, and ready for any use case
D. The vendor is using marketing jargon and the citation can be ignored as vendor noise
 
B. The vendor has self-declared alignment; the buyer should ask what specifically is aligned and whether an independent audit has happened
Alignment means a self-declared mapping of internal practices to the standard. It is a meaningful signal that warrants follow-up questions about specifics, evidence, and whether an independent audit has happened. The CEO's strongest questions test the claim without assuming either the best or the worst: which 42001 clauses are you implementing, are you self-aligned or independently certified, when was your last internal review, and where in your documentation can our team see the mapping?


---


### Q.7. A European partner asks AnyCompany Retail to describe its AI systems using terminology both organizations and their regulators can interpret consistently. Which framework addresses that request, and what does it provide?

A. ISO/IEC 42001, which provides a shared vocabulary for describing AI systems
B. ISO/IEC 42001, which certifies that an organization governs its AI responsibly
C. ISO/IEC 23053, which certifies that an organization governs its AI responsibly
D. ISO/IEC 23053, which provides a shared vocabulary for describing AI systems

**ISO/IEC 23053, which provides a shared vocabulary for describing AI systems**
ISO/IEC 23053 is a framework for describing AI systems, and its contribution is a shared vocabulary that lets other organizations and regulators interpret a description consistently. A partner asking for consistent terminology is asking for exactly that reference point, which is what makes cross-border procurement conversations workable.


---


### Q.8. A vendor proposes training a churn prediction model on a customer dataset in which each record includes a field marking whether the customer submitted a cancellation request. The model reports near-perfect accuracy in testing. What should the digital strategy team recommend?

A. Approve the model, and ask the vendor to retest it on a larger sample of customers
B. Exclude the cancellation field, because customer requests are too sensitive to model
C. Exclude the cancellation field, because it will not be available before a customer leaves
D. Approve the model, because near-perfect test accuracy demonstrates the approach works

**Exclude the cancellation field, because it will not be available before a customer leaves**
Data that correlates with the outcome but is not available at prediction time has to be excluded. The model appears accurate because it notices that the customer already canceled, which is information the business does not have when it needs the prediction. Tell the vendor to retrain without the field and to report accuracy again, because the honest number will be lower and far more useful.


---


### Q.9. AnyCompany Retail's European and United States point-of-sale systems were never reconciled after an integration, so the two record transaction values in different currencies and dates in different formats. What is the most likely effect on a model trained on the combined data?

A. The model will convert the currencies and dates during training to a single standard
B. The model will flag the inconsistency so the data team can correct the records
C. The model will produce accurate results for the larger region and no results for the smaller
D. The model will treat identical values as different values, fragmenting its view of reality

**The model will treat identical values as different values, fragmenting its view of reality**
Inconsistent formatting causes the system to treat the same value as multiple different values, and its view of reality fragments. A model that reads euros and dollars as the same unit misreads every European transaction by the difference between the currencies. Naming the defect precisely matters, because the fix is upstream reconciliation rather than a better model.


---


### Q.10. A vendor describes a "smart AI engine" for assigning loyalty tiers. Under questioning, the vendor confirms that a customer who spends more than a set amount in twelve months always receives Gold status, and that the thresholds are set by the vendor's staff. What should the digital strategy team conclude?

A. The system is generative AI, because it produces a tier assignment for each customer
B. The system is machine learning, because tier assignment varies from customer to customer
C. The system is rules-based automation, because fixed thresholds set by staff are written rules
D. The system is machine learning, because it processes twelve months of spending history

**The system is rules-based automation, because fixed thresholds set by staff are written rules**
The system is rules-based automation, because fixed thresholds set by staff are written rules
Two of the three diagnostic questions settle this. The system follows thresholds people wrote rather than patterns learned from data, and the same input always produces the same output. That makes it automation rather than AI. The practical consequence is that the team should not pay AI prices for a rules engine in different packaging.


---


### Q.11. A vendor proposes training a demand forecasting model on five years of AnyCompany Retail sales history. Two of those years cover a period when store closures pushed nearly all sales online, and shopping patterns have since returned to a mix of store and online purchases. Which recommendation best applies the principles of appropriate training data?

A. Use only the two unusual years, because they contain the highest online sales volume
B. Limit the training window to the period that reflects current patterns, and document why
C. Use all five years, because a longer history always produces a more reliable forecast
D. Use all five years, and let the model determine which periods remain relevant


**Limit the training window to the period that reflects current patterns, and document why**
Recency and relevance both apply here. Data from a period when the business operated very differently is not predictive of current behavior, so a model trained on it forecasts a world that no longer exists. Scoping the window to the period that matches today's mix, and documenting the choice, gives the forecast a defensible basis and tells the vendor which years are in scope.


---


### Q.12. A merchandising analyst reads a status report from the engineering team that includes the sentence, "The system was shown two years of returns data until it could identify which items were likely to be sent back." Which core AI concept does the sentence describe?

A. Prediction, because the sentence describes items identified as likely returns
B. Algorithm, because the sentence describes the processing steps engineers wrote
C. Training, because the system learned the pattern from historical examples
D. Inference, because the system is producing an answer about which items qualify

**Training, because the system learned the pattern from historical examples**
Training is the process of feeding a system historical examples where the answer is already known until it learns the pattern. The phrase "was shown two years of returns data until it could identify" describes that process. Recognizing training in a status report lets a strategist ask the next useful question: how recent is the data the system learned from?


---


### Q.13. A slide sent to the board lists two initiatives under one "AI" heading: a tool that writes personalized product descriptions, and a scorer that rates each support ticket for urgency. Which classification of the two initiatives is most accurate?

A. Both are generative AI, because both produce an output from customer data
B. The description tool is generative AI; the urgency scorer is machine learning
C. The description tool is machine learning; the urgency scorer is generative AI
D. Both are rules-based automation, because both follow instructions engineers wrote

**The description tool is generative AI; the urgency scorer is machine learning**
The second diagnostic question asks what the system is doing. A tool that produces new text is generative AI, and a system that sorts items into categories or produces a number is classical machine learning. Both belong under the AI umbrella, but labeling them identically on a board slide invites the board to expect generative capabilities from a scoring model.


---


### Q.14. After a loyalty system migration, some AnyCompany Retail customers appear in the customer database two or three times with slightly different contact information. The data team asks the digital strategy team what this means for a planned recommendation model. Which consequence is most likely?

A. The model will exclude the repeated customers because their records conflict
B. The model will merge the repeated records automatically during training
C. The model will weight the repeated customers more heavily than it should
D. The model will run more slowly because it processes the additional records

**The model will weight the repeated customers more heavily than it should**
Duplicate records cause some examples to carry more weight than they should. A customer appearing three times acts like three customers, so the model treats that behavior as triple-weighted evidence and its learned patterns skew toward the over-counted ones. The right framing for leadership is that the defect distorts what the model learns rather than announcing itself as an error.


---


### Q.15. A dashboard built for the digital strategy team displays the line, "Customer 4412 has an 82 percent likelihood of lapsing this quarter." Which core AI concept does that line represent?

A. The prediction, because it is the output the trained system produced
B. The algorithm, because a percentage is the result of a calculation
C. The model, because the trained system is what appears on the dashboard
D. The training data, because customer records are what the system learned from

**The prediction, because it is the output the trained system produced**
A prediction is the actual output a model produces: the recommendation, the score, or the answer. An 82 percent likelihood is a score, which makes it a prediction. Separating the prediction from the system that made it helps a strategist ask how the score should be acted on and how often it is wrong.


---


### Q.16. The catalog team proposes an AI project that would draw on AnyCompany Retail's product catalog entries. Each entry carries fixed attributes such as SKU, price, and color, along with a free-text narrative description that varies in length and style. How should the data be classified, and what does the classification imply?

A. Semi-structured data, because fixed attributes sit alongside free-text content
B. Unstructured data, because the narrative descriptions have no fixed schema
C. Structured data, because catalog entries are stored in a single business system
D. Structured data, because every entry contains the same fixed attribute fields

**Semi-structured data, because fixed attributes sit alongside free-text content**
Semi-structured data has some structure but not a fixed schema across all records, and product catalog entries with structured attributes plus narrative descriptions are the module's example of it. The classification matters because the free-text half will need processing before AI can use it, while the attribute half is ready to work with.
