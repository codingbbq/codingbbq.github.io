---
slug: ai-tech-professionals
title: "AI concepts for Tech Professionals"
tags: [AI, upskilling, learning]
---

## Artificial Intelligence
AI is a vast field focused on creating intelligent systems that can perform tasks usually requiring human intelligence, such as perception, reasoning, and decision-making. It encompasses a range of techniques and approaches, including machine learning, deep learning, and generative AI.

## Machine Learning (ML)
ML is a subset of AI focused on developing methods that enable machines to learn from data and enhance their performance on specific tasks. It is commonly considered the simplest form of AI.

## Neural Networks
A neural network is a computational model inspired by the human brain, consisting of interconnected layers of nodes or neurons that process and transform data through learned patterns and weights. It is commonly used in machine learning to recognize complex patterns, make predictions and solve tasks by training on large datasets.

## Deep Learning
Deep learning is subset of machine learning that utilizes multi-layered neural networks to automatically learn and extract features from large datasets. These deep network can model complex patterns and perform tasks such as image and speech recognition with high accuracy by heirarchically processing data through multiple layers.

## Computer visiion
Computer vision is a field of artificial intelligence that enables computers to interpret and understand visual information from the world, such as images and videos. It involves the use of algorithms and models to analyze and make decisions based on visual data, often mimicking human visual perception and cognition.

## Natural Language processing (NLP)
Natural langulage processing (NLP) is a branch of artificial intelligence that allows computers to understand and interact with human language. It involves tasks like translating text, analyzing sentiment, and summarizing information by processing and interpreting language data.

## AI Model 
An AI model is a computational algorithm trained on data to perform specific tasks, such as classifiction, prediction, or pattern recognition. It learns from examples in training data, adjusting its parameters to improve its accuracy, and then applies this learned knowledge to make informed decisions or predictions on new, unseen data.

## ML Algorithm
An ML Algorithm is a set of procedueres used to analayze data and make predictions or decisions based on patterns and insights. It adjusts its approach by learning from data, improving its accuracy over time through iteravtive training.

## AI Model Training
AI model training is the process of teaching a model to make accurate predictions or decisions by feeding it large amounts of data, adjusting its parameters through iterative learning, and optimizing its performance based on feedback and error rates.

## AI inferencing
AI inferencing is the process of applying a trained AI model to new data to generate predictions or decisions based on the patterns and knowledge it has learned. It involves using the model's learned parameters to analyze the input and produce outputs in real-time or on-demand.

## Model fairness
AI model fairness refers to the principle of ensuring that a model's predictions or decisions do not disproportionately disadvantage or bias any particular group or individual, promoting equitble outcomes.

## Model fit
Model fit describes how well a model's predictions match the actual data it was trained on, indicating its accuracy and effectiveness in capturing the underlying patterns.

## Large Language Model (LLM)
A Large language model (LLM) is an AI model designed to understand and generate human-like text based on vast amounts of data. It uses advanced algorithms to process and respond to language, enabling tasks like text generation, translation, and question-answering.

## Machine Learning Workflow
- Identifying appropriate data is one of the most important aspects of ML workflow.
#### Labeled Data
Labeled data in AI refers to data that has been annotated with specific tags or categories, providing a reference for training models. This annoated information helps the model learn to identify patterns and make accurate predictions based on the labeled examples.

#### Unlabeled Data
Unlabled data in AI refers to data that lacks predefined tags or categories, meaning it has not been annoated with specific information. This type of data is often used in unsupervised leanring, where models identify patterns and structures without predefined labels. 

#### Tabular data
Tabular data in AI is structured information organized in rows and columns, resembling a spredsheet or database table. Each row typically represents a single record or observation, while each column contains specific attributes or features, making it easy to analyze and process for machine learning tasks.

#### Time-Series data
Time-series data in AI consists of observations collected sequentially over time, ofter at regular intervals. this type of data is used to analyze trends, patterns, and seasonal variations, making it valuable for tasks such as forecasting and anamoly detection. This data is oftern submitted by IoT devices.

