import { FeeShare, FeeShareSDKType } from "./feeshare";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** params are the feeshare module parameters */
  params?: Params;
  /** FeeShare is a slice of active registered contracts for fee distribution */
  feeShare: FeeShare[];
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  fee_share: FeeShareSDKType[];
}
/** Params defines the feeshare module params */
export interface Params {
  /** enable_feeshare defines a parameter to enable the feeshare module */
  enableFeeShare: boolean;
  /**
   * developer_shares defines the proportion of the transaction fees to be
   * distributed to the registered contract owner
   */
  developerShares: string;
  /**
   * allowed_denoms defines the list of denoms that are allowed to be paid to
   * the contract withdraw addresses. If said denom is not in the list, the fees
   * will ONLY be sent to the community pool.
   * If this list is empty, all denoms are allowed.
   */
  allowedDenoms: string[];
}
/** Params defines the feeshare module params */
export interface ParamsSDKType {
  enable_fee_share: boolean;
  developer_shares: string;
  allowed_denoms: string[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    feeShare: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feeShare) {
      FeeShare.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      feeShare: Array.isArray(object?.feeShare) ? object.feeShare.map((e: any) => FeeShare.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.feeShare = object.feeShare?.map(e => FeeShare.fromPartial(e)) || [];
    return message;
  }
};
function createBaseParams(): Params {
  return {
    enableFeeShare: false,
    developerShares: "",
    allowedDenoms: []
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableFeeShare === true) {
      writer.uint32(8).bool(message.enableFeeShare);
    }
    if (message.developerShares !== "") {
      writer.uint32(18).string(message.developerShares);
    }
    for (const v of message.allowedDenoms) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      enableFeeShare: isSet(object.enableFeeShare) ? Boolean(object.enableFeeShare) : false,
      developerShares: isSet(object.developerShares) ? String(object.developerShares) : "",
      allowedDenoms: Array.isArray(object?.allowedDenoms) ? object.allowedDenoms.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.enableFeeShare = object.enableFeeShare ?? false;
    message.developerShares = object.developerShares ?? "";
    message.allowedDenoms = object.allowedDenoms?.map(e => e) || [];
    return message;
  }
};