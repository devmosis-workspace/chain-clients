import { Revenue, RevenueSDKType } from "./revenue";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** params are the revenue module parameters */
  params?: Params;
  /** revenues is a slice of active registered contracts for fee distribution */
  revenues: Revenue[];
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
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
  addrDerivationCostCreate: Long;
}
/** Params defines the revenue module params */
export interface ParamsSDKType {
  enable_revenue: boolean;
  developer_shares: string;
  addr_derivation_cost_create: Long;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    revenues: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseParams(): Params {
  return {
    enableRevenue: false,
    developerShares: "",
    addrDerivationCostCreate: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableRevenue === true) {
      writer.uint32(8).bool(message.enableRevenue);
    }
    if (message.developerShares !== "") {
      writer.uint32(18).string(message.developerShares);
    }
    if (!message.addrDerivationCostCreate.isZero()) {
      writer.uint32(24).uint64(message.addrDerivationCostCreate);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      enableRevenue: isSet(object.enableRevenue) ? Boolean(object.enableRevenue) : false,
      developerShares: isSet(object.developerShares) ? String(object.developerShares) : "",
      addrDerivationCostCreate: isSet(object.addrDerivationCostCreate) ? Long.fromValue(object.addrDerivationCostCreate) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.enableRevenue = object.enableRevenue ?? false;
    message.developerShares = object.developerShares ?? "";
    message.addrDerivationCostCreate = object.addrDerivationCostCreate !== undefined && object.addrDerivationCostCreate !== null ? Long.fromValue(object.addrDerivationCostCreate) : Long.UZERO;
    return message;
  }
};