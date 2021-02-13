import { HabitTemplateResponse } from './habit-template-response.interface';

export interface HabitRecordResponse {
  template: HabitTemplateResponse;
  completedOn: string;
  id: string;
}
