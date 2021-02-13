import { Dictionary } from 'lodash';

import { HabitRecordResponse } from './habit-record-response.interface';

export type WeeklyHabitRecordResponse = Dictionary<HabitRecordResponse[]>;
