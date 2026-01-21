# Contract Management Platform

## Overview

This is a full-stack Contract Management Platform built as part of a technical assignment.  
The system allows creating reusable contract blueprints, generating contracts from those blueprints, and managing the full contract lifecycle with backend-enforced state transitions.

---

## Features

### Blueprint Management
- Create reusable contract blueprints
- Supported field types:
  - Text
  - Date
  - Signature
  - Checkbox
- Each field stores:
  - Type
  - Label
  - Position (x, y)

### Contract Creation
- Create contracts from existing blueprints
- Contracts inherit fields from blueprint
- Contract data persisted in database

### Contract Lifecycle

Lifecycle flow:

Created → Approved → Sent → Signed → Locked  
Created → Revoked  
Sent → Revoked  

- Backend enforces valid transitions
- Invalid transitions are rejected
- Locked contracts are immutable
- Revoked contracts cannot proceed

### Dashboard
- View all contracts in a table
- Displays:
  - Contract Name
  - Blueprint Name
  - Status
  - Actions (Approve, Send, Sign, Lock, Revoke)

---

## Tech Stack

Frontend:
- React (Vite)
- Axios
- React Router

Backend:
- Node.js
- Express.js
- REST APIs

Database:
- MongoDB Atlas (Cloud)

---


 



