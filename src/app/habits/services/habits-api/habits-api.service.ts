import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from 'src/app/core/interfaces/http-response.interface';

import { HttpService } from '../../../core/services/http/http.service';
import { HabitRecordResponse } from '../../interfaces/habit-record-response.interface';
import { HabitTemplateResponse } from '../../interfaces/habit-template-response.interface';
import { WeeklyHabitRecordResponse } from '../../interfaces/weekly-habit-record-response.interface';

@Injectable({
  providedIn: 'root'
})
export class HabitsApiService {
  constructor(private httpService: HttpService) {}

  public getHabitsInRange(
    startDate: string,
    endDate: string
  ): HttpResponse<WeeklyHabitRecordResponse> {
    const params = new HttpParams({
      fromObject: {
        startDate,
        endDate
      }
    }).toString();

    return this.httpService.get(`habit-records?${params}`);
  }

  public getHabitTemplates(): HttpResponse<HabitTemplateResponse[]> {
    return this.httpService.get(`habit-templates`);
  }

  public setHabitCompleted(
    template: string,
    completedOn: string
  ): HttpResponse<HabitRecordResponse> {
    return this.httpService.post('habit-records', { template, completedOn });
  }

  public setHabitIncomplete(recordId: string): Observable<void> {
    return this.httpService.delete(`habit-records/${recordId}`);
  }

  public createHabitTemplate(template: {
    title: string;
    flair: string;
    color: string;
  }): HttpResponse<HabitTemplateResponse> {
    return this.httpService.post('habit-templates', template);
  }

  public deleteHabitTemplate(id: string): Observable<void> {
    return this.httpService.delete(`habit-templates/${id}`);
  }
}
