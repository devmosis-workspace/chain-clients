import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { Status } from "../../types/v1/status";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
export interface Plan {
    id: bigint;
    provider: string;
    price: Coin[];
    validity: Duration;
    bytes: string;
    status: Status;
    statusAt: Timestamp;
}
export interface PlanProtoMsg {
    typeUrl: "/sentinel.plan.v1.Plan";
    value: Uint8Array;
}
export interface PlanAmino {
    id?: string;
    provider?: string;
    price?: CoinAmino[];
    validity?: DurationAmino;
    bytes?: string;
    status?: Status;
    status_at?: string;
}
export interface PlanAminoMsg {
    type: "/sentinel.plan.v1.Plan";
    value: PlanAmino;
}
export interface PlanSDKType {
    id: bigint;
    provider: string;
    price: CoinSDKType[];
    validity: DurationSDKType;
    bytes: string;
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
