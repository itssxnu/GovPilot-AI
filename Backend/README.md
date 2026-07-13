# GovPilot AI - Backend Architecture & Scaffolding

This directory contains the production-grade scaffolding layout for the GovPilot AI backend, built with FastAPI and Python 3.13+.

---

## Architectural Decisions

### 1. Flat Folder Layout
To optimize developer velocity and maintain high cohesion, we avoid deeply nested directories (e.g., repository layers, database models folders, and domain service subfolders). Keeping database modeling, routing, and schema validation in clean, flat modules (`db.py`, `schemas.py`, `deps.py`) reduces boilerplate and speeds up domain adjustments.

### 2. Two-Agent LangGraph Orchestrator
We limit the cognitive loop to two specialized agents to keep the conversation trace predictable and fast:
*   **Citizen Agent**: Manages conversation flow and intent extraction. Its sole task is to map natural language queries to a structured `service_id` (e.g., `passport_renewal`).
*   **Planner Agent**: Triggered once a `service_id` is resolved. It reads data configurations from the `knowledge_base` and emits the step-by-step plan and document checklists back to the user interface.

### 3. Config-Driven Knowledge Base
To enforce a service-agnostic design, no government service is hardcoded into API routes or agent code. The `knowledge_base/government/` directory contains structured configurations (`service.json`, `workflow.json`, `documents.json`, `eligibility.json`, `faq.md`) for each service. Supporting a new service requires only dropping in a folder; the system automatically discovers and registers it at startup.

---

## Flagged Missing Layers (For Future Scale)
This scaffold intentionally omits several layers to keep the initial footprint simple. As the service scale increases, we expect the following to be introduced:
1.  **Repository Layer**: To isolate SQL generation and transaction limits from business logic.
2.  **Separate Models Folder**: Moving table definitions out of `db.py` when entity classes exceed 15+ definitions.
3.  **Event Bus & Celery Workers**: For asynchronous workflows (like heavy OCR scans and notifications).
4.  **Observability Folder**: Exposing metrics and open-telemetry tracing handles.
5.  **Storage Abstraction**: Isolating local filesystem staging from cloud S3 object storage APIs.
