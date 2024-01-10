export interface Card {
  card_id: number;
  card_type: string;
  type: string;
  hasWhy?: boolean | null | undefined;
  audio?: string | null | undefined;
  interstitial_type?: string | null | undefined;
  icon?: string | null | undefined;
  body: string;
  headline?: string | null | undefined;
  headerLabelPrimary?: string | null | undefined;
  headerLabelSecondary?: string | null | undefined;
  hasSignature?: boolean | null | undefined;
  whyBody?: string | null | undefined;
  whyLabel?: string | null | undefined;
  answerOptions?: {
    answer: string;
    correctAnswer: boolean;
    answerHeadline: string;
    answerMessage: string;
  }[];
}
