/**
 * TypeArena Metrics Engine
 * Server-authoritative calculations for typing speed, accuracy, and completion.
 */

export interface TypingMetrics {
  grossWpm: number;
  netWpm: number;
  cpm: number;
  accuracy: number;
  errors: number;
  completionPercentage: number;
}

export function calculateMetrics(
  typedLength: number,
  correctGraphemes: number,
  targetLength: number,
  elapsedMs: number
): TypingMetrics {
  const elapsedMinutes = elapsedMs / 60000;
  
  // Guard against zero time
  if (elapsedMinutes <= 0) {
    return {
      grossWpm: 0,
      netWpm: 0,
      cpm: 0,
      accuracy: 100,
      errors: 0,
      completionPercentage: 0
    };
  }

  // Gross WPM: (total typed / 5) / elapsedMinutes
  const grossWpm = (typedLength / 5) / elapsedMinutes;
  
  const errors = Math.max(0, typedLength - correctGraphemes);

  // Net WPM: max(0, grossWpm - uncorrectedErrors / elapsedMinutes)
  const netWpm = Math.max(0, grossWpm - (errors / elapsedMinutes));

  // CPM: correctGraphemes / elapsedMinutes
  const cpm = correctGraphemes / elapsedMinutes;

  // Accuracy: correctGraphemes / totalTyped * 100
  const accuracy = typedLength > 0 ? (correctGraphemes / typedLength) * 100 : 100;

  // Completion Percentage
  const completionPercentage = targetLength > 0 ? (correctGraphemes / targetLength) * 100 : 0;

  return {
    grossWpm: Math.round(grossWpm),
    netWpm: Math.round(netWpm),
    cpm: Math.round(cpm),
    accuracy: Math.round(accuracy),
    errors,
    completionPercentage: Math.min(100, Math.round(completionPercentage))
  };
}
