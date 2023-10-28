import { Params, ParamsAmino, ParamsSDKType } from "./genesis";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Valset, ValsetProtoMsg, ValsetAmino, ValsetSDKType, DataCommitment, DataCommitmentProtoMsg, DataCommitmentAmino, DataCommitmentSDKType } from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryParamsRequest */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/celestia.qgb.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse */
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse */
export interface QueryParamsResponseAmino {
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/celestia.qgb.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryAttestationRequestByNonceRequest */
export interface QueryAttestationRequestByNonceRequest {
  /** QueryAttestationRequestByNonceRequest */
  nonce: bigint;
}
export interface QueryAttestationRequestByNonceRequestProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryAttestationRequestByNonceRequest";
  value: Uint8Array;
}
/** QueryAttestationRequestByNonceRequest */
export interface QueryAttestationRequestByNonceRequestAmino {
  /** QueryAttestationRequestByNonceRequest */
  nonce: string;
}
export interface QueryAttestationRequestByNonceRequestAminoMsg {
  type: "/celestia.qgb.v1.QueryAttestationRequestByNonceRequest";
  value: QueryAttestationRequestByNonceRequestAmino;
}
/** QueryAttestationRequestByNonceRequest */
export interface QueryAttestationRequestByNonceRequestSDKType {
  nonce: bigint;
}
/** QueryAttestationRequestByNonceResponse */
export interface QueryAttestationRequestByNonceResponse {
  /**
   * AttestationRequestI is either a Data Commitment or a Valset.
   * This was decided as part of the universal nonce approach under:
   * https://github.com/celestiaorg/celestia-app/issues/468#issuecomment-1156887715
   */
  attestation: (Valset & DataCommitment & Any) | undefined;
}
export interface QueryAttestationRequestByNonceResponseProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryAttestationRequestByNonceResponse";
  value: Uint8Array;
}
export type QueryAttestationRequestByNonceResponseEncoded = Omit<QueryAttestationRequestByNonceResponse, "attestation"> & {
  /**
   * AttestationRequestI is either a Data Commitment or a Valset.
   * This was decided as part of the universal nonce approach under:
   * https://github.com/celestiaorg/celestia-app/issues/468#issuecomment-1156887715
   */
  attestation?: ValsetProtoMsg | DataCommitmentProtoMsg | AnyProtoMsg | undefined;
};
/** QueryAttestationRequestByNonceResponse */
export interface QueryAttestationRequestByNonceResponseAmino {
  /**
   * AttestationRequestI is either a Data Commitment or a Valset.
   * This was decided as part of the universal nonce approach under:
   * https://github.com/celestiaorg/celestia-app/issues/468#issuecomment-1156887715
   */
  attestation?: AnyAmino;
}
export interface QueryAttestationRequestByNonceResponseAminoMsg {
  type: "/celestia.qgb.v1.QueryAttestationRequestByNonceResponse";
  value: QueryAttestationRequestByNonceResponseAmino;
}
/** QueryAttestationRequestByNonceResponse */
export interface QueryAttestationRequestByNonceResponseSDKType {
  attestation: ValsetSDKType | DataCommitmentSDKType | AnySDKType | undefined;
}
/** QueryLatestAttestationNonceRequest latest attestation nonce request */
export interface QueryLatestAttestationNonceRequest {}
export interface QueryLatestAttestationNonceRequestProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryLatestAttestationNonceRequest";
  value: Uint8Array;
}
/** QueryLatestAttestationNonceRequest latest attestation nonce request */
export interface QueryLatestAttestationNonceRequestAmino {}
export interface QueryLatestAttestationNonceRequestAminoMsg {
  type: "/celestia.qgb.v1.QueryLatestAttestationNonceRequest";
  value: QueryLatestAttestationNonceRequestAmino;
}
/** QueryLatestAttestationNonceRequest latest attestation nonce request */
export interface QueryLatestAttestationNonceRequestSDKType {}
/** QueryLatestAttestationNonceResponse latest attestation nonce response */
export interface QueryLatestAttestationNonceResponse {
  /** QueryLatestAttestationNonceResponse latest attestation nonce response */
  nonce: bigint;
}
export interface QueryLatestAttestationNonceResponseProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryLatestAttestationNonceResponse";
  value: Uint8Array;
}
/** QueryLatestAttestationNonceResponse latest attestation nonce response */
export interface QueryLatestAttestationNonceResponseAmino {
  /** QueryLatestAttestationNonceResponse latest attestation nonce response */
  nonce: string;
}
export interface QueryLatestAttestationNonceResponseAminoMsg {
  type: "/celestia.qgb.v1.QueryLatestAttestationNonceResponse";
  value: QueryLatestAttestationNonceResponseAmino;
}
/** QueryLatestAttestationNonceResponse latest attestation nonce response */
export interface QueryLatestAttestationNonceResponseSDKType {
  nonce: bigint;
}
/** QueryEarliestAttestationNonceRequest earliest attestation nonce request */
export interface QueryEarliestAttestationNonceRequest {}
export interface QueryEarliestAttestationNonceRequestProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryEarliestAttestationNonceRequest";
  value: Uint8Array;
}
/** QueryEarliestAttestationNonceRequest earliest attestation nonce request */
export interface QueryEarliestAttestationNonceRequestAmino {}
export interface QueryEarliestAttestationNonceRequestAminoMsg {
  type: "/celestia.qgb.v1.QueryEarliestAttestationNonceRequest";
  value: QueryEarliestAttestationNonceRequestAmino;
}
/** QueryEarliestAttestationNonceRequest earliest attestation nonce request */
export interface QueryEarliestAttestationNonceRequestSDKType {}
/** QueryEarliestAttestationNonceResponse earliest attestation nonce response */
export interface QueryEarliestAttestationNonceResponse {
  /** QueryEarliestAttestationNonceResponse earliest attestation nonce response */
  nonce: bigint;
}
export interface QueryEarliestAttestationNonceResponseProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryEarliestAttestationNonceResponse";
  value: Uint8Array;
}
/** QueryEarliestAttestationNonceResponse earliest attestation nonce response */
export interface QueryEarliestAttestationNonceResponseAmino {
  /** QueryEarliestAttestationNonceResponse earliest attestation nonce response */
  nonce: string;
}
export interface QueryEarliestAttestationNonceResponseAminoMsg {
  type: "/celestia.qgb.v1.QueryEarliestAttestationNonceResponse";
  value: QueryEarliestAttestationNonceResponseAmino;
}
/** QueryEarliestAttestationNonceResponse earliest attestation nonce response */
export interface QueryEarliestAttestationNonceResponseSDKType {
  nonce: bigint;
}
/**
 * QueryLatestValsetRequestBeforeNonceRequest latest Valset request before
 * universal nonce request
 */
