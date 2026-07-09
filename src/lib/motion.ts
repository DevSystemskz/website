/** Кривая для плавных появлений (ease-out-expo-подобная) */
export const smoothEase = [0.22, 1, 0.36, 1] as const;

export const springLift = { type: "spring" as const, stiffness: 320, damping: 26 };

export const springSnappy = { type: "spring" as const, stiffness: 420, damping: 30 };

