import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Query, QueryAmino, QuerySDKType } from "./genesis";
import { Tx, TxAmino, TxSDKType } from "../../../cosmos/tx/v1beta1/tx";
import { TxResponse, TxResponseAmino, TxResponseSDKType } from "../../../cosmos/base/abci/v1beta1/abci";
import { TxProof, TxProofAmino, TxProofSDKType } from "../../../tendermint/types/types";
import { Header, HeaderAmino, HeaderSDKType } from "../../../ibc/lightclients/tendermint/v1/tendermint";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryRequestsRequest {
  pagination?: PageRequest;
  chainId: string;
}
export interface QueryRequestsRequestProtoMsg {
  typeUrl: "/persistence.interchainquery.v1beta1.QueryRequestsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryRequestsRequestAmino {
  pagination?: PageRequestAmino;
  chain_id?: string;
}
export interface QueryRequestsRequestAminoMsg {
  type: "/persistence.interchainquery.v1beta1.QueryRequestsRequest";
  value: QueryRequestsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryRequestsRequestSDKType {
  pagination?: PageRequestSDKType;
  chain_id: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryRequestsResponse {
  /** params defines the parameters of the module. */
  queries: Query[];
  pagination?: PageResponse;
}
export interface QueryRequestsResponseProtoMsg {
  typeUrl: "/persistence.interchainquery.v1beta1.QueryRequestsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryRequestsResponseAmino {
  /** params defines the parameters of the module. */
  queries?: QueryAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryRequestsResponseAminoMsg {
  type: "/persistence.interchainquery.v1beta1.QueryRequestsResponse";
  value: QueryRequestsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryRequestsResponseSDKType {
  queries: QuerySDKType[];
  pagination?: PageResponseSDKType;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxWithProofResponse {
  /** tx is the queried transaction. */
  tx?: Tx;
  /** tx_response is the queried TxResponses. */
  txResponse?: TxResponse;
  /** proof is the tmproto.TxProof for the queried tx */
  proof?: TxProof;
  /** ibc-go header to validate txs */
  header?: Header;
}
export interface GetTxWithProofResponseProtoMsg {
  typeUrl: "/persistence.interchainquery.v1beta1.GetTxWithProofResponse";
  value: Uint8Array;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxWithProofResponseAmino {
  /** tx is the queried transaction. */
  tx?: TxAmino;
  /** tx_response is the queried TxResponses. */
  tx_response?: TxResponseAmino;
  /** proof is the tmproto.TxProof for the queried tx */
  proof?: TxProofAmino;
  /** ibc-go header to validate txs */
  header?: HeaderAmino;
}
export interface GetTxWithProofResponseAminoMsg {
  type: "/persistence.interchainquery.v1beta1.GetTxWithProofResponse";
  value: GetTxWithProofResponseAmino;
}
/** GetTxResponse is the response type for the Service.GetTx method. */
export interface GetTxWithProofResponseSDKType {
  tx?: TxSDKType;
  tx_response?: TxResponseSDKType;
  proof?: TxProofSDKType;
  header?: HeaderSDKType;
}
function createBaseQueryRequestsRequest(): QueryRequestsRequest {
  return {
    pagination: undefined,
    chainId: ""
  };
}
export const QueryRequestsRequest = {
  typeUrl: "/persistence.interchainquery.v1beta1.QueryRequestsRequest",
  encode(message: QueryRequestsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    return writer;
  },
  fromJSON(object: any): QueryRequestsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
      chainId: isSet(object.chainId) ? String(object.chainId) : ""
    };
  },
  fromPartial(object: Partial<QueryRequestsRequest>): QueryRequestsRequest {
    const message = createBaseQueryRequestsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    message.chainId = object.chainId ?? "";
    return message;
  },
  fromAmino(object: QueryRequestsRequestAmino): QueryRequestsRequest {
    const message = createBaseQueryRequestsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    return message;
  },
  toAmino(message: QueryRequestsRequest): QueryRequestsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.chain_id = message.chainId;
    return obj;
  },
  fromAminoMsg(object: QueryRequestsRequestAminoMsg): QueryRequestsRequest {
    return QueryRequestsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestsRequestProtoMsg): QueryRequestsRequest {
    return QueryRequestsRequest.decode(message.value);
  },
  toProto(message: QueryRequestsRequest): Uint8Array {
    return QueryRequestsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestsRequest): QueryRequestsRequestProtoMsg {
    return {
      typeUrl: "/persistence.interchainquery.v1beta1.QueryRequestsRequest",
      value: QueryRequestsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRequestsResponse(): QueryRequestsResponse {
  return {
    queries: [],
    pagination: undefined
  };
}
export const QueryRequestsResponse = {
  typeUrl: "/persistence.interchainquery.v1beta1.QueryRequestsResponse",
  encode(message: QueryRequestsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.queries) {
      Query.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryRequestsResponse {
    return {
      queries: Array.isArray(object?.queries) ? object.queries.map((e: any) => Query.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryRequestsResponse>): QueryRequestsResponse {
    const message = createBaseQueryRequestsResponse();
    message.queries = object.queries?.map(e => Query.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryRequestsResponseAmino): QueryRequestsResponse {
    const message = createBaseQueryRequestsResponse();
    message.queries = object.queries?.map(e => Query.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryRequestsResponse): QueryRequestsResponseAmino {
    const obj: any = {};
    if (message.queries) {
      obj.queries = message.queries.map(e => e ? Query.toAmino(e) : undefined);
    } else {
      obj.queries = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRequestsResponseAminoMsg): QueryRequestsResponse {
    return QueryRequestsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestsResponseProtoMsg): QueryRequestsResponse {
    return QueryRequestsResponse.decode(message.value);
  },
  toProto(message: QueryRequestsResponse): Uint8Array {
    return QueryRequestsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRequestsResponse): QueryRequestsResponseProtoMsg {
    return {
      typeUrl: "/persistence.interchainquery.v1beta1.QueryRequestsResponse",
      value: QueryRequestsResponse.encode(message).finish()
    };
  }
};
function createBaseGetTxWithProofResponse(): GetTxWithProofResponse {
  return {
    tx: undefined,
    txResponse: undefined,
    proof: undefined,
    header: undefined
  };
}
export const GetTxWithProofResponse = {
  typeUrl: "/persistence.interchainquery.v1beta1.GetTxWithProofResponse",
  encode(message: GetTxWithProofResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tx !== undefined) {
      Tx.encode(message.tx, writer.uint32(10).fork()).ldelim();
    }
    if (message.txResponse !== undefined) {
      TxResponse.encode(message.txResponse, writer.uint32(18).fork()).ldelim();
    }
    if (message.proof !== undefined) {
      TxProof.encode(message.proof, writer.uint32(26).fork()).ldelim();
    }
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GetTxWithProofResponse {
    return {
      tx: isSet(object.tx) ? Tx.fromJSON(object.tx) : undefined,
      txResponse: isSet(object.txResponse) ? TxResponse.fromJSON(object.txResponse) : undefined,
      proof: isSet(object.proof) ? TxProof.fromJSON(object.proof) : undefined,
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined
    };
  },
  fromPartial(object: Partial<GetTxWithProofResponse>): GetTxWithProofResponse {
    const message = createBaseGetTxWithProofResponse();
    message.tx = object.tx !== undefined && object.tx !== null ? Tx.fromPartial(object.tx) : undefined;
    message.txResponse = object.txResponse !== undefined && object.txResponse !== null ? TxResponse.fromPartial(object.txResponse) : undefined;
    message.proof = object.proof !== undefined && object.proof !== null ? TxProof.fromPartial(object.proof) : undefined;
    message.header = object.header !== undefined && object.header !== null ? Header.fromPartial(object.header) : undefined;
    return message;
  },
  fromAmino(object: GetTxWithProofResponseAmino): GetTxWithProofResponse {
    const message = createBaseGetTxWithProofResponse();
    if (object.tx !== undefined && object.tx !== null) {
      message.tx = Tx.fromAmino(object.tx);
    }
    if (object.tx_response !== undefined && object.tx_response !== null) {
      message.txResponse = TxResponse.fromAmino(object.tx_response);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = TxProof.fromAmino(object.proof);
    }
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromAmino(object.header);
    }
    return message;
  },
  toAmino(message: GetTxWithProofResponse): GetTxWithProofResponseAmino {
    const obj: any = {};
    obj.tx = message.tx ? Tx.toAmino(message.tx) : undefined;
    obj.tx_response = message.txResponse ? TxResponse.toAmino(message.txResponse) : undefined;
    obj.proof = message.proof ? TxProof.toAmino(message.proof) : undefined;
    obj.header = message.header ? Header.toAmino(message.header) : undefined;
    return obj;
  },
  fromAminoMsg(object: GetTxWithProofResponseAminoMsg): GetTxWithProofResponse {
    return GetTxWithProofResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: GetTxWithProofResponseProtoMsg): GetTxWithProofResponse {
    return GetTxWithProofResponse.decode(message.value);
  },
  toProto(message: GetTxWithProofResponse): Uint8Array {
    return GetTxWithProofResponse.encode(message).finish();
  },
  toProtoMsg(message: GetTxWithProofResponse): GetTxWithProofResponseProtoMsg {
    return {
      typeUrl: "/persistence.interchainquery.v1beta1.GetTxWithProofResponse",
      value: GetTxWithProofResponse.encode(message).finish()
    };
  }
};