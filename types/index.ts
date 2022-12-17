/* eslint-disable no-unused-vars */
export interface OrcaCSVRow {
  '+/-': string
  Activity: string
  Agency: string
  Balance: string
  Date: string
  Location: string
  Time: string
}

export type OrcaCSVOutput = OrcaCSVRow[]

export enum ActivityType {
  TAP_OFF,
  TRANSFER,
  BOARDING,
  PASS_LOADED,
  PURCHASE,
  MONEY_LOAD,
  CARD_SALE,
  INSPECTION,
  USE,
  UNKNOWN
}

export interface ProcessedOrcaData {
  cost: number
  balance: number
  time: Date
  line?: string
  stop?: string
  routeNumber?: string
  agency: string
  activity: ActivityType
}

export interface ExtraDataType {
  routeOccurrences: Record<string, number>
}