export interface QueryLatestValsetRequestBeforeNonceRequest {
  /**
   * QueryLatestValsetRequestBeforeNonceRequest latest Valset request before
   * universal nonce request
   */
  nonce: bigint;
}
export interface QueryLatestValsetRequestBeforeNonceRequestProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryLatestValsetRequestBeforeNonceRequest";
  value: Uint8Array;
}
/**
 * QueryLatestValsetRequestBeforeNonceRequest latest Valset request before
 * universal nonce request
 */
export interface QueryLatestValsetRequestBeforeNonceRequestAmino {
  /**
   * QueryLatestValsetRequestBeforeNonceRequest latest Valset request before
   * universal nonce request
   */
  nonce: string;
}
export interface QueryLatestValsetRequestBeforeNonceRequestAminoMsg {
  type: "/celestia.qgb.v1.QueryLatestValsetRequestBeforeNonceRequest";
  value: QueryLatestValsetRequestBeforeNonceRequestAmino;
}
/**
 * QueryLatestValsetRequestBeforeNonceRequest latest Valset request before
 * universal nonce request
 */
export interface QueryLatestValsetRequestBeforeNonceRequestSDKType {
  nonce: bigint;
}
/**
 * QueryLatestValsetRequestBeforeNonceResponse latest Valset request before
 * height response
 */
export interface QueryLatestValsetRequestBeforeNonceResponse {
  /**
   * QueryLatestValsetRequestBeforeNonceResponse latest Valset request before
   * height response
   */
  valset: Valset;
}
export interface QueryLatestValsetRequestBeforeNonceResponseProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryLatestValsetRequestBeforeNonceResponse";
  value: Uint8Array;
}
/**
 * QueryLatestValsetRequestBeforeNonceResponse latest Valset request before
 * height response
 */
export interface QueryLatestValsetRequestBeforeNonceResponseAmino {
  /**
   * QueryLatestValsetRequestBeforeNonceResponse latest Valset request before
   * height response
   */
  valset?: ValsetAmino;
}
export interface QueryLatestValsetRequestBeforeNonceResponseAminoMsg {
  type: "/celestia.qgb.v1.QueryLatestValsetRequestBeforeNonceResponse";
  value: QueryLatestValsetRequestBeforeNonceResponseAmino;
}
/**
 * QueryLatestValsetRequestBeforeNonceResponse latest Valset request before
 * height response
 */
