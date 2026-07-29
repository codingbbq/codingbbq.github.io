---
slug: book-review
title: "AI Driven SDLC: My notes on the book"
tags: [book, learning, AI]
---

# AI Driven SDLC: My notes on the book

What started as vibe coding is now become Agentic Engineering

Read the book: [AI Driven SDLC](https://drive.google.com/file/d/1IR7CddF_2FyQo_PdfBNTaEA50EGiVt2r/view)

Instead of viewing AI as a coding assistant (e.g., autocomplete or code generation), the authors propose that software engineering is evolving toward Agentic Engineering, where developers collaborate with AI agents that can perform end-to-end engineering tasks. The challenge is no longer how to prompt an LLM, but how to design systems, workflows, and guardrails that allow AI to build reliable software.

<!-- truncate -->

---

## AI is contributing across the SDLC

The traditional software development lifecycle (SDLC) consists of several phases, including requirements gathering, design, implementation, testing, deployment, and maintenance. AI is now contributing across all these phases:

### Requirements

Instead of manually writing requirement documents,

AI can:
- analyse product ideas
- generate user stories
- identify edge cases
- propose acceptance criteria

### Design & Architecture

AI can help:

- create architecture diagrams
- compare design patterns
- evaluate trade-offs
- identify scalability concerns

The architect still makes the final decision.

### Implementation

This is the most familiar use case today.

AI assists by:

- generating code
- refactoring
- creating APIs
- writing documentation
- migrating frameworks

This is what most people currently associate with "AI coding."

### Testing & QA

Rather than writing tests manually,

AI can:

- generate unit tests
- generate integration tests
- identify edge cases
- create regression suites
- identify missing scenarios

### Code Review

Instead of reviewing syntax,

AI can:

- detect bugs
- identify code smells
- suggest improvements
- highlight security issues

Developers spend more time reviewing intent than formatting.

### Deployment

AI increasingly helps with:

- CI/CD pipelines
- release strategies
- rollback planning
- infrastructure changes

### Maintenance

AI assists by:

- debugging production issues
- root cause analysis
- documentation
- dependency upgrades
- technical debt reduction

The book suggests that every phase of SDLC becomes increasingly AI-assisted.

---

## Harness Engineering
The authors argue that writing prompts isn't enough. We need to build AI Harness around the Model.

Agent = Model + Harness

A raw model is not an agent. It becomes one once a harness gives it state, tool execution,
feedback loops, and enforceable constraints.

The harness includes:

- tools
- workflows
- documentation
- context
- coding standards
- memory
- permissions
- testing
- observability
- feedback loops
- guardrails

Think of the LLM as the engine.

The harness is everything surrounding the engine that makes it useful in production.

Without a good harness:

- AI hallucinates
- loses context
- makes inconsistent decisions

With a good harness:

- AI behaves more like an experienced teammate.


---

## The 80% Problem

AI is excellent at getting much of the way to a solution quickly.

However, the remaining work often requires:

- business context
- domain expertise
- architectural judgment
- handling edge cases
- performance tuning
- security considerations

The final stretch still relies heavily on experienced engineers.

## Skills Developers Should Build

The book argues that future engineers should invest less in memorising syntax and more in higher-level engineering capabilities, including:

- Systems thinking
- Architecture and design
- Product thinking
- Communication
- Problem decomposition
- Reviewing AI-generated work
- Building reliable AI workflows
- Understanding AI limitations

These skills become increasingly valuable as AI takes on more routine implementation.