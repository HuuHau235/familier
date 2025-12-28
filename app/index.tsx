import { View, FlatList } from "react-native";
import EmotionCard from "../components/emotion/EmotionCard";
import { useEmotion } from "../hooks/useEmotion";

export default function HomeScreen() {
  const { emotions } = useEmotion();

  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={emotions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <EmotionCard emotion={item} />
        )}
      />
    </View>
  );
}
