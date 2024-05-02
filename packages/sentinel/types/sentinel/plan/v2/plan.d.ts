import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Status } from "../../types/v1/status";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface Plan {
    id: bigint;
    providerAddress: string;
    duration: Duration;
    gigabytes: bigint;
    prices: Coin[];
    status: Status;
    statusAt: Timestamp;
}
export interface PlanProtoMsg {
    typeUrl: "/sentinel.plan.v2.Plan";
    value: Uint8Array;
}
export interface PlanAmino {
    id?: string;
    provider_address?: string;
    duration?: DurationAmino;
    gigabytes?: string;
    prices?: CoinAmino[];
    status?: Status;
    status_at?: string;
}
export interface PlanAminoMsg {
    type: "/sentinel.plan.v2.Plan";
    value: PlanAmino;
}
export interface PlanSDKType {
    id: bigint;
    provider_address: string;
    duration: DurationSDKType;
    gigabytes: bigint;
    prices: CoinSDKType[];
    status: Status;
    status_at: TimestampSDKType;
}
export declare const Plan: {
    typeUrl: string;
    encode(message: Plan, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Plan;
    fromPartial(object: Partial<Plan>): Plan;
    fromAmino(object: PlanAmino): Plan;
    toAmino(message: Plan): PlanAmino;
    fromAminoMsg(object: PlanAminoMsg): Plan;
    fromProtoMsg(message: PlanProtoMsg): Plan;
    toProto(message: Plan): Uint8Array;
    toProtoMsg(message: Plan): PlanProtoMsg;
};