#### Image data
Image data in AI refers to visual information represented as pixel matrics, capturing various features such as colors, shapes, and textures. This type of data is commonly used in computer vision tasks, including image classification, object detection, and facial recognition.

#### Strucured text data
Structured text data in AI refers to text that is organized in a predefined format, often with specific fields and tags, making it easy to analyze and process. Examples include data from forms, databases, or CSV files, where each entry has a consistent structure that facilitates tasks like information extraction and analysis.

#### Unstructured text data
Unstructured text data in AI refers to free-form text taht lacks a predefined structure, such as documents, social media posts, or emails. This type of data is more challenging to analyze, as it requires natural language processing techniques to extract insights, indentify patterns, and derive meaning from the content.

---

- Select the ML Algorithm
#### Linear Regression
Modeling between a dependent variable and multiple independent variables
Eg. Predict housing prices based on size, location and number of bedrooms.

#### Logistic Regression
Binary classification predicting the probability of an event occuring.
Eg. Email spam classification

#### K-Nearest Neighbors (KNN)
Classification of data points based on classification of neighbors. 
Eg. Product recommendation based on user preferences.

#### Principal component Analysis (PCA)
Condensing data while retaining the most important features
Eg. facial recognition

---

- Train the model on the data
#### Supervised Learning
Supervises learning is a machine learning approach where a model is trained on labeled data, using input-output pairs to learn the relationship between them. The model makes predictions on new, unseen data by applying the patterns it has learned from the training examples.

#### Unsupervised learning
Unsupervised learning is a machine learning approach where a model is trained on unlabled data, aiming to identify patterns, structures, or groupings within the data without predefined output categories. It is commonly used for tasks such as clustering, dimensionality reduction, and anomaly detection, helping to uncover hidden relationships in  the data.

#### Reinforcement Learning
Reinforcement learning is a machine learning approach where an agent learns to make decisions by interacting with an environment, receiving feedback in the form of rewards or penalties. The agent aims to maximize cumulative rewards over time by exploring different actions and learning from the consequences of its choices.


- Evaluate Model performance. Perform a series of tests to validate whether the model generates usable output
#### Batch inferencing
Batch inferencing is the process of making predictions or decisions on a large set of data at once, rather than individually processing each data point. This approach allows for efficient and scalable analysis by handling multiple inputs in a single operation. Batch inferencing is used when accuracy is more important than speed of response.

#### Real time inferencing
Real-time inferencing is the process of making predictions or decisions on data instantly as it is received, enabling immediate responses. This approach is crucial for applications requiring quick, dynamic interaction, such as live video analysis or online recommendation systems. Self-driving cars use real-time inferencing while in motion.

---

## Real World Examples of AI applications
- Computer Vision
Autonomous vehicles utilize computer vision to interpret and navigate their environment. They rely on a combination of sensors, cameras, and AI algorithms to perceive  the world around them.

- NLP Speech recognition
Virtual assistants leverage NLP and speech recognition to understand and respond to user queries in natural language. They allow for hands-free operation of devices, providing users with a seamless interaction experience.

- Recommendation systems
E-commerce platforms employ recommendation systems to provide personalized shopping experiences for users. These systems analyze user behavior and preferences to suggest products that are most likely to be purchases.

- Fraud detection
Financial institutions, including banks and credit card companies, employ fraud detection systems to identify and prevent fraudulent transactions in real-time. These systems use ML algorithms to analyze transaction data and flag suspicious activities.

- Forecasting
In supply chain management, accurate demand forecasting is crucial for ensuring products are available to meet customer demand while minimizing excess inventory costs. Companies use AI to analyze historical sales data and predict future demand.

---

## Introduction to RAG
- Retrieval Augmented Generation - The process of augmenting LLM output by referencing a knowledge base that is outside the context of the LLM training sources

