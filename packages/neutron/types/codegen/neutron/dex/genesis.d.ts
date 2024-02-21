import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { TickLiquidity, TickLiquidityAmino, TickLiquiditySDKType } from "./tick_liquidity";
import { LimitOrderTranche, LimitOrderTrancheAmino, LimitOrderTrancheSDKType } from "./limit_order_tranche";
import { LimitOrderTrancheUser, LimitOrderTrancheUserAmino, LimitOrderTrancheUserSDKType } from "./limit_order_tranche_user";
import { PoolMetadata, PoolMetadataAmino, PoolMetadataSDKType } from "./pool_metadata";
import { BinaryWriter } from "../../binary";
/** GenesisState defines the dex module's genesis state. */
export interface GenesisState {
    params: Params;
    tickLiquidityList?: TickLiquidity[];
    inactiveLimitOrderTrancheList?: LimitOrderTranche[];
    limitOrderTrancheUserList?: LimitOrderTrancheUser[];
    poolMetadataList: PoolMetadata[];
    poolCount: bigint;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/neutron.dex.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the dex module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    tick_liquidity_list?: TickLiquidityAmino[];
    inactive_limit_order_tranche_list?: LimitOrderTrancheAmino[];
    limit_order_tranche_user_list?: LimitOrderTrancheUserAmino[];
    pool_metadata_list?: PoolMetadataAmino[];
    pool_count?: string;
}
export interface GenesisStateAminoMsg {
    type: "/neutron.dex.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the dex module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    tick_liquidity_list?: TickLiquiditySDKType[];
    inactive_limit_order_tranche_list?: LimitOrderTrancheSDKType[];
    limit_order_tranche_user_list?: LimitOrderTrancheUserSDKType[];
    pool_metadata_list: PoolMetadataSDKType[];
    pool_count: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
