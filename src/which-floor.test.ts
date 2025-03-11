import { algorythme } from "./which-floor";


test('should find total floors when totalFloors is provided', () => {
    const result = algorythme(10000, 2222);
    expect(result.floor).toBe(2222);
});

test('should return essais to 2 when floorLimit is 25% higher of lesser than totalFloors', () => {
    const higher = algorythme(10000, 7500);
    const lesser = algorythme(10000, 2500);
    expect(higher.essais).toBe(2);
    expect(lesser.essais).toBe(2);
});

test('should throw an error when floorLimit is less than totalFloors', () => {
    expect(() => { algorythme(4567, 100000); }).toThrow("Floor not found");
});
