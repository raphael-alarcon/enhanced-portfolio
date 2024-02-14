export type Optional<T, K extends keyof T> = Omit<T, K> & {
	[P in keyof T]?: T[P] | undefined;
};
