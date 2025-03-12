import { Vase } from "./core/vase";
import { algorythme } from "./which-floor";

it('should find total floors when totalFloors is provided', () => {
    const floorLimit = 57234;
    const totalFloors = 1000000;
    const vaseMock = {
        throwVase: jest.fn((floor: number) => ({
            isBroken: floor < floorLimit,
        })),
    } as unknown as Vase;

    const result = algorythme(totalFloors, vaseMock);
    expect(result.floor).toBe(floorLimit);
});