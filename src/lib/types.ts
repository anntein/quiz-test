export interface Alternative {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  alternatives: Alternative[];
  correctAnswerId: string;
}

export interface QuizCache {
  questions: Question[];
  lastGenerated: number;
} 