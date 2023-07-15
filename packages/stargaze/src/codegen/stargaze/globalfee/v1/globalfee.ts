import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params holds parameters for the globalfee module. */
export interface Params {
  /** Addresses which are whitelisted to modify the gas free operations */
  privilegedAddresses: string[];
  /** Minimum stores the minimum gas price(s) for all TX on the chain. */
  minimumGasPrices: DecCoin[];
}
/** Params holds parameters for the globalfee module. */
export interface ParamsSDKType {
  privileged_addresses: string[];
  minimum_gas_prices: DecCoinSDKType[];
}
/** Configuration for code Ids which can have zero gas operations */
export interface CodeAuthorization {
  /** authorized code ids */
  codeId: Long;
  /** authorized contract operation methods */
  methods: string[];
}
/** Configuration for code Ids which can have zero gas operations */
export interface CodeAuthorizationSDKType {
  code_id: Long;
  methods: string[];
}
/** Configuration for contract addresses which can have zero gas operations */
export interface ContractAuthorization {
  /** authorized contract addresses */
  contractAddress: string;
  /** authorized contract operation methods */
  methods: string[];
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
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseCodeAuthorization(): CodeAuthorization {
  return {
    codeId: Long.UZERO,
    methods: []
  };
}
export const CodeAuthorization = {
  encode(message: CodeAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    for (const v of message.methods) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): CodeAuthorization {
    return {
      codeId: isSet(object.codeId) ? Long.fromValue(object.codeId) : Long.UZERO,
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<CodeAuthorization>): CodeAuthorization {
    const message = createBaseCodeAuthorization();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? Long.fromValue(object.codeId) : Long.UZERO;
    message.methods = object.methods?.map(e => e) || [];
    return message;
  }
};
function createBaseContractAuthorization(): ContractAuthorization {
  return {
    contractAddress: "",
    methods: []
  };
}
export const ContractAuthorization = {
  encode(message: ContractAuthorization, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};