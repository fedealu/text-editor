import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class EventService {
  eventOnFile: Subject<Event> = new Subject<Event>();

  constructor() {}

  get event$(): Observable<Event> {
    return this.eventOnFile.asObservable();
  }

  set event(evt) {
    this.eventOnFile.next(evt);
  }
}
