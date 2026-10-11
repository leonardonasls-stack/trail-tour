---
name: fastapi-booking-mock
description: Generate rock-solid, typed FastAPI routers and Pydantic v2 schemas to handle asynchronous booking inputs and validation for ATV tours.
---

# Skill: FastAPI Tour Booking Mockup
# Context: Backend API layer execution.
# Stack: Python 3.11+, FastAPI, Pydantic v2.

## Purpose
Generate rock-solid, typed FastAPI routers to handle the asynchronous booking inputs for the ATV tours. Ensure validation of capacity, calendar constraints, and structured responses.

## Code Requirements
1. **Pydantic Schemas:** Explicit fields for `customer_name`, `whatsapp_phone`, `tour_date`, `time_slot`, `atv_model`, `quantity_single`, and `quantity_double`.
2. **Validation:** Implement standard error checks (e.g., ensuring quantity > 0, dates cannot be in the past).
3. **Clean Output Structure:** Standardized JSON responses prepared to be consumed smoothly by Frontend Fetch/Axios API requests.
