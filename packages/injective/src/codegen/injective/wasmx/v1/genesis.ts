import { RegisteredContract, RegisteredContractSDKType, Params, ParamsSDKType } from "./wasmx";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface RegisteredContractWithAddress {
  address: string;
  registeredContract?: RegisteredContract;
}
export interface RegisteredContractWithAddressSDKType {
  address: string;
  registered_contract?: RegisteredContractSDKType;
}
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to wasmx. */
  params?: Params;
  /**
   * registered_contracts is an array containing the genesis registered
   * contracts
   */
  registeredContracts: RegisteredContractWithAddress[];
}
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  registered_contracts: RegisteredContractWithAddressSDKType[];
}
function createBaseRegisteredContractWithAddress(): RegisteredContractWithAddress {
  return {
    address: "",
    registeredContract: undefined
  };
}
export const RegisteredContractWithAddress = {
  encode(message: RegisteredContractWithAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.registeredContract !== undefined) {
      RegisteredContract.encode(message.registeredContract, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): RegisteredContractWithAddress {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      registeredContract: isSet(object.registeredContract) ? RegisteredContract.fromJSON(object.registeredContract) : undefined
    };
  },
  fromPartial(object: Partial<RegisteredContractWithAddress>): RegisteredContractWithAddress {
    const message = createBaseRegisteredContractWithAddress();
    message.address = object.address ?? "";
    message.registeredContract = object.registeredContract !== undefined && object.registeredContract !== null ? RegisteredContract.fromPartial(object.registeredContract) : undefined;
    return message;
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    registeredContracts: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.registeredContracts) {
      RegisteredContractWithAddress.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      registeredContracts: Array.isArray(object?.registeredContracts) ? object.registeredContracts.map((e: any) => RegisteredContractWithAddress.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.registeredContracts = object.registeredContracts?.map(e => RegisteredContractWithAddress.fromPartial(e)) || [];
    return message;
  }
};