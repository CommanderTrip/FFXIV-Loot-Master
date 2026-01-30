import { RaidAccessory, RaidArmor } from "./enums";

export class Raider {
    name: string;
    neededGear: Array<RaidArmor | RaidAccessory>;
    neededGlazes: number;
    neededTwines: number;

    constructor(name: string, bisRaidGear: Array<RaidArmor | RaidAccessory>) {
        this.name = name;
        this.neededGear = bisRaidGear;
        this.neededGlazes = 5; // At most, need 5
        this.neededTwines = 5;

        this.getNeededUpgrades();
    }

    getNeededUpgrades(): number {
        this.neededGear.forEach((gear) => {
            if (Object.values(RaidArmor).includes(gear as RaidArmor)) {
                this.neededTwines -= 1;
            } else {
                this.neededGlazes -= 1;
            }
        });
        return 0;
    }
}
