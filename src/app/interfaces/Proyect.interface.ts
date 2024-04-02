import { ITech } from "./Tech.interface";

export interface IProyect {
  id: string;
  name: string;
  description: string;
  banner: string;
  link?: string;
  imgs: string[];
  techs: ITech[];
}
