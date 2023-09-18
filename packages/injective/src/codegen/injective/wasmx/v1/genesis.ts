import { RegisteredContract, RegisteredContractAmino, RegisteredContractSDKType, Params, ParamsAmino, ParamsSDKType } from "./wasmx";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface RegisteredContractWithAddress {
  address: string;
  registeredContract: RegisteredContract;
}
export interface RegisteredContractWithAddressProtoMsg {
  typeUrl: "/injective.wasmx.v1.RegisteredContractWithAddress";
  value: Uint8Array;
}
export interface RegisteredContractWithAddressAmino {
  address: string;
  registered_contract?: RegisteredContractAmino;
}
export interface RegisteredContractWithAddressAminoMsg {
  type: "/injective.wasmx.v1.RegisteredContractWithAddress";
  value: RegisteredContractWithAddressAmino;
}
export interface RegisteredContractWithAddressSDKType {
  address: string;
  registered_contract: RegisteredContractSDKType;
}
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to wasmx. */
  params: Params;
  /**
   * registered_contracts is an array containing the genesis registered
   * contracts
   */
  registeredContracts: RegisteredContractWithAddress[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/injective.wasmx.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisStateAmino {
  /** params defines all the parameters of related to wasmx. */
  params?: ParamsAmino;
  /**
   * registered_contracts is an array containing the genesis registered
   * contracts
   */
  registered_contracts: RegisteredContractWithAddressAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/injective.wasmx.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the wasmx module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  registered_contracts: RegisteredContractWithAddressSDKType[];
}
function createBaseRegisteredContractWithAddress(): RegisteredContractWithAddress {
  return {
    address: "",
    registeredContract: RegisteredContract.fromPartial({})
  };
}
export const RegisteredContractWithAddress = {
  typeUrl: "/injective.wasmx.v1.RegisteredContractWithAddress",
  encode(message: RegisteredContractWithAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: RegisteredContractWithAddressAmino): RegisteredContractWithAddress {
    return {
      address: object.address,
      registeredContract: object?.registered_contract ? RegisteredContract.fromAmino(object.registered_contract) : undefined
    };
  },
  toAmino(message: RegisteredContractWithAddress): RegisteredContractWithAddressAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.registered_contract = message.registeredContract ? RegisteredContract.toAmino(message.registeredContract) : undefined;
    return obj;
  },
  fromAminoMsg(object: RegisteredContractWithAddressAminoMsg): RegisteredContractWithAddress {
    return RegisteredContractWithAddress.fromAmino(object.value);
  },
  fromProtoMsg(message: RegisteredContractWithAddressProtoMsg): RegisteredContractWithAddress {
    return RegisteredContractWithAddress.decode(message.value);
  },
  toProto(message: RegisteredContractWithAddress): Uint8Array {
    return RegisteredContractWithAddress.encode(message).finish();
  },
  toProtoMsg(message: RegisteredContractWithAddress): RegisteredContractWithAddressProtoMsg {
    return {
      typeUrl: "/injective.wasmx.v1.RegisteredContractWithAddress",
      value: RegisteredContractWithAddress.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    registeredContracts: []
  };
}
export const GenesisState = {
  typeUrl: "/injective.wasmx.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      registeredContracts: Array.isArray(object?.registered_contracts) ? object.registered_contracts.map((e: any) => RegisteredContractWithAddress.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.registeredContracts) {
      obj.registered_contracts = message.registeredContracts.map(e => e ? RegisteredContractWithAddress.toAmino(e) : undefined);
    } else {
      obj.registered_contracts = [];
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
      typeUrl: "/injective.wasmx.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};