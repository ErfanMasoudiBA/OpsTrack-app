---

# Product Requirements Document (PRD) – **گزارشیار مهندس**

**Project Name:** Gozareshyar Mohandes
**Platform:** Mobile App (iOS / Android)
**Tech Stack:** React Native (Front-end), Node.js + Express/NestJS (Back-end), MongoDB (Database), Cloud Storage (Firebase/S3), OpenAI API (Whisper & GPT)

---

## 1. Overview

**Purpose:**
An AI-powered mobile assistant for project reporters and managers, replacing manual reporting and paperwork. Users can submit audio reports, attach files/images, and managers can view, filter, and get AI-generated summaries.

**Target Users:**

- Project engineers and site supervisors (Civil, Mechanical, Electrical, IT)
- Project managers and team leads
- Construction, industrial, and technical companies
- Optional: service/support teams

**Key Value:**

- Reduce time and cost of manual reporting
- Minimize human errors
- Fast access and review of reports
- Optional AI summary & insights

---

## 2. Key Features

### 2.1 Report Submission

- Record audio reports (short/long)
- Convert audio to text (Speech-to-Text via Whisper)
- Optional text notes
- Attach files/images/videos (Preview before sending)

### 2.2 Report Delivery & Notifications

- Send reports to project managers
- Push notifications for new reports

### 2.3 Manager Dashboard

- View all reports with filters (date, project, reporter)
- Open files, listen to audio reports
- Optional: AI-generated summaries and highlights

### 2.4 Project & User Management

- Create projects (user becomes default project manager)
- Invite members via email/phone
- Assign roles:

  - Manager: full access to reports & AI summary
  - Reporter: submit reports, attach files

### 2.5 User Experience

- Simple, minimal-click interface
- Responsive mobile UI
- Support multi-project participation (different roles per project)

---

## 3. User Roles & Permissions

| Role     | Access / Actions                                                              |
| -------- | ----------------------------------------------------------------------------- |
| Reporter | Submit reports, attach files, view own reports                                |
| Manager  | View all project reports, filter/search, AI summaries, manage project members |

**Note:** Users can have different roles across projects.

---

## 4. MVP Scope

- Audio report submission + text notes
- File/image attachments (limit: 10 MB/file)
- Basic project creation & user role assignment
- Manager dashboard for viewing reports
- Push notifications
- No AI summary in MVP (can be added in next iteration)

**Assumptions:**

- Users have modern smartphones and internet access
- Reports are small/medium size
- Role management only project-based (no complex organizational hierarchy)

---

## 5. Architecture

| Layer            | Tools / Frameworks          | Purpose                                         |
| ---------------- | --------------------------- | ----------------------------------------------- |
| Mobile Front-end | React Native                | User interface, interaction, API requests       |
| Back-end / API   | Node.js + Express / NestJS  | Business logic, authentication, role management |
| Database         | MongoDB                     | Store users, projects, roles, reports metadata  |
| File Storage     | Cloud Storage (Firebase/S3) | Store audio files, images, attachments          |
| AI / Processing  | OpenAI API (Whisper & GPT)  | Audio-to-text, report summaries                 |

---

## 6. Success Metrics

- **Adoption:** Active users, projects created, reports submitted per week
- **Efficiency:** Avg. time to submit a report, speech-to-text accuracy
- **User Satisfaction:** Feedback/NPS, AI summary usage rate
- **System Reliability:** Minimal downtime, smooth mobile performance

---

## 7. Challenges & Mitigation

| Challenge                              | Solution / Mitigation                                      |
| -------------------------------------- | ---------------------------------------------------------- |
| Audio processing in noisy environments | Noise reduction, user editing before sending               |
| Large file management                  | Cloud storage + metadata in MongoDB                        |
| Simple UX for all users                | Minimal-click design, iterative testing with real users    |
| AI rate limits & latency               | Queue system or caching, optional async summary generation |

---

## 8. Workflow / User Flow

1. **Sign Up / Login:**

   - Email/phone + password
   - OTP verification
   - Access to personal dashboard

2. **Project Creation:**

   - Name, description, optional logo
   - Creator becomes manager by default

3. **Member Management (Manager Only):**

   - Invite users via email/phone
   - Assign roles (Manager / Reporter)

4. **Report Submission (Reporter):**

   - Record audio, attach files, add text notes
   - Submit to project

5. **Report Review (Manager):**

   - View all reports
   - Filter/search by date, reporter, project
   - Optional: AI summary

---