export interface QueryLatestValsetRequestBeforeNonceResponseSDKType {
  valset: ValsetSDKType;
}
/** QueryLatestUnbondingHeightRequest */
export interface QueryLatestUnbondingHeightRequest {}
export interface QueryLatestUnbondingHeightRequestProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryLatestUnbondingHeightRequest";
  value: Uint8Array;
}
/** QueryLatestUnbondingHeightRequest */
export interface QueryLatestUnbondingHeightRequestAmino {}
export interface QueryLatestUnbondingHeightRequestAminoMsg {
  type: "/celestia.qgb.v1.QueryLatestUnbondingHeightRequest";
  value: QueryLatestUnbondingHeightRequestAmino;
}
/** QueryLatestUnbondingHeightRequest */
export interface QueryLatestUnbondingHeightRequestSDKType {}
/** QueryLatestUnbondingHeightResponse */
export interface QueryLatestUnbondingHeightResponse {
  /** QueryLatestUnbondingHeightResponse */
  height: bigint;
}
export interface QueryLatestUnbondingHeightResponseProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryLatestUnbondingHeightResponse";
  value: Uint8Array;
}
/** QueryLatestUnbondingHeightResponse */
export interface QueryLatestUnbondingHeightResponseAmino {
  /** QueryLatestUnbondingHeightResponse */
  height: string;
}
export interface QueryLatestUnbondingHeightResponseAminoMsg {
  type: "/celestia.qgb.v1.QueryLatestUnbondingHeightResponse";
  value: QueryLatestUnbondingHeightResponseAmino;
}
/** QueryLatestUnbondingHeightResponse */
export interface QueryLatestUnbondingHeightResponseSDKType {
  height: bigint;
}
/** QueryLatestDataCommitmentRequest */
export interface QueryLatestDataCommitmentRequest {}
export interface QueryLatestDataCommitmentRequestProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryLatestDataCommitmentRequest";
  value: Uint8Array;
}
/** QueryLatestDataCommitmentRequest */
export interface QueryLatestDataCommitmentRequestAmino {}
export interface QueryLatestDataCommitmentRequestAminoMsg {
  type: "/celestia.qgb.v1.QueryLatestDataCommitmentRequest";
  value: QueryLatestDataCommitmentRequestAmino;
}
/** QueryLatestDataCommitmentRequest */
export interface QueryLatestDataCommitmentRequestSDKType {}
/** QueryLatestDataCommitmentResponse */
export interface QueryLatestDataCommitmentResponse {
  dataCommitment: DataCommitment;
}
export interface QueryLatestDataCommitmentResponseProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryLatestDataCommitmentResponse";
  value: Uint8Array;
}
/** QueryLatestDataCommitmentResponse */
export interface QueryLatestDataCommitmentResponseAmino {
  data_commitment?: DataCommitmentAmino;
}
export interface QueryLatestDataCommitmentResponseAminoMsg {
  type: "/celestia.qgb.v1.QueryLatestDataCommitmentResponse";
  value: QueryLatestDataCommitmentResponseAmino;
}
/** QueryLatestDataCommitmentResponse */
export interface QueryLatestDataCommitmentResponseSDKType {
  data_commitment: DataCommitmentSDKType;
}
/** QueryDataCommitmentRangeForHeightRequest */
export interface QueryDataCommitmentRangeForHeightRequest {
  /** QueryDataCommitmentRangeForHeightRequest */
  height: bigint;
}
export interface QueryDataCommitmentRangeForHeightRequestProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryDataCommitmentRangeForHeightRequest";
  value: Uint8Array;
}
/** QueryDataCommitmentRangeForHeightRequest */
export interface QueryDataCommitmentRangeForHeightRequestAmino {
  /** QueryDataCommitmentRangeForHeightRequest */
  height: string;
}
export interface QueryDataCommitmentRangeForHeightRequestAminoMsg {
  type: "/celestia.qgb.v1.QueryDataCommitmentRangeForHeightRequest";
  value: QueryDataCommitmentRangeForHeightRequestAmino;
}
/** QueryDataCommitmentRangeForHeightRequest */
export interface QueryDataCommitmentRangeForHeightRequestSDKType {
  height: bigint;
}
/** QueryDataCommitmentRangeForHeightResponse */
export interface QueryDataCommitmentRangeForHeightResponse {
  dataCommitment: DataCommitment;
}
export interface QueryDataCommitmentRangeForHeightResponseProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryDataCommitmentRangeForHeightResponse";
  value: Uint8Array;
}
/** QueryDataCommitmentRangeForHeightResponse */
export interface QueryDataCommitmentRangeForHeightResponseAmino {
  data_commitment?: DataCommitmentAmino;
}
export interface QueryDataCommitmentRangeForHeightResponseAminoMsg {
  type: "/celestia.qgb.v1.QueryDataCommitmentRangeForHeightResponse";
  value: QueryDataCommitmentRangeForHeightResponseAmino;
}
/** QueryDataCommitmentRangeForHeightResponse */
export interface QueryDataCommitmentRangeForHeightResponseSDKType {
  data_commitment: DataCommitmentSDKType;
}
/** QueryEVMAddressRequest */
export interface QueryEVMAddressRequest {
  /** QueryEVMAddressRequest */
  validatorAddress: string;
}
export interface QueryEVMAddressRequestProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryEVMAddressRequest";
  value: Uint8Array;
}
/** QueryEVMAddressRequest */
export interface QueryEVMAddressRequestAmino {
  /** QueryEVMAddressRequest */
  validator_address: string;
}
export interface QueryEVMAddressRequestAminoMsg {
  type: "/celestia.qgb.v1.QueryEVMAddressRequest";
  value: QueryEVMAddressRequestAmino;
}
/** QueryEVMAddressRequest */
export interface QueryEVMAddressRequestSDKType {
  validator_address: string;
}
/** QueryEVMAddressResponse */
export interface QueryEVMAddressResponse {
  /** QueryEVMAddressResponse */
  evmAddress: string;
}
export interface QueryEVMAddressResponseProtoMsg {
  typeUrl: "/celestia.qgb.v1.QueryEVMAddressResponse";
  value: Uint8Array;
}
/** QueryEVMAddressResponse */
export interface QueryEVMAddressResponseAmino {
  /** QueryEVMAddressResponse */
  evm_address: string;
}
export interface QueryEVMAddressResponseAminoMsg {
  type: "/celestia.qgb.v1.QueryEVMAddressResponse";
  value: QueryEVMAddressResponseAmino;
}
/** QueryEVMAddressResponse */
export interface QueryEVMAddressResponseSDKType {
  evm_address: string;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/celestia.qgb.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/celestia.qgb.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAttestationRequestByNonceRequest(): QueryAttestationRequestByNonceRequest {
  return {
    nonce: BigInt(0)
  };
}
export const QueryAttestationRequestByNonceRequest = {
  typeUrl: "/celestia.qgb.v1.QueryAttestationRequestByNonceRequest",
  encode(message: QueryAttestationRequestByNonceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): QueryAttestationRequestByNonceRequest {
    return {
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryAttestationRequestByNonceRequest>): QueryAttestationRequestByNonceRequest {
    const message = createBaseQueryAttestationRequestByNonceRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryAttestationRequestByNonceRequestAmino): QueryAttestationRequestByNonceRequest {
    return {
      nonce: BigInt(object.nonce)
    };
  },
  toAmino(message: QueryAttestationRequestByNonceRequest): QueryAttestationRequestByNonceRequestAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAttestationRequestByNonceRequestAminoMsg): QueryAttestationRequestByNonceRequest {
    return QueryAttestationRequestByNonceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAttestationRequestByNonceRequestProtoMsg): QueryAttestationRequestByNonceRequest {
    return QueryAttestationRequestByNonceRequest.decode(message.value);
  },
  toProto(message: QueryAttestationRequestByNonceRequest): Uint8Array {
    return QueryAttestationRequestByNonceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAttestationRequestByNonceRequest): QueryAttestationRequestByNonceRequestProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryAttestationRequestByNonceRequest",
      value: QueryAttestationRequestByNonceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAttestationRequestByNonceResponse(): QueryAttestationRequestByNonceResponse {
  return {
    attestation: Any.fromPartial({})
  };
}
export const QueryAttestationRequestByNonceResponse = {
  typeUrl: "/celestia.qgb.v1.QueryAttestationRequestByNonceResponse",
  encode(message: QueryAttestationRequestByNonceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.attestation !== undefined) {
      Any.encode((message.attestation as Any), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryAttestationRequestByNonceResponse {
    return {
      attestation: isSet(object.attestation) ? Any.fromJSON(object.attestation) : undefined
    };
  },
  fromPartial(object: Partial<QueryAttestationRequestByNonceResponse>): QueryAttestationRequestByNonceResponse {
    const message = createBaseQueryAttestationRequestByNonceResponse();
    message.attestation = object.attestation !== undefined && object.attestation !== null ? Any.fromPartial(object.attestation) : undefined;
    return message;
  },
  fromAmino(object: QueryAttestationRequestByNonceResponseAmino): QueryAttestationRequestByNonceResponse {
    return {
      attestation: object?.attestation ? AttestationRequestI_FromAmino(object.attestation) : undefined
    };
  },
  toAmino(message: QueryAttestationRequestByNonceResponse): QueryAttestationRequestByNonceResponseAmino {
    const obj: any = {};
    obj.attestation = message.attestation ? AttestationRequestI_ToAmino((message.attestation as Any)) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAttestationRequestByNonceResponseAminoMsg): QueryAttestationRequestByNonceResponse {
    return QueryAttestationRequestByNonceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAttestationRequestByNonceResponseProtoMsg): QueryAttestationRequestByNonceResponse {
    return QueryAttestationRequestByNonceResponse.decode(message.value);
  },
  toProto(message: QueryAttestationRequestByNonceResponse): Uint8Array {
    return QueryAttestationRequestByNonceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAttestationRequestByNonceResponse): QueryAttestationRequestByNonceResponseProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryAttestationRequestByNonceResponse",
      value: QueryAttestationRequestByNonceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLatestAttestationNonceRequest(): QueryLatestAttestationNonceRequest {
  return {};
}
export const QueryLatestAttestationNonceRequest = {
  typeUrl: "/celestia.qgb.v1.QueryLatestAttestationNonceRequest",
  encode(_: QueryLatestAttestationNonceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryLatestAttestationNonceRequest {
    return {};
  },
  fromPartial(_: Partial<QueryLatestAttestationNonceRequest>): QueryLatestAttestationNonceRequest {
    const message = createBaseQueryLatestAttestationNonceRequest();
    return message;
  },
  fromAmino(_: QueryLatestAttestationNonceRequestAmino): QueryLatestAttestationNonceRequest {
    return {};
  },
  toAmino(_: QueryLatestAttestationNonceRequest): QueryLatestAttestationNonceRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLatestAttestationNonceRequestAminoMsg): QueryLatestAttestationNonceRequest {
    return QueryLatestAttestationNonceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestAttestationNonceRequestProtoMsg): QueryLatestAttestationNonceRequest {
    return QueryLatestAttestationNonceRequest.decode(message.value);
  },
  toProto(message: QueryLatestAttestationNonceRequest): Uint8Array {
    return QueryLatestAttestationNonceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestAttestationNonceRequest): QueryLatestAttestationNonceRequestProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryLatestAttestationNonceRequest",
      value: QueryLatestAttestationNonceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLatestAttestationNonceResponse(): QueryLatestAttestationNonceResponse {
  return {
    nonce: BigInt(0)
  };
}
export const QueryLatestAttestationNonceResponse = {
  typeUrl: "/celestia.qgb.v1.QueryLatestAttestationNonceResponse",
  encode(message: QueryLatestAttestationNonceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): QueryLatestAttestationNonceResponse {
    return {
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryLatestAttestationNonceResponse>): QueryLatestAttestationNonceResponse {
    const message = createBaseQueryLatestAttestationNonceResponse();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryLatestAttestationNonceResponseAmino): QueryLatestAttestationNonceResponse {
    return {
      nonce: BigInt(object.nonce)
    };
  },
  toAmino(message: QueryLatestAttestationNonceResponse): QueryLatestAttestationNonceResponseAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLatestAttestationNonceResponseAminoMsg): QueryLatestAttestationNonceResponse {
    return QueryLatestAttestationNonceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestAttestationNonceResponseProtoMsg): QueryLatestAttestationNonceResponse {
    return QueryLatestAttestationNonceResponse.decode(message.value);
  },
  toProto(message: QueryLatestAttestationNonceResponse): Uint8Array {
    return QueryLatestAttestationNonceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestAttestationNonceResponse): QueryLatestAttestationNonceResponseProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryLatestAttestationNonceResponse",
      value: QueryLatestAttestationNonceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEarliestAttestationNonceRequest(): QueryEarliestAttestationNonceRequest {
  return {};
}
export const QueryEarliestAttestationNonceRequest = {
  typeUrl: "/celestia.qgb.v1.QueryEarliestAttestationNonceRequest",
  encode(_: QueryEarliestAttestationNonceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryEarliestAttestationNonceRequest {
    return {};
  },
  fromPartial(_: Partial<QueryEarliestAttestationNonceRequest>): QueryEarliestAttestationNonceRequest {
    const message = createBaseQueryEarliestAttestationNonceRequest();
    return message;
  },
  fromAmino(_: QueryEarliestAttestationNonceRequestAmino): QueryEarliestAttestationNonceRequest {
    return {};
  },
  toAmino(_: QueryEarliestAttestationNonceRequest): QueryEarliestAttestationNonceRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEarliestAttestationNonceRequestAminoMsg): QueryEarliestAttestationNonceRequest {
    return QueryEarliestAttestationNonceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEarliestAttestationNonceRequestProtoMsg): QueryEarliestAttestationNonceRequest {
    return QueryEarliestAttestationNonceRequest.decode(message.value);
  },
  toProto(message: QueryEarliestAttestationNonceRequest): Uint8Array {
    return QueryEarliestAttestationNonceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEarliestAttestationNonceRequest): QueryEarliestAttestationNonceRequestProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryEarliestAttestationNonceRequest",
      value: QueryEarliestAttestationNonceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEarliestAttestationNonceResponse(): QueryEarliestAttestationNonceResponse {
  return {
    nonce: BigInt(0)
  };
}
export const QueryEarliestAttestationNonceResponse = {
  typeUrl: "/celestia.qgb.v1.QueryEarliestAttestationNonceResponse",
  encode(message: QueryEarliestAttestationNonceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): QueryEarliestAttestationNonceResponse {
    return {
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryEarliestAttestationNonceResponse>): QueryEarliestAttestationNonceResponse {
    const message = createBaseQueryEarliestAttestationNonceResponse();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryEarliestAttestationNonceResponseAmino): QueryEarliestAttestationNonceResponse {
    return {
      nonce: BigInt(object.nonce)
    };
  },
  toAmino(message: QueryEarliestAttestationNonceResponse): QueryEarliestAttestationNonceResponseAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEarliestAttestationNonceResponseAminoMsg): QueryEarliestAttestationNonceResponse {
    return QueryEarliestAttestationNonceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEarliestAttestationNonceResponseProtoMsg): QueryEarliestAttestationNonceResponse {
    return QueryEarliestAttestationNonceResponse.decode(message.value);
  },
  toProto(message: QueryEarliestAttestationNonceResponse): Uint8Array {
    return QueryEarliestAttestationNonceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEarliestAttestationNonceResponse): QueryEarliestAttestationNonceResponseProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryEarliestAttestationNonceResponse",
      value: QueryEarliestAttestationNonceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLatestValsetRequestBeforeNonceRequest(): QueryLatestValsetRequestBeforeNonceRequest {
  return {
    nonce: BigInt(0)
  };
}
export const QueryLatestValsetRequestBeforeNonceRequest = {
  typeUrl: "/celestia.qgb.v1.QueryLatestValsetRequestBeforeNonceRequest",
  encode(message: QueryLatestValsetRequestBeforeNonceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    return writer;
  },
  fromJSON(object: any): QueryLatestValsetRequestBeforeNonceRequest {
    return {
      nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryLatestValsetRequestBeforeNonceRequest>): QueryLatestValsetRequestBeforeNonceRequest {
    const message = createBaseQueryLatestValsetRequestBeforeNonceRequest();
    message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryLatestValsetRequestBeforeNonceRequestAmino): QueryLatestValsetRequestBeforeNonceRequest {
    return {
      nonce: BigInt(object.nonce)
    };
  },
  toAmino(message: QueryLatestValsetRequestBeforeNonceRequest): QueryLatestValsetRequestBeforeNonceRequestAmino {
    const obj: any = {};
    obj.nonce = message.nonce ? message.nonce.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLatestValsetRequestBeforeNonceRequestAminoMsg): QueryLatestValsetRequestBeforeNonceRequest {
    return QueryLatestValsetRequestBeforeNonceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestValsetRequestBeforeNonceRequestProtoMsg): QueryLatestValsetRequestBeforeNonceRequest {
    return QueryLatestValsetRequestBeforeNonceRequest.decode(message.value);
  },
  toProto(message: QueryLatestValsetRequestBeforeNonceRequest): Uint8Array {
    return QueryLatestValsetRequestBeforeNonceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestValsetRequestBeforeNonceRequest): QueryLatestValsetRequestBeforeNonceRequestProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryLatestValsetRequestBeforeNonceRequest",
      value: QueryLatestValsetRequestBeforeNonceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLatestValsetRequestBeforeNonceResponse(): QueryLatestValsetRequestBeforeNonceResponse {
  return {
    valset: Valset.fromPartial({})
  };
}
export const QueryLatestValsetRequestBeforeNonceResponse = {
  typeUrl: "/celestia.qgb.v1.QueryLatestValsetRequestBeforeNonceResponse",
  encode(message: QueryLatestValsetRequestBeforeNonceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.valset !== undefined) {
      Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryLatestValsetRequestBeforeNonceResponse {
    return {
      valset: isSet(object.valset) ? Valset.fromJSON(object.valset) : undefined
    };
  },
  fromPartial(object: Partial<QueryLatestValsetRequestBeforeNonceResponse>): QueryLatestValsetRequestBeforeNonceResponse {
    const message = createBaseQueryLatestValsetRequestBeforeNonceResponse();
    message.valset = object.valset !== undefined && object.valset !== null ? Valset.fromPartial(object.valset) : undefined;
    return message;
  },
  fromAmino(object: QueryLatestValsetRequestBeforeNonceResponseAmino): QueryLatestValsetRequestBeforeNonceResponse {
    return {
      valset: object?.valset ? Valset.fromAmino(object.valset) : undefined
    };
  },
  toAmino(message: QueryLatestValsetRequestBeforeNonceResponse): QueryLatestValsetRequestBeforeNonceResponseAmino {
    const obj: any = {};
    obj.valset = message.valset ? Valset.toAmino(message.valset) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLatestValsetRequestBeforeNonceResponseAminoMsg): QueryLatestValsetRequestBeforeNonceResponse {
    return QueryLatestValsetRequestBeforeNonceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestValsetRequestBeforeNonceResponseProtoMsg): QueryLatestValsetRequestBeforeNonceResponse {
    return QueryLatestValsetRequestBeforeNonceResponse.decode(message.value);
  },
  toProto(message: QueryLatestValsetRequestBeforeNonceResponse): Uint8Array {
    return QueryLatestValsetRequestBeforeNonceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestValsetRequestBeforeNonceResponse): QueryLatestValsetRequestBeforeNonceResponseProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryLatestValsetRequestBeforeNonceResponse",
      value: QueryLatestValsetRequestBeforeNonceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLatestUnbondingHeightRequest(): QueryLatestUnbondingHeightRequest {
  return {};
}
export const QueryLatestUnbondingHeightRequest = {
  typeUrl: "/celestia.qgb.v1.QueryLatestUnbondingHeightRequest",
  encode(_: QueryLatestUnbondingHeightRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryLatestUnbondingHeightRequest {
    return {};
  },
  fromPartial(_: Partial<QueryLatestUnbondingHeightRequest>): QueryLatestUnbondingHeightRequest {
    const message = createBaseQueryLatestUnbondingHeightRequest();
    return message;
  },
  fromAmino(_: QueryLatestUnbondingHeightRequestAmino): QueryLatestUnbondingHeightRequest {
    return {};
  },
  toAmino(_: QueryLatestUnbondingHeightRequest): QueryLatestUnbondingHeightRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLatestUnbondingHeightRequestAminoMsg): QueryLatestUnbondingHeightRequest {
    return QueryLatestUnbondingHeightRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestUnbondingHeightRequestProtoMsg): QueryLatestUnbondingHeightRequest {
    return QueryLatestUnbondingHeightRequest.decode(message.value);
  },
  toProto(message: QueryLatestUnbondingHeightRequest): Uint8Array {
    return QueryLatestUnbondingHeightRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestUnbondingHeightRequest): QueryLatestUnbondingHeightRequestProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryLatestUnbondingHeightRequest",
      value: QueryLatestUnbondingHeightRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLatestUnbondingHeightResponse(): QueryLatestUnbondingHeightResponse {
  return {
    height: BigInt(0)
  };
}
export const QueryLatestUnbondingHeightResponse = {
  typeUrl: "/celestia.qgb.v1.QueryLatestUnbondingHeightResponse",
  encode(message: QueryLatestUnbondingHeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): QueryLatestUnbondingHeightResponse {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryLatestUnbondingHeightResponse>): QueryLatestUnbondingHeightResponse {
    const message = createBaseQueryLatestUnbondingHeightResponse();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryLatestUnbondingHeightResponseAmino): QueryLatestUnbondingHeightResponse {
    return {
      height: BigInt(object.height)
    };
  },
  toAmino(message: QueryLatestUnbondingHeightResponse): QueryLatestUnbondingHeightResponseAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLatestUnbondingHeightResponseAminoMsg): QueryLatestUnbondingHeightResponse {
    return QueryLatestUnbondingHeightResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestUnbondingHeightResponseProtoMsg): QueryLatestUnbondingHeightResponse {
    return QueryLatestUnbondingHeightResponse.decode(message.value);
  },
  toProto(message: QueryLatestUnbondingHeightResponse): Uint8Array {
    return QueryLatestUnbondingHeightResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestUnbondingHeightResponse): QueryLatestUnbondingHeightResponseProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryLatestUnbondingHeightResponse",
      value: QueryLatestUnbondingHeightResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLatestDataCommitmentRequest(): QueryLatestDataCommitmentRequest {
  return {};
}
export const QueryLatestDataCommitmentRequest = {
  typeUrl: "/celestia.qgb.v1.QueryLatestDataCommitmentRequest",
  encode(_: QueryLatestDataCommitmentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryLatestDataCommitmentRequest {
    return {};
  },
  fromPartial(_: Partial<QueryLatestDataCommitmentRequest>): QueryLatestDataCommitmentRequest {
    const message = createBaseQueryLatestDataCommitmentRequest();
    return message;
  },
  fromAmino(_: QueryLatestDataCommitmentRequestAmino): QueryLatestDataCommitmentRequest {
    return {};
  },
  toAmino(_: QueryLatestDataCommitmentRequest): QueryLatestDataCommitmentRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLatestDataCommitmentRequestAminoMsg): QueryLatestDataCommitmentRequest {
    return QueryLatestDataCommitmentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestDataCommitmentRequestProtoMsg): QueryLatestDataCommitmentRequest {
    return QueryLatestDataCommitmentRequest.decode(message.value);
  },
  toProto(message: QueryLatestDataCommitmentRequest): Uint8Array {
    return QueryLatestDataCommitmentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestDataCommitmentRequest): QueryLatestDataCommitmentRequestProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryLatestDataCommitmentRequest",
      value: QueryLatestDataCommitmentRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLatestDataCommitmentResponse(): QueryLatestDataCommitmentResponse {
  return {
    dataCommitment: DataCommitment.fromPartial({})
  };
}
export const QueryLatestDataCommitmentResponse = {
  typeUrl: "/celestia.qgb.v1.QueryLatestDataCommitmentResponse",
  encode(message: QueryLatestDataCommitmentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dataCommitment !== undefined) {
      DataCommitment.encode(message.dataCommitment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryLatestDataCommitmentResponse {
    return {
      dataCommitment: isSet(object.dataCommitment) ? DataCommitment.fromJSON(object.dataCommitment) : undefined
    };
  },
  fromPartial(object: Partial<QueryLatestDataCommitmentResponse>): QueryLatestDataCommitmentResponse {
    const message = createBaseQueryLatestDataCommitmentResponse();
    message.dataCommitment = object.dataCommitment !== undefined && object.dataCommitment !== null ? DataCommitment.fromPartial(object.dataCommitment) : undefined;
    return message;
  },
  fromAmino(object: QueryLatestDataCommitmentResponseAmino): QueryLatestDataCommitmentResponse {
    return {
      dataCommitment: object?.data_commitment ? DataCommitment.fromAmino(object.data_commitment) : undefined
    };
  },
  toAmino(message: QueryLatestDataCommitmentResponse): QueryLatestDataCommitmentResponseAmino {
    const obj: any = {};
    obj.data_commitment = message.dataCommitment ? DataCommitment.toAmino(message.dataCommitment) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryLatestDataCommitmentResponseAminoMsg): QueryLatestDataCommitmentResponse {
    return QueryLatestDataCommitmentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryLatestDataCommitmentResponseProtoMsg): QueryLatestDataCommitmentResponse {
    return QueryLatestDataCommitmentResponse.decode(message.value);
  },
  toProto(message: QueryLatestDataCommitmentResponse): Uint8Array {
    return QueryLatestDataCommitmentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLatestDataCommitmentResponse): QueryLatestDataCommitmentResponseProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryLatestDataCommitmentResponse",
      value: QueryLatestDataCommitmentResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDataCommitmentRangeForHeightRequest(): QueryDataCommitmentRangeForHeightRequest {
  return {
    height: BigInt(0)
  };
}
export const QueryDataCommitmentRangeForHeightRequest = {
  typeUrl: "/celestia.qgb.v1.QueryDataCommitmentRangeForHeightRequest",
  encode(message: QueryDataCommitmentRangeForHeightRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).uint64(message.height);
    }
    return writer;
  },
  fromJSON(object: any): QueryDataCommitmentRangeForHeightRequest {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<QueryDataCommitmentRangeForHeightRequest>): QueryDataCommitmentRangeForHeightRequest {
    const message = createBaseQueryDataCommitmentRangeForHeightRequest();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryDataCommitmentRangeForHeightRequestAmino): QueryDataCommitmentRangeForHeightRequest {
    return {
      height: BigInt(object.height)
    };
  },
  toAmino(message: QueryDataCommitmentRangeForHeightRequest): QueryDataCommitmentRangeForHeightRequestAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDataCommitmentRangeForHeightRequestAminoMsg): QueryDataCommitmentRangeForHeightRequest {
    return QueryDataCommitmentRangeForHeightRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDataCommitmentRangeForHeightRequestProtoMsg): QueryDataCommitmentRangeForHeightRequest {
    return QueryDataCommitmentRangeForHeightRequest.decode(message.value);
  },
  toProto(message: QueryDataCommitmentRangeForHeightRequest): Uint8Array {
    return QueryDataCommitmentRangeForHeightRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDataCommitmentRangeForHeightRequest): QueryDataCommitmentRangeForHeightRequestProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryDataCommitmentRangeForHeightRequest",
      value: QueryDataCommitmentRangeForHeightRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDataCommitmentRangeForHeightResponse(): QueryDataCommitmentRangeForHeightResponse {
  return {
    dataCommitment: DataCommitment.fromPartial({})
  };
}
export const QueryDataCommitmentRangeForHeightResponse = {
  typeUrl: "/celestia.qgb.v1.QueryDataCommitmentRangeForHeightResponse",
  encode(message: QueryDataCommitmentRangeForHeightResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dataCommitment !== undefined) {
      DataCommitment.encode(message.dataCommitment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDataCommitmentRangeForHeightResponse {
    return {
      dataCommitment: isSet(object.dataCommitment) ? DataCommitment.fromJSON(object.dataCommitment) : undefined
    };
  },
  fromPartial(object: Partial<QueryDataCommitmentRangeForHeightResponse>): QueryDataCommitmentRangeForHeightResponse {
    const message = createBaseQueryDataCommitmentRangeForHeightResponse();
    message.dataCommitment = object.dataCommitment !== undefined && object.dataCommitment !== null ? DataCommitment.fromPartial(object.dataCommitment) : undefined;
    return message;
  },
  fromAmino(object: QueryDataCommitmentRangeForHeightResponseAmino): QueryDataCommitmentRangeForHeightResponse {
    return {
      dataCommitment: object?.data_commitment ? DataCommitment.fromAmino(object.data_commitment) : undefined
    };
  },
  toAmino(message: QueryDataCommitmentRangeForHeightResponse): QueryDataCommitmentRangeForHeightResponseAmino {
    const obj: any = {};
    obj.data_commitment = message.dataCommitment ? DataCommitment.toAmino(message.dataCommitment) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDataCommitmentRangeForHeightResponseAminoMsg): QueryDataCommitmentRangeForHeightResponse {
    return QueryDataCommitmentRangeForHeightResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDataCommitmentRangeForHeightResponseProtoMsg): QueryDataCommitmentRangeForHeightResponse {
    return QueryDataCommitmentRangeForHeightResponse.decode(message.value);
  },
  toProto(message: QueryDataCommitmentRangeForHeightResponse): Uint8Array {
    return QueryDataCommitmentRangeForHeightResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDataCommitmentRangeForHeightResponse): QueryDataCommitmentRangeForHeightResponseProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryDataCommitmentRangeForHeightResponse",
      value: QueryDataCommitmentRangeForHeightResponse.encode(message).finish()
    };
  }
};
function createBaseQueryEVMAddressRequest(): QueryEVMAddressRequest {
  return {
    validatorAddress: ""
  };
}
export const QueryEVMAddressRequest = {
  typeUrl: "/celestia.qgb.v1.QueryEVMAddressRequest",
  encode(message: QueryEVMAddressRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryEVMAddressRequest {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryEVMAddressRequest>): QueryEVMAddressRequest {
    const message = createBaseQueryEVMAddressRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryEVMAddressRequestAmino): QueryEVMAddressRequest {
    return {
      validatorAddress: object.validator_address
    };
  },
  toAmino(message: QueryEVMAddressRequest): QueryEVMAddressRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryEVMAddressRequestAminoMsg): QueryEVMAddressRequest {
    return QueryEVMAddressRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEVMAddressRequestProtoMsg): QueryEVMAddressRequest {
    return QueryEVMAddressRequest.decode(message.value);
  },
  toProto(message: QueryEVMAddressRequest): Uint8Array {
    return QueryEVMAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEVMAddressRequest): QueryEVMAddressRequestProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryEVMAddressRequest",
      value: QueryEVMAddressRequest.encode(message).finish()
    };
  }
};
function createBaseQueryEVMAddressResponse(): QueryEVMAddressResponse {
  return {
    evmAddress: ""
  };
}
export const QueryEVMAddressResponse = {
  typeUrl: "/celestia.qgb.v1.QueryEVMAddressResponse",
  encode(message: QueryEVMAddressResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evmAddress !== "") {
      writer.uint32(10).string(message.evmAddress);
    }
    return writer;
  },
  fromJSON(object: any): QueryEVMAddressResponse {
    return {
      evmAddress: isSet(object.evmAddress) ? String(object.evmAddress) : ""
    };
  },
  fromPartial(object: Partial<QueryEVMAddressResponse>): QueryEVMAddressResponse {
    const message = createBaseQueryEVMAddressResponse();
    message.evmAddress = object.evmAddress ?? "";
    return message;
  },
  fromAmino(object: QueryEVMAddressResponseAmino): QueryEVMAddressResponse {
    return {
      evmAddress: object.evm_address
    };
  },
  toAmino(message: QueryEVMAddressResponse): QueryEVMAddressResponseAmino {
    const obj: any = {};
    obj.evm_address = message.evmAddress;
    return obj;
  },
  fromAminoMsg(object: QueryEVMAddressResponseAminoMsg): QueryEVMAddressResponse {
    return QueryEVMAddressResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryEVMAddressResponseProtoMsg): QueryEVMAddressResponse {
    return QueryEVMAddressResponse.decode(message.value);
  },
  toProto(message: QueryEVMAddressResponse): Uint8Array {
    return QueryEVMAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEVMAddressResponse): QueryEVMAddressResponseProtoMsg {
    return {
      typeUrl: "/celestia.qgb.v1.QueryEVMAddressResponse",
      value: QueryEVMAddressResponse.encode(message).finish()
    };
  }
};
export const AttestationRequestI_InterfaceDecoder = (input: BinaryReader | Uint8Array): Valset | DataCommitment | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/celestia.qgb.v1.Valset":
      return Valset.decode(data.value);
    case "/celestia.qgb.v1.DataCommitment":
      return DataCommitment.decode(data.value);
    default:
      return data;
  }
};
export const AttestationRequestI_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "/celestia.qgb.v1.Valset":
      return Any.fromPartial({
        typeUrl: "/celestia.qgb.v1.Valset",
        value: Valset.encode(Valset.fromPartial(Valset.fromAmino(content.value))).finish()
      });
    case "/celestia.qgb.v1.DataCommitment":
      return Any.fromPartial({
        typeUrl: "/celestia.qgb.v1.DataCommitment",
        value: DataCommitment.encode(DataCommitment.fromPartial(DataCommitment.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const AttestationRequestI_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/celestia.qgb.v1.Valset":
      return {
        type: "/celestia.qgb.v1.Valset",
        value: Valset.toAmino(Valset.decode(content.value))
      };
    case "/celestia.qgb.v1.DataCommitment":
      return {
        type: "/celestia.qgb.v1.DataCommitment",
        value: DataCommitment.toAmino(DataCommitment.decode(content.value))
      };
    default:
      return Any.toAmino(content);
  }
};