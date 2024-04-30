import { Coin, CoinAmino, CoinSDKType } from "../cosmos/base/v1beta1/coin";
import { Any, AnyAmino, AnySDKType } from "../google/protobuf/any";
import { Timestamp, TimestampSDKType } from "../google/protobuf/timestamp";
import { BinaryWriter } from "../binary";
/** Pool defines the generalized structure of a liquidity pool coming from any source chain to qoracle. */
export interface Pool {
    /** The identifier of this pool in the source chain */
    id: string;
    assets: Coin[];
    tvl: Uint8Array;
    apy: Uint8Array;
    /** Raw data of pool structure stored in the source chain */
    raw?: Any;
    /** Last time this pool was updated */
    updatedAt: Timestamp;
}
export interface PoolProtoMsg {
    typeUrl: "/quasarlabs.quasarnode.qoracle.Pool";
    value: Uint8Array;
}
/** Pool defines the generalized structure of a liquidity pool coming from any source chain to qoracle. */
export interface PoolAmino {
    /** The identifier of this pool in the source chain */
    id?: string;
    assets?: CoinAmino[];
    tvl?: string;
    apy?: string;
    /** Raw data of pool structure stored in the source chain */
    raw?: AnyAmino;
    /** Last time this pool was updated */
    updated_at?: string;
}
export interface PoolAminoMsg {
    type: "/quasarlabs.quasarnode.qoracle.Pool";
    value: PoolAmino;
}
/** Pool defines the generalized structure of a liquidity pool coming from any source chain to qoracle. */
export interface PoolSDKType {
    id: string;
    assets: CoinSDKType[];
    tvl: Uint8Array;
    apy: Uint8Array;
    raw?: AnySDKType;
    updated_at: TimestampSDKType;
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
