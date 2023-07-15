import { Params, ParamsSDKType, CodeAuthorization, CodeAuthorizationSDKType, ContractAuthorization, ContractAuthorizationSDKType } from "./globalfee";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the globalfee module's genesis state. */
export interface GenesisState {
  /** Module params */
  params?: Params;
  /** Authorizations configured by code id */
  codeAuthorizations: CodeAuthorization[];
  /** Authorizations configured by contract addresses */
  contractAuthorizations: ContractAuthorization[];
}
/** GenesisState defines the globalfee module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  code_authorizations: CodeAuthorizationSDKType[];
  contract_authorizations: ContractAuthorizationSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    codeAuthorizations: [],
    contractAuthorizations: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};