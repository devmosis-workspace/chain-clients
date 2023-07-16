import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Query, QuerySDKType } from "./genesis";
import { Tx, TxSDKType } from "../../../cosmos/tx/v1beta1/tx";
import { TxResponse, TxResponseSDKType } from "../../../cosmos/base/abci/v1beta1/abci";
import { TxProof, TxProofSDKType } from "../../../tendermint/types/types";
import { Header, HeaderSDKType } from "../../../ibc/lightclients/tendermint/v1/tendermint";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryRequestsRequest {
  pagination?: PageRequest;
  chainId: string;
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
  encode(message: QueryRequestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseQueryRequestsResponse(): QueryRequestsResponse {
  return {
    queries: [],
    pagination: undefined
  };
}
export const QueryRequestsResponse = {
  encode(message: QueryRequestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: GetTxWithProofResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};