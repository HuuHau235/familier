import { useState } from "react";
import { EmotionView } from "../types/emotion";

export function useEmotion() {
  const [emotions] = useState<EmotionView[]>([
    {
      id: "1",
      memberName: "Mẹ",
      feeling: "Vui",
      emoji: "😊",
      color: "#FFD166",
      note: "Hôm nay đi chợ",
      createdAt: new Date().toISOString(),
    },
  ]);

  return { emotions };
}
