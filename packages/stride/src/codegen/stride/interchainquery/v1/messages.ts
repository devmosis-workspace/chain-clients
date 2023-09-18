import { ProofOps, ProofOpsAmino, ProofOpsSDKType } from "../../../tendermint/crypto/proof";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponse {
  chainId: string;
  queryId: string;
  result: Uint8Array;
  proofOps: ProofOps;
  height: bigint;
  fromAddress: string;
}
export interface MsgSubmitQueryResponseProtoMsg {
  typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse";
  value: Uint8Array;
}
/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponseAmino {
  chain_id: string;
  query_id: string;
  result: Uint8Array;
  proof_ops?: ProofOpsAmino;
  height: string;
  from_address: string;
}
export interface MsgSubmitQueryResponseAminoMsg {
  type: "/stride.interchainquery.v1.MsgSubmitQueryResponse";
  value: MsgSubmitQueryResponseAmino;
}
/** MsgSubmitQueryResponse represents a message type to fulfil a query request. */
export interface MsgSubmitQueryResponseSDKType {
  chain_id: string;
  query_id: string;
  result: Uint8Array;
  proof_ops: ProofOpsSDKType;
  height: bigint;
  from_address: string;
}
/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponse {}
export interface MsgSubmitQueryResponseResponseProtoMsg {
  typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponseResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponseAmino {}
export interface MsgSubmitQueryResponseResponseAminoMsg {
  type: "/stride.interchainquery.v1.MsgSubmitQueryResponseResponse";
  value: MsgSubmitQueryResponseResponseAmino;
}
/**
 * MsgSubmitQueryResponseResponse defines the MsgSubmitQueryResponse response
 * type.
 */
export interface MsgSubmitQueryResponseResponseSDKType {}
function createBaseMsgSubmitQueryResponse(): MsgSubmitQueryResponse {
  return {
    chainId: "",
    queryId: "",
    result: new Uint8Array(),
    proofOps: ProofOps.fromPartial({}),
    height: BigInt(0),
    fromAddress: ""
  };
}
export const MsgSubmitQueryResponse = {
  typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
  encode(message: MsgSubmitQueryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.queryId !== "") {
      writer.uint32(18).string(message.queryId);
    }
    if (message.result.length !== 0) {
      writer.uint32(26).bytes(message.result);
    }
    if (message.proofOps !== undefined) {
      ProofOps.encode(message.proofOps, writer.uint32(34).fork()).ldelim();
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(40).int64(message.height);
    }
    if (message.fromAddress !== "") {
      writer.uint32(50).string(message.fromAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgSubmitQueryResponse {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      queryId: isSet(object.queryId) ? String(object.queryId) : "",
      result: isSet(object.result) ? bytesFromBase64(object.result) : new Uint8Array(),
      proofOps: isSet(object.proofOps) ? ProofOps.fromJSON(object.proofOps) : undefined,
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgSubmitQueryResponse>): MsgSubmitQueryResponse {
    const message = createBaseMsgSubmitQueryResponse();
    message.chainId = object.chainId ?? "";
    message.queryId = object.queryId ?? "";
    message.result = object.result ?? new Uint8Array();
    message.proofOps = object.proofOps !== undefined && object.proofOps !== null ? ProofOps.fromPartial(object.proofOps) : undefined;
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.fromAddress = object.fromAddress ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitQueryResponseAmino): MsgSubmitQueryResponse {
    return {
      chainId: object.chain_id,
      queryId: object.query_id,
      result: object.result,
      proofOps: object?.proof_ops ? ProofOps.fromAmino(object.proof_ops) : undefined,
      height: BigInt(object.height),
      fromAddress: object.from_address
    };
  },
  toAmino(message: MsgSubmitQueryResponse): MsgSubmitQueryResponseAmino {
    const obj: any = {};
    obj.chain_id = message.chainId;
    obj.query_id = message.queryId;
    obj.result = message.result;
    obj.proof_ops = message.proofOps ? ProofOps.toAmino(message.proofOps) : undefined;
    obj.height = message.height ? message.height.toString() : undefined;
    obj.from_address = message.fromAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitQueryResponseAminoMsg): MsgSubmitQueryResponse {
    return MsgSubmitQueryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitQueryResponseProtoMsg): MsgSubmitQueryResponse {
    return MsgSubmitQueryResponse.decode(message.value);
  },
  toProto(message: MsgSubmitQueryResponse): Uint8Array {
    return MsgSubmitQueryResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitQueryResponse): MsgSubmitQueryResponseProtoMsg {
    return {
      typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponse",
      value: MsgSubmitQueryResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSubmitQueryResponseResponse(): MsgSubmitQueryResponseResponse {
  return {};
}
export const MsgSubmitQueryResponseResponse = {
  typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponseResponse",
  encode(_: MsgSubmitQueryResponseResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSubmitQueryResponseResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSubmitQueryResponseResponse>): MsgSubmitQueryResponseResponse {
    const message = createBaseMsgSubmitQueryResponseResponse();
    return message;
  },
  fromAmino(_: MsgSubmitQueryResponseResponseAmino): MsgSubmitQueryResponseResponse {
    return {};
  },
  toAmino(_: MsgSubmitQueryResponseResponse): MsgSubmitQueryResponseResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSubmitQueryResponseResponseAminoMsg): MsgSubmitQueryResponseResponse {
    return MsgSubmitQueryResponseResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitQueryResponseResponseProtoMsg): MsgSubmitQueryResponseResponse {
    return MsgSubmitQueryResponseResponse.decode(message.value);
  },
  toProto(message: MsgSubmitQueryResponseResponse): Uint8Array {
    return MsgSubmitQueryResponseResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitQueryResponseResponse): MsgSubmitQueryResponseResponseProtoMsg {
    return {
      typeUrl: "/stride.interchainquery.v1.MsgSubmitQueryResponseResponse",
      value: MsgSubmitQueryResponseResponse.encode(message).finish()
    };
  }
};