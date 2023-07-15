import { Params, ParamsSDKType } from "./params";
import { DenomAuthorityMetadata, DenomAuthorityMetadataSDKType } from "./authorityMetadata";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisState {
  /** params defines the paramaters of the module. */
  params?: Params;
  factoryDenoms: GenesisDenom[];
}
/** GenesisState defines the tokenfactory module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  factory_denoms: GenesisDenomSDKType[];
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenom {
  denom: string;
  authorityMetadata?: DenomAuthorityMetadata;
}
/**
 * GenesisDenom defines a tokenfactory denom that is defined within genesis
 * state. The structure contains DenomAuthorityMetadata which defines the
 * denom's admin.
 */
export interface GenesisDenomSDKType {
  denom: string;
  authority_metadata?: DenomAuthorityMetadataSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    factoryDenoms: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.factoryDenoms) {
      GenesisDenom.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      factoryDenoms: Array.isArray(object?.factoryDenoms) ? object.factoryDenoms.map((e: any) => GenesisDenom.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.factoryDenoms = object.factoryDenoms?.map(e => GenesisDenom.fromPartial(e)) || [];
    return message;
  }
};
function createBaseGenesisDenom(): GenesisDenom {
  return {
    denom: "",
    authorityMetadata: undefined
  };
}
export const GenesisDenom = {
  encode(message: GenesisDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.authorityMetadata !== undefined) {
      DenomAuthorityMetadata.encode(message.authorityMetadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisDenom {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      authorityMetadata: isSet(object.authorityMetadata) ? DenomAuthorityMetadata.fromJSON(object.authorityMetadata) : undefined
    };
  },
  fromPartial(object: Partial<GenesisDenom>): GenesisDenom {
    const message = createBaseGenesisDenom();
    message.denom = object.denom ?? "";
    message.authorityMetadata = object.authorityMetadata !== undefined && object.authorityMetadata !== null ? DenomAuthorityMetadata.fromPartial(object.authorityMetadata) : undefined;
    return message;
  }
};