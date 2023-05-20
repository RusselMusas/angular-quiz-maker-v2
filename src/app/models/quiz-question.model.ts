export interface QuizQuestion {
    response_code: number;
    results: Result[];
}

export interface Result {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    all_answers: string[]
}

export interface FormResponse {
    inputResponse1: string;
    inputResponse2: string;
    inputResponse3: string;
    inputResponse4: string;
    inputResponse5: string;
}