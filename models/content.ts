export class SubwayStation {
    name: string
    line: string
    region: string
    transfer: boolean
    color: string

    constructor(stationInfo: { name: string; line: string; region: string; transfer: boolean; color: string }) {
        const { name, line, region, transfer, color } = stationInfo
        this.name = name
        this.line = line
        this.region = region
        this.transfer = transfer
        this.color = color
    }
}
