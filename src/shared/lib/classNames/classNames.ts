export type Mods = Record<string, boolean | string>

// eslint-disable-next-line max-len
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.keys(mods)
            .filter((key) => mods[key]),
    ].join(' ');
}