#### knowledge base option
- Traditional Database or Indexing Syatem
Use a traditional database or an indexing system like Elasticsearch. Here, the documents are indexed based on keywords or phrases. the retreval process invovles searching these indices to identify documents that match the query terms, which can then be sent to the LLM for generating responses.

- Vector Database
In this method, structured or unstructured data are split into chunks, then embedded into vectors using a model (often a transformer-based encoder). These vectors are then stored in a vecotr database that supports efficient similarity search. When a prompt is submitted, this database is searched first, using a vecotr representing the query. It then retrives the most relevant documents based on vector similarity, and adds this data to the prompt.

#### RAG Benefits
- Enhanced factuality and accuracy
- LLM contextual relevance
- Improved handling of specific verticals

#### RAG Challenges
- Pipeline complexity
- Latency issues
- Dependence on the quality of the Retrieval set
- Resource Requirements
- Difficulty in Tuning and maintenance

## How do you understand if an AI model is delivering business objectives ?
Below are key considerations
- Alignement with Business Objectives - Ensure that the model addresses specific goals.
- Performance metrics - Define KPIs to measure effectiveness
- User Feedback - collect qualitative insights from end users.
- Integration and Usability - Evaluate how well the model integrates into existing workflows

---

## Generative AI
- Transformer-based LLMs are models that can understand and generate human-like text. They are trained on text data various sources, and learn patterns and relationships between words and phrases.

- Tokens - Units of text that the model processes individually. It represents a fragment of the input text, which can be a word, subword, characters, or even punctuation mark depending on the specific tokenization method used by the model.

- Chunking - The practice of breaking down a large text input or output into smaller, more manageable pieces for procesessing. Chunk size (tokens) is an important parameter when creating a vector database.

- Vectors - A mathematical representation of data (word, sentence or document) as a series of numerical values organized in a specific order. This representation captures various features or dimensions of the data, enabling the calculation of relationship or similarities.

#### Foundation Model Types for Generative AI
- A Large Language Model (LLM) is an AI model designed to understand and generate human-like text based on vast amounts of data. It uses advanced algorithms to process and respond to language, enabling tasks like text generation, translation and question-answering

- Diffusion Models start with noise or random data, and gradually add information until a recognizable pattern is obtained. This is often applied to image generation but can also be used for text or audio genreation.

- Multimodal models are foundation models which have been trained on multiple media types. These media types can include text, audio, video, and images. The models can both interpret and generate these media types.

- Generative Adversarial Networkds (GANs) - This model consists of two neural networks which compete with each other. One generates content, and the other attempts to differentiate that generated content from real data. the competition continues until the generated content and real data are indistinguishable from each other.

## Generative AI Advantages
- Adaptability - Generative AI excels in adapting to diverse tasks and problem domains, making it useful across a wide range of industries. It can seamlessly switch between languge, visual, and data-centric applications without needed extensive reconfiguration. This flexibility helps organizations leverage AI to tackle varied challenges with a single adaptable system.

- Responsiveness - Generative AI models can rapidly produce outputs and insights in real-time, enabling swift responses to use queries and changing requirements. Their ability to process information and generate relevant content makes them suitable for interactive applications, such as chatbots and customer support. This responsiveness enhances user experience by providing instant and contextually appropriate answers.

- Simplicity - Generative AI models often simplify complex workflows by automating content generation and decision-making processes. They reduce the need for manual intervention or domain-specific coding, making AI-driven solutions more accessible to non-technical users. As a result, businesses can deploy sophisticated solutions with minimal setup and oversight.

- Creativity and Exploration - Generative AI opens up new avenues for creativity by suggesting novel ideas, designs, or content based on learned patterns. It can assist with brainstorming, creative writing, and design prototyping, providing users with unexpected and innovative options. This capability helps push the boundaries of traditional problem-solving and artistic creation.

- Data Efficiency - Many generative AI models are designed to learn effectively from relatively small datasets through pre-training and fine-tuning techniques. This data efficiency reduces the dependency on massive labeled datasets, lowering costs and effort associated with data preparation. It also allows models to generate meaningful outputs even in data-sparse environments.

