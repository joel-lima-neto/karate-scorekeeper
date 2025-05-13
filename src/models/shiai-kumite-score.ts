import { signal } from "@angular/core";
import { PointType } from "./point-type";
import { PunishmentType } from "./punishment-type";

export class ShiaiKumiteScore {
    public readonly score = signal<number>(0);
    public readonly points = signal<PointType[]>([]);
    public readonly punishments = signal<PunishmentType[]>([]);

    addPoint(point: PointType) {
        this.points.update(points => [...points, point]);
        this.score.update(score => score + point.value);
    }

    addPunishment(punishment: PunishmentType) {
        this.punishments.update(punishments => [...punishments, punishment]);
        this.score.update(score => score - punishment.value);
    }
}