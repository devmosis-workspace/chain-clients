import { Params, ParamsAmino, ParamsSDKType, CodeAuthorization, CodeAuthorizationAmino, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationAmino, ContractAuthorizationSDKType } from "./globalfee";
import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
/** GenesisState defines the globalfee module's genesis state. */
export interface GenesisState {
  /** Module params */
  params: Params;
  /** Authorizations configured by code id */
  codeAuthorizations: CodeAuthorization[];
  /** Authorizations configured by contract addresses */
  contractAuthorizations: ContractAuthorization[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the globalfee module's genesis state. */
export interface GenesisStateAmino {
  /** Module params */
  params?: ParamsAmino;
  /** Authorizations configured by code id */
  code_authorizations?: CodeAuthorizationAmino[];
  /** Authorizations configured by contract addresses */
  contract_authorizations?: ContractAuthorizationAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the globalfee module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  code_authorizations: CodeAuthorizationSDKType[];
  contract_authorizations: ContractAuthorizationSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    codeAuthorizations: [],
    contractAuthorizations: []
  };
}
export const GenesisState = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.codeAuthorizations) {
      CodeAuthorization.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.contractAuthorizations) {
      ContractAuthorization.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      codeAuthorizations: Array.isArray(object?.codeAuthorizations) ? object.codeAuthorizations.map((e: any) => CodeAuthorization.fromJSON(e)) : [],
      contractAuthorizations: Array.isArray(object?.contractAuthorizations) ? object.contractAuthorizations.map((e: any) => ContractAuthorization.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.codeAuthorizations = object.codeAuthorizations?.map(e => CodeAuthorization.fromPartial(e)) || [];
    message.contractAuthorizations = object.contractAuthorizations?.map(e => ContractAuthorization.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.codeAuthorizations = object.code_authorizations?.map(e => CodeAuthorization.fromAmino(e)) || [];
    message.contractAuthorizations = object.contract_authorizations?.map(e => ContractAuthorization.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.codeAuthorizations) {
      obj.code_authorizations = message.codeAuthorizations.map(e => e ? CodeAuthorization.toAmino(e) : undefined);
    } else {
      obj.code_authorizations = message.codeAuthorizations;
    }
    if (message.contractAuthorizations) {
      obj.contract_authorizations = message.contractAuthorizations.map(e => e ? ContractAuthorization.toAmino(e) : undefined);
    } else {
      obj.contract_authorizations = message.contractAuthorizations;
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
      typeUrl: "/publicawesome.stargaze.globalfee.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};