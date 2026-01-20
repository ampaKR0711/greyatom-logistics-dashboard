# greyatom-logistics-dashboard
## Delivery Exception Management Dashboard

## Overview
This project is a specialized internal operations tool designed for GreyAtom Logistics to manage and track delivery exceptions in real-time. It provides a centralized interface for operations teams to report issues (such as damaged packages or incorrect addresses) and track their resolution status.

## Core Features
. Dynamic Exception Reporting: A validated form that captures critical data points including Delivery ID, Customer Name, Issue Type, and Priority level.

. Real-Time Operations Dashboard: A live-updating table that displays all reported exceptions without requiring a page refresh.

. Actionable Data Management: Integrated buttons allow users to mark issues as "Resolved" (disabling the action and updating the UI) or "Delete" records after a security confirmation prompt.

. Advanced Filtering: On-the-fly filtering capabilities that allow managers to sort through data by Issue Type or Status using efficient DOM manipulation.

## Technical Architecture
Following professional "Separation of Concerns" principles, the application is built using a clean three-tier architecture:

. HTML5 (Structure): Defines the semantic skeleton of the form and dashboard.

. CSS3 (Design): Implements a neutral corporate color palette (white, grey, and blue) with interactive hover effects and visual status indicators.

. Vanilla JavaScript (Logic): Uses modern addEventListener methods and DOM manipulation to handle all business logic without the overhead of external frameworks.
