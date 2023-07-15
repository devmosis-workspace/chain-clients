import { ProofOps, ProofOpsSDKType } from "../../../tendermint/crypto/proof";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponse {
    chainId: string;
    queryId: string;
    result: Uint8Array;
    proofOps?: ProofOps;
    height: Long;
    fromAddress: string;
}
/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponseSDKType {
    chain_id: string;
    query_id: string;
    result: Uint8Array;
    proof_ops?: ProofOpsSDKType;
    height: Long;
    from_address: string;
}
/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponse {
}
/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponseSDKType {
}
export declare const MsgSubmitQueryResponse: {
    encode(message: MsgSubmitQueryResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgSubmitQueryResponse;
    fromPartial(object: Partial<MsgSubmitQueryResponse>): MsgSubmitQueryResponse;
};
export declare const MsgSubmitQueryResponseResponse: {
    encode(_: MsgSubmitQueryResponseResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgSubmitQueryResponseResponse;
    fromPartial(_: Partial<MsgSubmitQueryResponseResponse>): MsgSubmitQueryResponseResponse;
};
