export type Length<T extends readonly any[]> = T extends [] ? never : T['length']
