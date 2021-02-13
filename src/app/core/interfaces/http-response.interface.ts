import { Observable } from 'rxjs';

export type HttpResponse<T> = Observable<HttpResponseObject<T>>;

export interface HttpResponseObject<T> {
  data: T;
}
