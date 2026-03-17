-- Run this in Oracle (SQL*Plus, SQL Developer, or run via oracledb) to create tables.
-- Use quoted identifiers so column names match Prisma (lowercase).

-- Departments
CREATE TABLE departments (
  "id"    VARCHAR2(32) PRIMARY KEY,
  "name"  VARCHAR2(255) NOT NULL
);

-- Users
CREATE TABLE users (
  "id"                      VARCHAR2(32) PRIMARY KEY,
  "email"                   VARCHAR2(255) NOT NULL UNIQUE,
  "name"                    VARCHAR2(255) NOT NULL,
  "password"                VARCHAR2(255) NOT NULL,
  "firstName"               VARCHAR2(255),
  "middleName"              VARCHAR2(255),
  "lastName"                VARCHAR2(255),
  "dateOfBirth"             DATE,
  "marriageStatus"          VARCHAR2(64),
  "photo"                   VARCHAR2(1000),
  "aadharNumber"            VARCHAR2(32),
  "bankAccount"             VARCHAR2(64),
  "panNumber"               VARCHAR2(32),
  "passportNumber"          VARCHAR2(64),
  "dlNumber"                VARCHAR2(64),
  "addressHNo"              VARCHAR2(500),
  "city"                    VARCHAR2(128),
  "state"                   VARCHAR2(128),
  "pincode"                 VARCHAR2(32),
  "phoneNumber"             VARCHAR2(32),
  "emergencyContactNumber"  VARCHAR2(32),
  "emergencyContactWhose"   VARCHAR2(128),
  "emergencyContactRelation" VARCHAR2(64),
  "native"                  VARCHAR2(128),
  "fatherName"              VARCHAR2(255),
  "fatherOccupation"        VARCHAR2(128),
  "motherName"              VARCHAR2(255),
  "motherOccupation"        VARCHAR2(128),
  "motherTongue"            VARCHAR2(64),
  "qualification"           VARCHAR2(128),
  "experience"              VARCHAR2(255),
  "previousDesignation"     VARCHAR2(128),
  "currentDesignation"       VARCHAR2(128),
  "role"                    VARCHAR2(32) DEFAULT 'employee',
  "status"                  VARCHAR2(32) DEFAULT 'active',
  "departmentId"             VARCHAR2(32),
  "joiningDate"             DATE,
  "relievingDate"           DATE,
  CONSTRAINT fk_user_dept FOREIGN KEY ("departmentId") REFERENCES departments("id") ON DELETE SET NULL
);

CREATE INDEX idx_users_email ON users("email");
CREATE INDEX idx_users_departmentId ON users("departmentId");
CREATE INDEX idx_users_status ON users("status");

-- Education
CREATE TABLE educations (
  "id"                VARCHAR2(32) PRIMARY KEY,
  "userId"            VARCHAR2(32) NOT NULL,
  "level"             VARCHAR2(32) NOT NULL,
  "collegeName"       VARCHAR2(500),
  "rollNumber"        VARCHAR2(64),
  "yearPassout"       VARCHAR2(16),
  "marksScored"       VARCHAR2(32),
  "marksOutOf"        VARCHAR2(32),
  "cgpaScored"        VARCHAR2(32),
  "cgpaOutOf"         VARCHAR2(32),
  "currentBacklogs"   VARCHAR2(32),
  "historyBacklogs"   VARCHAR2(32),
  "breaksInAcademics" VARCHAR2(255),
  CONSTRAINT fk_edu_user FOREIGN KEY ("userId") REFERENCES users("id") ON DELETE CASCADE
);

CREATE INDEX idx_educations_userId ON educations("userId");

-- Leave requests
CREATE TABLE leave_requests (
  "id"            VARCHAR2(32) PRIMARY KEY,
  "userId"        VARCHAR2(32) NOT NULL,
  "userName"      VARCHAR2(255) NOT NULL,
  "type"          VARCHAR2(32) NOT NULL,
  "startDate"     VARCHAR2(32) NOT NULL,
  "endDate"       VARCHAR2(32) NOT NULL,
  "reason"        VARCHAR2(2000) DEFAULT '',
  "status"        VARCHAR2(32) DEFAULT 'pending',
  "createdAt"     DATE DEFAULT CURRENT_TIMESTAMP,
  "approvedById"   VARCHAR2(32),
  "approvedAt"    DATE,
  "rejectedAt"    DATE,
  CONSTRAINT fk_leave_user FOREIGN KEY ("userId") REFERENCES users("id") ON DELETE CASCADE,
  CONSTRAINT fk_leave_approved FOREIGN KEY ("approvedById") REFERENCES users("id")
);

CREATE INDEX idx_leave_requests_userId ON leave_requests("userId");
CREATE INDEX idx_leave_requests_status ON leave_requests("status");

-- Attendances
CREATE TABLE attendances (
  "id"        VARCHAR2(32) PRIMARY KEY,
  "userId"    VARCHAR2(32) NOT NULL,
  "date"      DATE NOT NULL,
  "checkIn"   DATE,
  "checkOut"  DATE,
  "status"    VARCHAR2(32) DEFAULT 'present',
  "createdAt" DATE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_att_user FOREIGN KEY ("userId") REFERENCES users("id") ON DELETE CASCADE
);

CREATE INDEX idx_attendances_userId ON attendances("userId");
CREATE INDEX idx_attendances_date ON attendances("date");

-- Salaries
CREATE TABLE salaries (
  "id"            VARCHAR2(32) PRIMARY KEY,
  "userId"        VARCHAR2(32) NOT NULL,
  "baseAmount"    NUMBER NOT NULL,
  "effectiveFrom" DATE NOT NULL,
  CONSTRAINT fk_sal_user FOREIGN KEY ("userId") REFERENCES users("id") ON DELETE CASCADE
);

CREATE INDEX idx_salaries_userId ON salaries("userId");

-- Payroll records
CREATE TABLE payroll_records (
  "id"          VARCHAR2(32) PRIMARY KEY,
  "userId"      VARCHAR2(32) NOT NULL,
  "periodYear"  NUMBER NOT NULL,
  "periodMonth" NUMBER NOT NULL,
  "gross"       NUMBER NOT NULL,
  "net"         NUMBER NOT NULL,
  "createdAt"   DATE DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_pay_user FOREIGN KEY ("userId") REFERENCES users("id") ON DELETE CASCADE
);

CREATE INDEX idx_payroll_userId ON payroll_records("userId");

-- Resignations
CREATE TABLE resignations (
  "id"           VARCHAR2(32) PRIMARY KEY,
  "userId"       VARCHAR2(32) NOT NULL,
  "userName"     VARCHAR2(255) NOT NULL,
  "explanation"  VARCHAR2(4000) NOT NULL,
  "status"       VARCHAR2(32) DEFAULT 'pending',
  "createdAt"    DATE DEFAULT CURRENT_TIMESTAMP,
  "approvedById" VARCHAR2(32),
  "approvedAt"   DATE,
  CONSTRAINT fk_res_user FOREIGN KEY ("userId") REFERENCES users("id") ON DELETE CASCADE
);

CREATE INDEX idx_resignations_userId ON resignations("userId");
CREATE INDEX idx_resignations_status ON resignations("status");
