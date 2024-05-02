import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
/** Params holds parameters for the globalfee module. */
export interface Params {
  /** Addresses which are whitelisted to modify the gas free operations */
  privilegedAddresses: string[];
  /** Minimum stores the minimum gas price(s) for all TX on the chain. */
  minimumGasPrices: DecCoin[];
}
export interface ParamsProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the globalfee module. */
export interface ParamsAmino {
  /** Addresses which are whitelisted to modify the gas free operations */
  privileged_addresses?: string[];
  /** Minimum stores the minimum gas price(s) for all TX on the chain. */
  minimum_gas_prices?: DecCoinAmino[];
}
export interface ParamsAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.Params";
  value: ParamsAmino;
}
/** Params holds parameters for the globalfee module. */
export interface ParamsSDKType {
  privileged_addresses: string[];
  minimum_gas_prices: DecCoinSDKType[];
}
/** Configuration for code Ids which can have zero gas operations */
export interface CodeAuthorization {
  /** authorized code ids */
  codeId: bigint;
  /** authorized contract operation methods */
  methods: string[];
}
export interface CodeAuthorizationProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.CodeAuthorization";
  value: Uint8Array;
}
/** Configuration for code Ids which can have zero gas operations */
export interface CodeAuthorizationAmino {
  /** authorized code ids */
  code_id?: string;
  /** authorized contract operation methods */
  methods?: string[];
}
export interface CodeAuthorizationAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.CodeAuthorization";
  value: CodeAuthorizationAmino;
}
/** Configuration for code Ids which can have zero gas operations */
export interface CodeAuthorizationSDKType {
  code_id: bigint;
  methods: string[];
}
/** Configuration for contract addresses which can have zero gas operations */
export interface ContractAuthorization {
  /** authorized contract addresses */
  contractAddress: string;
  /** authorized contract operation methods */
  methods: string[];
}
export interface ContractAuthorizationProtoMsg {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.ContractAuthorization";
  value: Uint8Array;
}
/** Configuration for contract addresses which can have zero gas operations */
export interface ContractAuthorizationAmino {
  /** authorized contract addresses */
  contract_address?: string;
  /** authorized contract operation methods */
  methods?: string[];
}
export interface ContractAuthorizationAminoMsg {
  type: "/publicawesome.stargaze.globalfee.v1.ContractAuthorization";
  value: ContractAuthorizationAmino;
}
/** Configuration for contract addresses which can have zero gas operations */
export interface ContractAuthorizationSDKType {
  contract_address: string;
  methods: string[];
}
function createBaseParams(): Params {
  return {
    privilegedAddresses: [],
    minimumGasPrices: []
  };
}
export const Params = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.privilegedAddresses) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.minimumGasPrices) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      privilegedAddresses: Array.isArray(object?.privilegedAddresses) ? object.privilegedAddresses.map((e: any) => String(e)) : [],
      minimumGasPrices: Array.isArray(object?.minimumGasPrices) ? object.minimumGasPrices.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.privilegedAddresses = object.privilegedAddresses?.map(e => e) || [];
    message.minimumGasPrices = object.minimumGasPrices?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.privilegedAddresses = object.privileged_addresses?.map(e => e) || [];
    message.minimumGasPrices = object.minimum_gas_prices?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.privilegedAddresses) {
      obj.privileged_addresses = message.privilegedAddresses.map(e => e);
    } else {
      obj.privileged_addresses = message.privilegedAddresses;
    }
    if (message.minimumGasPrices) {
      obj.minimum_gas_prices = message.minimumGasPrices.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.minimum_gas_prices = message.minimumGasPrices;
    }
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
      typeUrl: "/publicawesome.stargaze.globalfee.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
function createBaseCodeAuthorization(): CodeAuthorization {
  return {
    codeId: BigInt(0),
    methods: []
  };
}
export const CodeAuthorization = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.CodeAuthorization",
  encode(message: CodeAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.codeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.codeId);
    }
    for (const v of message.methods) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): CodeAuthorization {
    return {
      codeId: isSet(object.codeId) ? BigInt(object.codeId.toString()) : BigInt(0),
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<CodeAuthorization>): CodeAuthorization {
    const message = createBaseCodeAuthorization();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? BigInt(object.codeId.toString()) : BigInt(0);
    message.methods = object.methods?.map(e => e) || [];
    return message;
  },
  fromAmino(object: CodeAuthorizationAmino): CodeAuthorization {
    const message = createBaseCodeAuthorization();
    if (object.code_id !== undefined && object.code_id !== null) {
      message.codeId = BigInt(object.code_id);
    }
    message.methods = object.methods?.map(e => e) || [];
    return message;
  },
  toAmino(message: CodeAuthorization): CodeAuthorizationAmino {
    const obj: any = {};
    obj.code_id = message.codeId !== BigInt(0) ? message.codeId.toString() : undefined;
    if (message.methods) {
      obj.methods = message.methods.map(e => e);
    } else {
      obj.methods = message.methods;
    }
    return obj;
  },
  fromAminoMsg(object: CodeAuthorizationAminoMsg): CodeAuthorization {
    return CodeAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: CodeAuthorizationProtoMsg): CodeAuthorization {
    return CodeAuthorization.decode(message.value);
  },
  toProto(message: CodeAuthorization): Uint8Array {
    return CodeAuthorization.encode(message).finish();
  },
  toProtoMsg(message: CodeAuthorization): CodeAuthorizationProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.CodeAuthorization",
      value: CodeAuthorization.encode(message).finish()
    };
  }
};
function createBaseContractAuthorization(): ContractAuthorization {
  return {
    contractAddress: "",
    methods: []
  };
}
export const ContractAuthorization = {
  typeUrl: "/publicawesome.stargaze.globalfee.v1.ContractAuthorization",
  encode(message: ContractAuthorization, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    for (const v of message.methods) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): ContractAuthorization {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<ContractAuthorization>): ContractAuthorization {
    const message = createBaseContractAuthorization();
    message.contractAddress = object.contractAddress ?? "";
    message.methods = object.methods?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ContractAuthorizationAmino): ContractAuthorization {
    const message = createBaseContractAuthorization();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    message.methods = object.methods?.map(e => e) || [];
    return message;
  },
  toAmino(message: ContractAuthorization): ContractAuthorizationAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    if (message.methods) {
      obj.methods = message.methods.map(e => e);
    } else {
      obj.methods = message.methods;
    }
    return obj;
  },
  fromAminoMsg(object: ContractAuthorizationAminoMsg): ContractAuthorization {
    return ContractAuthorization.fromAmino(object.value);
  },
  fromProtoMsg(message: ContractAuthorizationProtoMsg): ContractAuthorization {
    return ContractAuthorization.decode(message.value);
  },
  toProto(message: ContractAuthorization): Uint8Array {
    return ContractAuthorization.encode(message).finish();
  },
  toProtoMsg(message: ContractAuthorization): ContractAuthorizationProtoMsg {
    return {
      typeUrl: "/publicawesome.stargaze.globalfee.v1.ContractAuthorization",
      value: ContractAuthorization.encode(message).finish()
    };
  }
};