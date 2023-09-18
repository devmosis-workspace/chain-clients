import { Revenue, RevenueAmino, RevenueSDKType } from "./revenue";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** params are the revenue module parameters */
  params: Params;
  /** revenues is a slice of active registered contracts for fee distribution */
  revenues: Revenue[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/evmos.revenue.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
  /** params are the revenue module parameters */
  params?: ParamsAmino;
  /** revenues is a slice of active registered contracts for fee distribution */
  revenues: RevenueAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/evmos.revenue.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  revenues: RevenueSDKType[];
}
/** Params defines the revenue module params */
export interface Params {
  /** enable_revenue defines a parameter to enable the revenue module */
  enableRevenue: boolean;
  /**
   * developer_shares defines the proportion of the transaction fees to be
   * distributed to the registered contract owner
   */
  developerShares: string;
  /**
   * addr_derivation_cost_create defines the cost of address derivation for
   * verifying the contract deployer at fee registration
   */
  addrDerivationCostCreate: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/evmos.revenue.v1.Params";
  value: Uint8Array;
}
/** Params defines the revenue module params */
export interface ParamsAmino {
  /** enable_revenue defines a parameter to enable the revenue module */
  enable_revenue: boolean;
  /**
   * developer_shares defines the proportion of the transaction fees to be
   * distributed to the registered contract owner
   */
  developer_shares: string;
  /**
   * addr_derivation_cost_create defines the cost of address derivation for
   * verifying the contract deployer at fee registration
   */
  addr_derivation_cost_create: string;
}
export interface ParamsAminoMsg {
  type: "/evmos.revenue.v1.Params";
  value: ParamsAmino;
}
/** Params defines the revenue module params */
export interface ParamsSDKType {
  enable_revenue: boolean;
  developer_shares: string;
  addr_derivation_cost_create: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    revenues: []
  };
}
export const GenesisState = {
  typeUrl: "/evmos.revenue.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.revenues) {
      Revenue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      revenues: Array.isArray(object?.revenues) ? object.revenues.map((e: any) => Revenue.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.revenues = object.revenues?.map(e => Revenue.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      revenues: Array.isArray(object?.revenues) ? object.revenues.map((e: any) => Revenue.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.revenues) {
      obj.revenues = message.revenues.map(e => e ? Revenue.toAmino(e) : undefined);
    } else {
      obj.revenues = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    enableRevenue: false,
    developerShares: "",
    addrDerivationCostCreate: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/evmos.revenue.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enableRevenue === true) {
      writer.uint32(8).bool(message.enableRevenue);
    }
    if (message.developerShares !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.developerShares, 18).atomics);
    }
    if (message.addrDerivationCostCreate !== BigInt(0)) {
      writer.uint32(24).uint64(message.addrDerivationCostCreate);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      enableRevenue: isSet(object.enableRevenue) ? Boolean(object.enableRevenue) : false,
      developerShares: isSet(object.developerShares) ? String(object.developerShares) : "",
      addrDerivationCostCreate: isSet(object.addrDerivationCostCreate) ? BigInt(object.addrDerivationCostCreate.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.enableRevenue = object.enableRevenue ?? false;
    message.developerShares = object.developerShares ?? "";
    message.addrDerivationCostCreate = object.addrDerivationCostCreate !== undefined && object.addrDerivationCostCreate !== null ? BigInt(object.addrDerivationCostCreate.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    return {
      enableRevenue: object.enable_revenue,
      developerShares: object.developer_shares,
      addrDerivationCostCreate: BigInt(object.addr_derivation_cost_create)
    };
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enable_revenue = message.enableRevenue;
    obj.developer_shares = message.developerShares;
    obj.addr_derivation_cost_create = message.addrDerivationCostCreate ? message.addrDerivationCostCreate.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};