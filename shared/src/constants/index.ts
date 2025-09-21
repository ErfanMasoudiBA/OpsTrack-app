// API Constants
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    REFRESH: '/api/auth/refresh',
    LOGOUT: '/api/auth/logout',
  },
  USERS: {
    PROFILE: '/api/users/profile',
    UPDATE: '/api/users/update',
  },
  PROJECTS: {
    LIST: '/api/projects',
    CREATE: '/api/projects',
    GET: '/api/projects/:id',
    UPDATE: '/api/projects/:id',
    DELETE: '/api/projects/:id',
    MEMBERS: '/api/projects/:id/members',
  },
  REPORTS: {
    LIST: '/api/reports',
    CREATE: '/api/reports',
    GET: '/api/reports/:id',
    UPDATE: '/api/reports/:id',
    DELETE: '/api/reports/:id',
    SUBMIT: '/api/reports/:id/submit',
  },
} as const;

// File Upload Constants
export const FILE_UPLOAD = {
  MAX_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_TYPES: [
    'image/jpeg',
    'image/png',
    'image/gif',
    'video/mp4',
    'audio/mpeg',
    'audio/wav',
    'application/pdf',
  ],
  ALLOWED_EXTENSIONS: ['.jpg', '.jpeg', '.png', '.gif', '.mp4', '.mp3', '.wav', '.pdf'],
} as const;

// User Roles
export const USER_ROLES = {
  MANAGER: 'manager',
  REPORTER: 'reporter',
} as const;

// Report Status
export const REPORT_STATUS = {
  DRAFT: 'draft',
  SUBMITTED: 'submitted',
  REVIEWED: 'reviewed',
  ARCHIVED: 'archived',
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
} as const;
