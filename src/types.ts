// src/types.ts
export interface Reminder {
  id: string;
  text: string;
  createdAt: string; // ISO string
  isCompleted: boolean;
}