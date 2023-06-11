/**
 * Compares two maps for value equality
 * @param {Map<string, number} m1 
 * @param {Map<string, number} m2 
 * @returns {boolean} true if equal
 */
export const compareMaps = (m1, m2) => {
    if (m1.size !== m2.size) {
        return false;
    }

    for (const [key, val] of m1) {
        if (m2.get(key) !== val) {
            return false;
        }
    }

    return true;
}

/**
 * Converts a Map to a string representation: [K1: V1, K2: V2, ..., Kn: Vn]
 * @param {Map<string, number>} m
 * @returns {string} 
 */
export const stringifyMap = (m) => `[${[...m].map(([key, val]) => `${key}: ${val}`).join(', ')}]`;