## Generative AI DisAdvantages
- Regulatory Violations - Generative AI models can inadvertently generate content that violets regulatory guidelines, such as producing misleading financial advice or content that doesn't comply with advertising standards. Organizations using these models may face complaince challenges, especially in highly regulated industries like healthcare and finance. this risk underscores the need for strict oversight and adherence to legal requirements when deploying AI systems.

- Social Risks - Generative AI can be used to create deepfakes disinformation, or biased content, potentially amplifying harmful social impacts. Such outputs can erode trust, manipulate public opinion, or contribute to social polarization. The misuse of generative AI for malicious purpose poses significant ethical and societtal concerns that require careful mitigation strategies.

- Data Security and Privacy Concerns - Generative AI models often require access to sensitive datasets, raising risks of data leakage or unintended exposure of personal information. If improperly handled, these models may inadvertently reveal private data points from training data. Ensuring data security and maintaining user privacy is a critical challenge when deploying generative models, especially in sensitive applications.

- Toxicity - Generative models can sometimes produce toxic or harmful content, such as offensive language or inappropriate suggestions, if they are not carefully monitored. This issue is often due to biases or toxic patterns present in the training data. It necessitates rigorous content moderation and filtering techniques to prevent harmful outputs in public-facing applications.

- Hallucinations - Generative AI may produce outputs that are factually incorrect or completely fabricated, known as "hallucinations". This problem is particularly challenging when using AI for tasks requiring high accuracy, such as generating technical documentation or answering factual questions. Hallucinations can undermine trust and reliability, making it difficult to use generative AI in mission-critical scenarios.

- Nondeterminism - Generative AI models can produce different outputs even when given the same input, due to their probabilistic nature. This nondeterminism complicates tasks that require consistency, such as legal document generation or standardized communication. It also makes debugging and validating AI-generated outputs more complex, limiting their applicability in certain use cases.

---

## Model Selection Decision Tree
What content are you trying to generate?
- Text
- Image
- Audio
- Video
- Multimodal

Other model consideration
- Performance and latency
- Customization
- Constraints and Resource
- GRC (Governance Risk and Compliance)

---

## What is Prompt Engineering?
The process of desiging and refining input prompts to optimize the performance of AI models.
Enhances the quality of responses, guides model behavior, and can lead to more accurate results.

#### Key components of Prompt Engineering
- Context - Information surrounding the prompt that helps the model understand the scenario
- Instruction - The specific tasks or question being posed to the model.
- Negative Prompts - Instructions that specify what the model should avoid or exclude in its response.

---

## ML Development Lifecycle
1. Business Goal - Objectively measure business value of the outcomes against the defined business gola. Is ML the appropriate technology choice to solve the problem statement?

- **Business Goal Definition Workflow**
- Business consideration
- Frame the ML problem
- Determine the optimization objective
- Review data requirements
- Cost and performance optimization
- Production consideration

2. ML problem framing Definition
Define what is observed and what should be predicted. Identify dependent and/or independent variables. Define inputs and outputs.

3. Collect Data
- Data labeling
- Ingest (streaming, batch)
- Data aggregation

4. Data pre-processing workflow
- Clean
- Partition
- Scale
- Unbalance, Balance
- Augment

5. Feature Engineering tasks (Features are inputs to ML models used during training and inference)
- Feature selection: The process of selecting a subset of extracted features. This is the subset that is relevant and contributes to minimizing the error rate of a trained model.
- Feature transformation - Steps for replacing missing features or fetaures that are not valid.
- Feature Creation - The creation of new features from existing data to help with better predictions
- Feature Extraction - The process of reducing the data to be processed using dimensionality reduction techniques.

6. Train, tune and evaluate: The process of training a machine learning model involves providing the algorithm with training data to learn from.

7. Hyperparameters are settings that can control the beahvior of the ML algorithm. Hyperparameter tuning, or optimization, is the process of choosing the optimal hyperparameters for an algorithm.
