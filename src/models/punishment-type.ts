export interface PunishmentType {
    name: string;
    value: number;
    pointAssignmentTarget: PunishmentPointAssignmentTarget;
}

export enum PunishmentPointAssignmentTarget {
    Self,
    Other
}