import { ProofOps, ProofOpsAmino, ProofOpsSDKType } from "../../../tendermint/crypto/proof";
import { BinaryWriter } from "../../../binary";
/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponse {
    chainId: string;
    queryId: string;
    result: Uint8Array;
    proofOps?: ProofOps;
    height: bigint;
    fromAddress: string;
}
export interface MsgSubmitQueryResponseProtoMsg {
    typeUrl: "/persistence.interchainquery.v1beta1.MsgSubmitQueryResponse";
    value: Uint8Array;
}
/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponseAmino {
    chain_id?: string;
    query_id?: string;
    result?: string;
    proof_ops?: ProofOpsAmino;
    height?: string;
    from_address?: string;
}
export interface MsgSubmitQueryResponseAminoMsg {
    type: "/persistence.interchainquery.v1beta1.MsgSubmitQueryResponse";
    value: MsgSubmitQueryResponseAmino;
}
/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponseSDKType {
    chain_id: string;
    query_id: string;
    result: Uint8Array;
    proof_ops?: ProofOpsSDKType;
    height: bigint;
    from_address: string;
}
/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponse {
}
export interface MsgSubmitQueryResponseResponseProtoMsg {
    typeUrl: "/persistence.interchainquery.v1beta1.MsgSubmitQueryResponseResponse";
    value: Uint8Array;
}
/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponseAmino {
}
export interface MsgSubmitQueryResponseResponseAminoMsg {
    type: "/persistence.interchainquery.v1beta1.MsgSubmitQueryResponseResponse";
    value: MsgSubmitQueryResponseResponseAmino;
}
/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponseSDKType {
}
export declare const MsgSubmitQueryResponse: {
    typeUrl: string;
    encode(message: MsgSubmitQueryResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgSubmitQueryResponse;
    fromPartial(object: Partial<MsgSubmitQueryResponse>): MsgSubmitQueryResponse;
    fromAmino(object: MsgSubmitQueryResponseAmino): MsgSubmitQueryResponse;
    toAmino(message: MsgSubmitQueryResponse): MsgSubmitQueryResponseAmino;
    fromAminoMsg(object: MsgSubmitQueryResponseAminoMsg): MsgSubmitQueryResponse;
    fromProtoMsg(message: MsgSubmitQueryResponseProtoMsg): MsgSubmitQueryResponse;
    toProto(message: MsgSubmitQueryResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitQueryResponse): MsgSubmitQueryResponseProtoMsg;
};
export declare const MsgSubmitQueryResponseResponse: {
    typeUrl: string;
    encode(_: MsgSubmitQueryResponseResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgSubmitQueryResponseResponse;
    fromPartial(_: Partial<MsgSubmitQueryResponseResponse>): MsgSubmitQueryResponseResponse;
    fromAmino(_: MsgSubmitQueryResponseResponseAmino): MsgSubmitQueryResponseResponse;
    toAmino(_: MsgSubmitQueryResponseResponse): MsgSubmitQueryResponseResponseAmino;
    fromAminoMsg(object: MsgSubmitQueryResponseResponseAminoMsg): MsgSubmitQueryResponseResponse;
    fromProtoMsg(message: MsgSubmitQueryResponseResponseProtoMsg): MsgSubmitQueryResponseResponse;
    toProto(message: MsgSubmitQueryResponseResponse): Uint8Array;
    toProtoMsg(message: MsgSubmitQueryResponseResponse): MsgSubmitQueryResponseResponseProtoMsg;
};
