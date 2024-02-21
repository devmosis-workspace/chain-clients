import { PoolReserves, PoolReservesAmino, PoolReservesSDKType } from "./pool_reserves";
import { BinaryWriter } from "../../binary";
export interface Pool {
    id: bigint;
    lowerTick0?: PoolReserves;
    upperTick1?: PoolReserves;
}
export interface PoolProtoMsg {
    typeUrl: "/neutron.dex.Pool";
    value: Uint8Array;
}
export interface PoolAmino {
    id?: string;
    lower_tick0?: PoolReservesAmino;
    upper_tick1?: PoolReservesAmino;
}
export interface PoolAminoMsg {
    type: "/neutron.dex.Pool";
    value: PoolAmino;
}
export interface PoolSDKType {
    id: bigint;
    lower_tick0?: PoolReservesSDKType;
    upper_tick1?: PoolReservesSDKType;
}
export declare const Pool: {
    typeUrl: string;
    encode(message: Pool, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Pool;
    fromPartial(object: Partial<Pool>): Pool;
    fromAmino(object: PoolAmino): Pool;
    toAmino(message: Pool): PoolAmino;
    fromAminoMsg(object: PoolAminoMsg): Pool;
    fromProtoMsg(message: PoolProtoMsg): Pool;
    toProto(message: Pool): Uint8Array;
    toProtoMsg(message: Pool): PoolProtoMsg;
};
