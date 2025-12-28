export interface Emotion {
  id: string;
  feeling: string;
  emoji: string;
  memberName: string;
  color: string;
  note?: string;
  createdAt: string;
}

export interface EmotionView extends Emotion {
  memberName: string;
}
