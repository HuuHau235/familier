import { View, Text, StyleSheet } from "react-native";
import { Emotion } from "../../types/emotion";
import { colors } from "../../theme/colors";

type Props = {
  emotion: Emotion;
};

export default function EmotionCard({ emotion }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{emotion.memberName}</Text>
      <Text>{emotion.feeling}</Text>
      <Text style={styles.note}>{emotion.note}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  name: {
    fontWeight: "bold",
  },
  note: {
    color: colors.textSecondary,
  },
});
