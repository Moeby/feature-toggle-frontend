import {Status} from "./status";

export interface Feature {
  id: string;
  displayName?: string;
  technicalName: string;
  description: string;
  expirationDate?: Date;
  status: Status,
  peopleIds?: string[];
}
