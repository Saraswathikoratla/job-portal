export interface JobRequest {
  title: string;
  company: string;
  location: string;
  skills: string;
  experience?: number;
  salary?: number;
  jobType: string;
  description: string;
}