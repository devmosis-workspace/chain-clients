import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { StrategyType, strategyTypeFromJSON, strategyTypeToJSON } from "./strategy";
import { VaultShare, VaultShareAmino, VaultShareSDKType } from "./vault";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** QueryParamsRequest defines the request type for querying x/earn parameters. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/kava.earn.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest defines the request type for querying x/earn parameters. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/kava.earn.v1beta1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest defines the request type for querying x/earn parameters. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse defines the response type for querying x/earn parameters. */
export interface QueryParamsResponse {
  /** params represents the earn module parameters */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/kava.earn.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse defines the response type for querying x/earn parameters. */
export interface QueryParamsResponseAmino {
  /** params represents the earn module parameters */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/kava.earn.v1beta1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse defines the response type for querying x/earn parameters. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/** QueryVaultsRequest is the request type for the Query/Vaults RPC method. */
export interface QueryVaultsRequest {}
export interface QueryVaultsRequestProtoMsg {
  typeUrl: "/kava.earn.v1beta1.QueryVaultsRequest";
  value: Uint8Array;
}
/** QueryVaultsRequest is the request type for the Query/Vaults RPC method. */
export interface QueryVaultsRequestAmino {}
export interface QueryVaultsRequestAminoMsg {
  type: "/kava.earn.v1beta1.QueryVaultsRequest";
  value: QueryVaultsRequestAmino;
}
/** QueryVaultsRequest is the request type for the Query/Vaults RPC method. */
export interface QueryVaultsRequestSDKType {}
/** QueryVaultsResponse is the response type for the Query/Vaults RPC method. */
export interface QueryVaultsResponse {
  /** vaults represents the earn module vaults */
  vaults: VaultResponse[];
}
export interface QueryVaultsResponseProtoMsg {
  typeUrl: "/kava.earn.v1beta1.QueryVaultsResponse";
  value: Uint8Array;
}
/** QueryVaultsResponse is the response type for the Query/Vaults RPC method. */
export interface QueryVaultsResponseAmino {
  /** vaults represents the earn module vaults */
  vaults: VaultResponseAmino[];
}
export interface QueryVaultsResponseAminoMsg {
  type: "/kava.earn.v1beta1.QueryVaultsResponse";
  value: QueryVaultsResponseAmino;
}
/** QueryVaultsResponse is the response type for the Query/Vaults RPC method. */
export interface QueryVaultsResponseSDKType {
  vaults: VaultResponseSDKType[];
}
/** QueryVaultRequest is the request type for the Query/Vault RPC method. */
export interface QueryVaultRequest {
  /** vault filters vault by denom */
  denom: string;
}
export interface QueryVaultRequestProtoMsg {
  typeUrl: "/kava.earn.v1beta1.QueryVaultRequest";
  value: Uint8Array;
}
/** QueryVaultRequest is the request type for the Query/Vault RPC method. */
export interface QueryVaultRequestAmino {
  /** vault filters vault by denom */
  denom: string;
}
export interface QueryVaultRequestAminoMsg {
  type: "/kava.earn.v1beta1.QueryVaultRequest";
  value: QueryVaultRequestAmino;
}
/** QueryVaultRequest is the request type for the Query/Vault RPC method. */
export interface QueryVaultRequestSDKType {
  denom: string;
}
/** QueryVaultResponse is the response type for the Query/Vault RPC method. */
export interface QueryVaultResponse {
  /** vault represents the queried earn module vault */
  vault: VaultResponse;
}
export interface QueryVaultResponseProtoMsg {
  typeUrl: "/kava.earn.v1beta1.QueryVaultResponse";
  value: Uint8Array;
}
/** QueryVaultResponse is the response type for the Query/Vault RPC method. */
export interface QueryVaultResponseAmino {
  /** vault represents the queried earn module vault */
  vault?: VaultResponseAmino;
}
export interface QueryVaultResponseAminoMsg {
  type: "/kava.earn.v1beta1.QueryVaultResponse";
  value: QueryVaultResponseAmino;
}
/** QueryVaultResponse is the response type for the Query/Vault RPC method. */
export interface QueryVaultResponseSDKType {
  vault: VaultResponseSDKType;
}
/** VaultResponse is the response type for a vault. */
export interface VaultResponse {
  /** denom represents the denom of the vault */
  denom: string;
  /** VaultStrategy is the strategy used for this vault. */
  strategies: StrategyType[];
  /**
   * IsPrivateVault is true if the vault only allows depositors contained in
   * AllowedDepositors.
   */
  isPrivateVault: boolean;
  /**
   * AllowedDepositors is a list of addresses that are allowed to deposit to
   * this vault if IsPrivateVault is true. Addresses not contained in this list
   * are not allowed to deposit into this vault. If IsPrivateVault is false,
   * this should be empty and ignored.
   */
  allowedDepositors: string[];
  /** TotalShares is the total amount of shares issued to depositors. */
  totalShares: string;
  /**
   * TotalValue is the total value of denom coins supplied to the vault if the
   * vault were to be liquidated.
   */
  totalValue: string;
}
export interface VaultResponseProtoMsg {
  typeUrl: "/kava.earn.v1beta1.VaultResponse";
  value: Uint8Array;
}
/** VaultResponse is the response type for a vault. */
export interface VaultResponseAmino {
  /** denom represents the denom of the vault */
  denom: string;
  /** VaultStrategy is the strategy used for this vault. */
  strategies: StrategyType[];
  /**
   * IsPrivateVault is true if the vault only allows depositors contained in
   * AllowedDepositors.
   */
  is_private_vault: boolean;
  /**
   * AllowedDepositors is a list of addresses that are allowed to deposit to
   * this vault if IsPrivateVault is true. Addresses not contained in this list
   * are not allowed to deposit into this vault. If IsPrivateVault is false,
   * this should be empty and ignored.
   */
  allowed_depositors: string[];
  /** TotalShares is the total amount of shares issued to depositors. */
  total_shares: string;
  /**
   * TotalValue is the total value of denom coins supplied to the vault if the
   * vault were to be liquidated.
   */
  total_value: string;
}
export interface VaultResponseAminoMsg {
  type: "/kava.earn.v1beta1.VaultResponse";
  value: VaultResponseAmino;
}
/** VaultResponse is the response type for a vault. */
export interface VaultResponseSDKType {
  denom: string;
  strategies: StrategyType[];
  is_private_vault: boolean;
  allowed_depositors: string[];
  total_shares: string;
  total_value: string;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
  /** depositor optionally filters deposits by depositor */
  depositor: string;
  /** denom optionally filters deposits by vault denom */
  denom: string;
  /** respond with vault value in ukava for bkava vaults */
  valueInStakedTokens: boolean;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryDepositsRequestProtoMsg {
  typeUrl: "/kava.earn.v1beta1.QueryDepositsRequest";
  value: Uint8Array;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestAmino {
  /** depositor optionally filters deposits by depositor */
  depositor: string;
  /** denom optionally filters deposits by vault denom */
  denom: string;
  /** respond with vault value in ukava for bkava vaults */
  value_in_staked_tokens: boolean;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryDepositsRequestAminoMsg {
  type: "/kava.earn.v1beta1.QueryDepositsRequest";
  value: QueryDepositsRequestAmino;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
  depositor: string;
  denom: string;
  value_in_staked_tokens: boolean;
  pagination: PageRequestSDKType;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
  /** deposits returns the deposits matching the requested parameters */
  deposits: DepositResponse[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QueryDepositsResponseProtoMsg {
  typeUrl: "/kava.earn.v1beta1.QueryDepositsResponse";
  value: Uint8Array;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseAmino {
  /** deposits returns the deposits matching the requested parameters */
  deposits: DepositResponseAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QueryDepositsResponseAminoMsg {
  type: "/kava.earn.v1beta1.QueryDepositsResponse";
  value: QueryDepositsResponseAmino;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
  deposits: DepositResponseSDKType[];
  pagination: PageResponseSDKType;
}
/** DepositResponse defines a deposit query response type. */
export interface DepositResponse {
  /** depositor represents the owner of the deposit. */
  depositor: string;
  /** Shares represent the issued shares from their corresponding vaults. */
  shares: VaultShare[];
  /**
   * Value represents the total accumulated value of denom coins supplied to
   * vaults. This may be greater than or equal to amount_supplied depending on
   * the strategy.
   */
  value: Coin[];
}
export interface DepositResponseProtoMsg {
  typeUrl: "/kava.earn.v1beta1.DepositResponse";
  value: Uint8Array;
}
/** DepositResponse defines a deposit query response type. */
export interface DepositResponseAmino {
  /** depositor represents the owner of the deposit. */
  depositor: string;
  /** Shares represent the issued shares from their corresponding vaults. */
  shares: VaultShareAmino[];
  /**
   * Value represents the total accumulated value of denom coins supplied to
   * vaults. This may be greater than or equal to amount_supplied depending on
   * the strategy.
   */
  value: CoinAmino[];
}
export interface DepositResponseAminoMsg {
  type: "/kava.earn.v1beta1.DepositResponse";
  value: DepositResponseAmino;
}
/** DepositResponse defines a deposit query response type. */
export interface DepositResponseSDKType {
  depositor: string;
  shares: VaultShareSDKType[];
  value: CoinSDKType[];
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequest {}
export interface QueryTotalSupplyRequestProtoMsg {
  typeUrl: "/kava.earn.v1beta1.QueryTotalSupplyRequest";
  value: Uint8Array;
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequestAmino {}
export interface QueryTotalSupplyRequestAminoMsg {
  type: "/kava.earn.v1beta1.QueryTotalSupplyRequest";
  value: QueryTotalSupplyRequestAmino;
}
/** QueryTotalSupplyRequest defines the request type for Query/TotalSupply method. */
export interface QueryTotalSupplyRequestSDKType {}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponse {
  /** Height is the block height at which these totals apply */
  height: bigint;
  /** Result is a list of coins supplied to earn */
  result: Coin[];
}
export interface QueryTotalSupplyResponseProtoMsg {
  typeUrl: "/kava.earn.v1beta1.QueryTotalSupplyResponse";
  value: Uint8Array;
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponseAmino {
  /** Height is the block height at which these totals apply */
  height: string;
  /** Result is a list of coins supplied to earn */
  result: CoinAmino[];
}
export interface QueryTotalSupplyResponseAminoMsg {
  type: "/kava.earn.v1beta1.QueryTotalSupplyResponse";
  value: QueryTotalSupplyResponseAmino;
}
/** TotalSupplyResponse defines the response type for the Query/TotalSupply method. */
export interface QueryTotalSupplyResponseSDKType {
  height: bigint;
  result: CoinSDKType[];
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/kava.earn.v1beta1.QueryParamsRequest",
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
      typeUrl: "/kava.earn.v1beta1.QueryParamsRequest",
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
  typeUrl: "/kava.earn.v1beta1.QueryParamsResponse",
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
      typeUrl: "/kava.earn.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVaultsRequest(): QueryVaultsRequest {
  return {};
}
export const QueryVaultsRequest = {
  typeUrl: "/kava.earn.v1beta1.QueryVaultsRequest",
  encode(_: QueryVaultsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryVaultsRequest {
    return {};
  },
  fromPartial(_: Partial<QueryVaultsRequest>): QueryVaultsRequest {
    const message = createBaseQueryVaultsRequest();
    return message;
  },
  fromAmino(_: QueryVaultsRequestAmino): QueryVaultsRequest {
    return {};
  },
  toAmino(_: QueryVaultsRequest): QueryVaultsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryVaultsRequestAminoMsg): QueryVaultsRequest {
    return QueryVaultsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultsRequestProtoMsg): QueryVaultsRequest {
    return QueryVaultsRequest.decode(message.value);
  },
  toProto(message: QueryVaultsRequest): Uint8Array {
    return QueryVaultsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultsRequest): QueryVaultsRequestProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.QueryVaultsRequest",
      value: QueryVaultsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVaultsResponse(): QueryVaultsResponse {
  return {
    vaults: []
  };
}
export const QueryVaultsResponse = {
  typeUrl: "/kava.earn.v1beta1.QueryVaultsResponse",
  encode(message: QueryVaultsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.vaults) {
      VaultResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryVaultsResponse {
    return {
      vaults: Array.isArray(object?.vaults) ? object.vaults.map((e: any) => VaultResponse.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryVaultsResponse>): QueryVaultsResponse {
    const message = createBaseQueryVaultsResponse();
    message.vaults = object.vaults?.map(e => VaultResponse.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryVaultsResponseAmino): QueryVaultsResponse {
    return {
      vaults: Array.isArray(object?.vaults) ? object.vaults.map((e: any) => VaultResponse.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryVaultsResponse): QueryVaultsResponseAmino {
    const obj: any = {};
    if (message.vaults) {
      obj.vaults = message.vaults.map(e => e ? VaultResponse.toAmino(e) : undefined);
    } else {
      obj.vaults = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryVaultsResponseAminoMsg): QueryVaultsResponse {
    return QueryVaultsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultsResponseProtoMsg): QueryVaultsResponse {
    return QueryVaultsResponse.decode(message.value);
  },
  toProto(message: QueryVaultsResponse): Uint8Array {
    return QueryVaultsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultsResponse): QueryVaultsResponseProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.QueryVaultsResponse",
      value: QueryVaultsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVaultRequest(): QueryVaultRequest {
  return {
    denom: ""
  };
}
export const QueryVaultRequest = {
  typeUrl: "/kava.earn.v1beta1.QueryVaultRequest",
  encode(message: QueryVaultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  fromJSON(object: any): QueryVaultRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : ""
    };
  },
  fromPartial(object: Partial<QueryVaultRequest>): QueryVaultRequest {
    const message = createBaseQueryVaultRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryVaultRequestAmino): QueryVaultRequest {
    return {
      denom: object.denom
    };
  },
  toAmino(message: QueryVaultRequest): QueryVaultRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryVaultRequestAminoMsg): QueryVaultRequest {
    return QueryVaultRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultRequestProtoMsg): QueryVaultRequest {
    return QueryVaultRequest.decode(message.value);
  },
  toProto(message: QueryVaultRequest): Uint8Array {
    return QueryVaultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultRequest): QueryVaultRequestProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.QueryVaultRequest",
      value: QueryVaultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVaultResponse(): QueryVaultResponse {
  return {
    vault: VaultResponse.fromPartial({})
  };
}
export const QueryVaultResponse = {
  typeUrl: "/kava.earn.v1beta1.QueryVaultResponse",
  encode(message: QueryVaultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vault !== undefined) {
      VaultResponse.encode(message.vault, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryVaultResponse {
    return {
      vault: isSet(object.vault) ? VaultResponse.fromJSON(object.vault) : undefined
    };
  },
  fromPartial(object: Partial<QueryVaultResponse>): QueryVaultResponse {
    const message = createBaseQueryVaultResponse();
    message.vault = object.vault !== undefined && object.vault !== null ? VaultResponse.fromPartial(object.vault) : undefined;
    return message;
  },
  fromAmino(object: QueryVaultResponseAmino): QueryVaultResponse {
    return {
      vault: object?.vault ? VaultResponse.fromAmino(object.vault) : undefined
    };
  },
  toAmino(message: QueryVaultResponse): QueryVaultResponseAmino {
    const obj: any = {};
    obj.vault = message.vault ? VaultResponse.toAmino(message.vault) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVaultResponseAminoMsg): QueryVaultResponse {
    return QueryVaultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVaultResponseProtoMsg): QueryVaultResponse {
    return QueryVaultResponse.decode(message.value);
  },
  toProto(message: QueryVaultResponse): Uint8Array {
    return QueryVaultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVaultResponse): QueryVaultResponseProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.QueryVaultResponse",
      value: QueryVaultResponse.encode(message).finish()
    };
  }
};
function createBaseVaultResponse(): VaultResponse {
  return {
    denom: "",
    strategies: [],
    isPrivateVault: false,
    allowedDepositors: [],
    totalShares: "",
    totalValue: ""
  };
}
export const VaultResponse = {
  typeUrl: "/kava.earn.v1beta1.VaultResponse",
  encode(message: VaultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    writer.uint32(18).fork();
    for (const v of message.strategies) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.isPrivateVault === true) {
      writer.uint32(24).bool(message.isPrivateVault);
    }
    for (const v of message.allowedDepositors) {
      writer.uint32(34).string(v!);
    }
    if (message.totalShares !== "") {
      writer.uint32(42).string(message.totalShares);
    }
    if (message.totalValue !== "") {
      writer.uint32(50).string(message.totalValue);
    }
    return writer;
  },
  fromJSON(object: any): VaultResponse {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      strategies: Array.isArray(object?.strategies) ? object.strategies.map((e: any) => strategyTypeFromJSON(e)) : [],
      isPrivateVault: isSet(object.isPrivateVault) ? Boolean(object.isPrivateVault) : false,
      allowedDepositors: Array.isArray(object?.allowedDepositors) ? object.allowedDepositors.map((e: any) => String(e)) : [],
      totalShares: isSet(object.totalShares) ? String(object.totalShares) : "",
      totalValue: isSet(object.totalValue) ? String(object.totalValue) : ""
    };
  },
  fromPartial(object: Partial<VaultResponse>): VaultResponse {
    const message = createBaseVaultResponse();
    message.denom = object.denom ?? "";
    message.strategies = object.strategies?.map(e => e) || [];
    message.isPrivateVault = object.isPrivateVault ?? false;
    message.allowedDepositors = object.allowedDepositors?.map(e => e) || [];
    message.totalShares = object.totalShares ?? "";
    message.totalValue = object.totalValue ?? "";
    return message;
  },
  fromAmino(object: VaultResponseAmino): VaultResponse {
    return {
      denom: object.denom,
      strategies: Array.isArray(object?.strategies) ? object.strategies.map((e: any) => strategyTypeFromJSON(e)) : [],
      isPrivateVault: object.is_private_vault,
      allowedDepositors: Array.isArray(object?.allowed_depositors) ? object.allowed_depositors.map((e: any) => e) : [],
      totalShares: object.total_shares,
      totalValue: object.total_value
    };
  },
  toAmino(message: VaultResponse): VaultResponseAmino {
    const obj: any = {};
    obj.denom = message.denom;
    if (message.strategies) {
      obj.strategies = message.strategies.map(e => strategyTypeToJSON(e));
    } else {
      obj.strategies = [];
    }
    obj.is_private_vault = message.isPrivateVault;
    if (message.allowedDepositors) {
      obj.allowed_depositors = message.allowedDepositors.map(e => e);
    } else {
      obj.allowed_depositors = [];
    }
    obj.total_shares = message.totalShares;
    obj.total_value = message.totalValue;
    return obj;
  },
  fromAminoMsg(object: VaultResponseAminoMsg): VaultResponse {
    return VaultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: VaultResponseProtoMsg): VaultResponse {
    return VaultResponse.decode(message.value);
  },
  toProto(message: VaultResponse): Uint8Array {
    return VaultResponse.encode(message).finish();
  },
  toProtoMsg(message: VaultResponse): VaultResponseProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.VaultResponse",
      value: VaultResponse.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    depositor: "",
    denom: "",
    valueInStakedTokens: false,
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryDepositsRequest = {
  typeUrl: "/kava.earn.v1beta1.QueryDepositsRequest",
  encode(message: QueryDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.valueInStakedTokens === true) {
      writer.uint32(24).bool(message.valueInStakedTokens);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDepositsRequest {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      valueInStakedTokens: isSet(object.valueInStakedTokens) ? Boolean(object.valueInStakedTokens) : false,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.depositor = object.depositor ?? "";
    message.denom = object.denom ?? "";
    message.valueInStakedTokens = object.valueInStakedTokens ?? false;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest {
    return {
      depositor: object.depositor,
      denom: object.denom,
      valueInStakedTokens: object.value_in_staked_tokens,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino {
    const obj: any = {};
    obj.depositor = message.depositor;
    obj.denom = message.denom;
    obj.value_in_staked_tokens = message.valueInStakedTokens;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.decode(message.value);
  },
  toProto(message: QueryDepositsRequest): Uint8Array {
    return QueryDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.QueryDepositsRequest",
      value: QueryDepositsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryDepositsResponse = {
  typeUrl: "/kava.earn.v1beta1.QueryDepositsResponse",
  encode(message: QueryDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      DepositResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => DepositResponse.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => DepositResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => DepositResponse.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? DepositResponse.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.decode(message.value);
  },
  toProto(message: QueryDepositsResponse): Uint8Array {
    return QueryDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.QueryDepositsResponse",
      value: QueryDepositsResponse.encode(message).finish()
    };
  }
};
function createBaseDepositResponse(): DepositResponse {
  return {
    depositor: "",
    shares: [],
    value: []
  };
}
export const DepositResponse = {
  typeUrl: "/kava.earn.v1beta1.DepositResponse",
  encode(message: DepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositor !== "") {
      writer.uint32(10).string(message.depositor);
    }
    for (const v of message.shares) {
      VaultShare.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.value) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): DepositResponse {
    return {
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      shares: Array.isArray(object?.shares) ? object.shares.map((e: any) => VaultShare.fromJSON(e)) : [],
      value: Array.isArray(object?.value) ? object.value.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<DepositResponse>): DepositResponse {
    const message = createBaseDepositResponse();
    message.depositor = object.depositor ?? "";
    message.shares = object.shares?.map(e => VaultShare.fromPartial(e)) || [];
    message.value = object.value?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DepositResponseAmino): DepositResponse {
    return {
      depositor: object.depositor,
      shares: Array.isArray(object?.shares) ? object.shares.map((e: any) => VaultShare.fromAmino(e)) : [],
      value: Array.isArray(object?.value) ? object.value.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: DepositResponse): DepositResponseAmino {
    const obj: any = {};
    obj.depositor = message.depositor;
    if (message.shares) {
      obj.shares = message.shares.map(e => e ? VaultShare.toAmino(e) : undefined);
    } else {
      obj.shares = [];
    }
    if (message.value) {
      obj.value = message.value.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.value = [];
    }
    return obj;
  },
  fromAminoMsg(object: DepositResponseAminoMsg): DepositResponse {
    return DepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositResponseProtoMsg): DepositResponse {
    return DepositResponse.decode(message.value);
  },
  toProto(message: DepositResponse): Uint8Array {
    return DepositResponse.encode(message).finish();
  },
  toProtoMsg(message: DepositResponse): DepositResponseProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.DepositResponse",
      value: DepositResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTotalSupplyRequest(): QueryTotalSupplyRequest {
  return {};
}
export const QueryTotalSupplyRequest = {
  typeUrl: "/kava.earn.v1beta1.QueryTotalSupplyRequest",
  encode(_: QueryTotalSupplyRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): QueryTotalSupplyRequest {
    return {};
  },
  fromPartial(_: Partial<QueryTotalSupplyRequest>): QueryTotalSupplyRequest {
    const message = createBaseQueryTotalSupplyRequest();
    return message;
  },
  fromAmino(_: QueryTotalSupplyRequestAmino): QueryTotalSupplyRequest {
    return {};
  },
  toAmino(_: QueryTotalSupplyRequest): QueryTotalSupplyRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryTotalSupplyRequestAminoMsg): QueryTotalSupplyRequest {
    return QueryTotalSupplyRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalSupplyRequestProtoMsg): QueryTotalSupplyRequest {
    return QueryTotalSupplyRequest.decode(message.value);
  },
  toProto(message: QueryTotalSupplyRequest): Uint8Array {
    return QueryTotalSupplyRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSupplyRequest): QueryTotalSupplyRequestProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.QueryTotalSupplyRequest",
      value: QueryTotalSupplyRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTotalSupplyResponse(): QueryTotalSupplyResponse {
  return {
    height: BigInt(0),
    result: []
  };
}
export const QueryTotalSupplyResponse = {
  typeUrl: "/kava.earn.v1beta1.QueryTotalSupplyResponse",
  encode(message: QueryTotalSupplyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    for (const v of message.result) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): QueryTotalSupplyResponse {
    return {
      height: isSet(object.height) ? BigInt(object.height.toString()) : BigInt(0),
      result: Array.isArray(object?.result) ? object.result.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<QueryTotalSupplyResponse>): QueryTotalSupplyResponse {
    const message = createBaseQueryTotalSupplyResponse();
    message.height = object.height !== undefined && object.height !== null ? BigInt(object.height.toString()) : BigInt(0);
    message.result = object.result?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTotalSupplyResponseAmino): QueryTotalSupplyResponse {
    return {
      height: BigInt(object.height),
      result: Array.isArray(object?.result) ? object.result.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    if (message.result) {
      obj.result = message.result.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.result = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTotalSupplyResponseAminoMsg): QueryTotalSupplyResponse {
    return QueryTotalSupplyResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTotalSupplyResponseProtoMsg): QueryTotalSupplyResponse {
    return QueryTotalSupplyResponse.decode(message.value);
  },
  toProto(message: QueryTotalSupplyResponse): Uint8Array {
    return QueryTotalSupplyResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTotalSupplyResponse): QueryTotalSupplyResponseProtoMsg {
    return {
      typeUrl: "/kava.earn.v1beta1.QueryTotalSupplyResponse",
      value: QueryTotalSupplyResponse.encode(message).finish()
    };
  }
};