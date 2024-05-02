import { Plan, PlanAmino, PlanSDKType } from "./plan";
import { BinaryWriter } from "../../../binary";
export interface GenesisPlan {
    plan: Plan;
    nodes: string[];
}
export interface GenesisPlanProtoMsg {
    typeUrl: "/sentinel.plan.v2.GenesisPlan";
    value: Uint8Array;
}
export interface GenesisPlanAmino {
    plan?: PlanAmino;
    nodes?: string[];
}
export interface GenesisPlanAminoMsg {
    type: "/sentinel.plan.v2.GenesisPlan";
    value: GenesisPlanAmino;
}
export interface GenesisPlanSDKType {
    plan: PlanSDKType;
    nodes: string[];
}
export declare const GenesisPlan: {
    typeUrl: string;
    encode(message: GenesisPlan, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisPlan;
    fromPartial(object: Partial<GenesisPlan>): GenesisPlan;
    fromAmino(object: GenesisPlanAmino): GenesisPlan;
    toAmino(message: GenesisPlan): GenesisPlanAmino;
    fromAminoMsg(object: GenesisPlanAminoMsg): GenesisPlan;
    fromProtoMsg(message: GenesisPlanProtoMsg): GenesisPlan;
    toProto(message: GenesisPlan): Uint8Array;
    toProtoMsg(message: GenesisPlan): GenesisPlanProtoMsg;
};
