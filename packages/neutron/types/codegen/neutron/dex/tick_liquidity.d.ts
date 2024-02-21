import { PoolReserves, PoolReservesAmino, PoolReservesSDKType } from "./pool_reserves";
import { LimitOrderTranche, LimitOrderTrancheAmino, LimitOrderTrancheSDKType } from "./limit_order_tranche";
import { BinaryWriter } from "../../binary";
export interface TickLiquidity {
    poolReserves?: PoolReserves;
    limitOrderTranche?: LimitOrderTranche;
}
export interface TickLiquidityProtoMsg {
    typeUrl: "/neutron.dex.TickLiquidity";
    value: Uint8Array;
}
export interface TickLiquidityAmino {
    pool_reserves?: PoolReservesAmino;
    limit_order_tranche?: LimitOrderTrancheAmino;
}
export interface TickLiquidityAminoMsg {
    type: "/neutron.dex.TickLiquidity";
    value: TickLiquidityAmino;
}
export interface TickLiquiditySDKType {
    pool_reserves?: PoolReservesSDKType;
    limit_order_tranche?: LimitOrderTrancheSDKType;
}
export declare const TickLiquidity: {
    typeUrl: string;
    encode(message: TickLiquidity, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TickLiquidity;
    fromPartial(object: Partial<TickLiquidity>): TickLiquidity;
    fromAmino(object: TickLiquidityAmino): TickLiquidity;
    toAmino(message: TickLiquidity): TickLiquidityAmino;
    fromAminoMsg(object: TickLiquidityAminoMsg): TickLiquidity;
    fromProtoMsg(message: TickLiquidityProtoMsg): TickLiquidity;
    toProto(message: TickLiquidity): Uint8Array;
    toProtoMsg(message: TickLiquidity): TickLiquidityProtoMsg;
};
