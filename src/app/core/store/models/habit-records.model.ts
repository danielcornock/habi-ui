import { WeeklyHabitRecordResponse } from 'src/app/habits/interfaces/weekly-habit-record-response.interface';

export interface HabitRecordsState {
  days: WeeklyHabitRecordResponse;
  activeMonth: string;
}
