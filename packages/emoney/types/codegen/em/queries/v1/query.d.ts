import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface QueryCirculatingRequest {
}
export interface QueryCirculatingRequestSDKType {
}
export interface QueryCirculatingResponse {
    total: Coin[];
}
export interface QueryCirculatingResponseSDKType {
    total: CoinSDKType[];
}
export interface QuerySpendableRequest {
    address: string;
}
export interface QuerySpendableRequestSDKType {
    address: string;
}
export interface QuerySpendableResponse {
    balance: Coin[];
}
export interface QuerySpendableResponseSDKType {
    balance: CoinSDKType[];
}
export interface QueryMissedBlocksRequest {
    /** cons_address is the address to query the missed blocks signing info */
    consAddress: string;
}
export interface QueryMissedBlocksRequestSDKType {
    cons_address: string;
}
export interface QueryMissedBlocksResponse {
    /** val_signing_info is the signing info of requested val cons address */
    missedBlocksInfo?: MissedBlocksInfo;
}
export interface QueryMissedBlocksResponseSDKType {
    missed_blocks_info?: MissedBlocksInfoSDKType;
}
/** ValidatorSigningInfo defines a validator's missed blocks info. */
export interface MissedBlocksInfo {
    consAddress: string;
    /** missed blocks counter (to avoid scanning the array every time) */
    missedBlocksCounter: Long;
    totalBlocksCounter: Long;
}
/** ValidatorSigningInfo defines a validator's missed blocks info. */
export interface MissedBlocksInfoSDKType {
    cons_address: string;
    missed_blocks_counter: Long;
    total_blocks_counter: Long;
}
export declare const QueryCirculatingRequest: {
    encode(_: QueryCirculatingRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): QueryCirculatingRequest;
    fromPartial(_: Partial<QueryCirculatingRequest>): QueryCirculatingRequest;
};
export declare const QueryCirculatingResponse: {
    encode(message: QueryCirculatingResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryCirculatingResponse;
    fromPartial(object: Partial<QueryCirculatingResponse>): QueryCirculatingResponse;
};
export declare const QuerySpendableRequest: {
    encode(message: QuerySpendableRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySpendableRequest;
    fromPartial(object: Partial<QuerySpendableRequest>): QuerySpendableRequest;
};
export declare const QuerySpendableResponse: {
    encode(message: QuerySpendableResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QuerySpendableResponse;
    fromPartial(object: Partial<QuerySpendableResponse>): QuerySpendableResponse;
};
export declare const QueryMissedBlocksRequest: {
    encode(message: QueryMissedBlocksRequest, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMissedBlocksRequest;
    fromPartial(object: Partial<QueryMissedBlocksRequest>): QueryMissedBlocksRequest;
};
export declare const QueryMissedBlocksResponse: {
    encode(message: QueryMissedBlocksResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): QueryMissedBlocksResponse;
    fromPartial(object: Partial<QueryMissedBlocksResponse>): QueryMissedBlocksResponse;
};
export declare const MissedBlocksInfo: {
    encode(message: MissedBlocksInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MissedBlocksInfo;
    fromPartial(object: Partial<MissedBlocksInfo>): MissedBlocksInfo;
};
